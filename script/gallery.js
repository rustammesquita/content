
// Start loading photo grid when html is ready
document.addEventListener("DOMContentLoaded", LoadPhotos);
if (window.isMobile())
  document.addEventListener('contextmenu', event => event.preventDefault());

/**********************************************/
/*            GLOBAL DEFINITIONS              */
/**********************************************/
var lst_photos = [[], [], [], [], [], []];
var image_click = false;
var change_photo = false;
var selected_photo;
var mouse_x_begin;
var mouse_x_end;
var mouse_y_begin;
var mouse_y_end;

// Fill the structure that contains the text content for a given html element id
lst_ids = lst_ids.concat(
[
  {
    id: "GalleryTitle",
    func: GetGalleryTitle,
  },
  {
    id: "All",
    func: GetCategoryName,
  },
  {
    id: "Rio",
    func: GetCategoryName,
  },
  {
    id: "Moon",
    func: GetCategoryName,
  },
  {
    id: "BW",
    func: GetCategoryName,
  },
  {
    id: "NightSky",
    func: GetCategoryName,
  },
  {
    id: "Sunset",
    func: GetCategoryName,
  },
  {
    id: "Wildlife",
    func: GetCategoryName,
  },
  {
    id: "London",
    func: GetCategoryName,
  },
  {
    id: "Street",
    func: GetCategoryName,
  },
]); 


// Maps the categories ids to their titles
var category_name = {
  "all": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Show All";
    else
      return "Todas";
  },
  "rio": function ()
  {
    return "Rio";
  },
  "bw": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Black and White";
    else
      return "Preto e Branco";
  },
  "nightsky": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Night Sky";
    else
      return "C&eacute;u Noturno";
  },
  "moon": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Moon";
    else
      return "Lua";
  },
  "wildlife": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Wildlife";
    else
      return "Vida Selvagem";
  },
  "street": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Streets";
    else
      return "Urbanas";
  },
  "london": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "London";
    else
      return "Londres";
  },
  "sunset": function ()
  {
    if (sessionStorage.getItem("lang") == eng_lang)
      return "Sunset";
    else
      return "P&ocirc;r do Sol";
  },
};

// Defines Photo class
class Photo{
  constructor(name)
  {
    this.name = name;
    var begin = name.indexOf("-") + 1;
    var end = name.indexOf("-", begin);
    var tags = name.slice(begin, end);
    this.categories = tags.split(", ");
    if (name[end + 1] == '.')
      this.rating = 0;
    else
      this.rating = parseInt(name[end + 1]);
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape)
    HidePhoto();
};

function AddPhoto (file_name)
{
  var photo = new Photo(file_name);
  lst_photos[photo.rating].push(photo);
}

function InsertPhoto (i)
{ 
  var cards = document.getElementsByClassName("card");
  if (cards[i] == undefined)
    return;
  
  var divphoto = cards[i];
  var img = divphoto.lastElementChild;
  var photo = divphoto.photo;
  img.src = "images/photos/" + "min_" + photo.name;
  img.addEventListener("load", function()
  {
    var category = sessionStorage.getItem("category");
    if (category == undefined || category == "All")
    {
      divphoto.show();
    }
    else
    {
      var show = false;
      Array.from(photo.categories, cat => {
        if (cat.toLowerCase() == category.toLowerCase())
          show = true;
      });
      if (show)
        divphoto.show();
    }
    
    InsertPhoto(i+1);
  });
}

function CreatePhotoCard (i)
{
  var photo = lst_photos[i];
  if (photo == undefined)
    return;

  var grid = document.getElementsByClassName("grid")[0];
  var img = document.createElement("IMG");
  var divphoto = document.createElement("DIV");
  divphoto.className = "card hidden";
  divphoto.photo = photo;
  img.className = "photo";
  photo.index = i;
  photo.show = false;
  divphoto.appendChild(img);
  grid.appendChild(divphoto);
  
  divphoto.onmouseover = function ()
  {
    img.className += " selected";
  }
  divphoto.onmouseleave = function ()
  {
    RemoveClass(img, "selected");
  }
  divphoto.onmousedown = function (event)
  {
    if (event.which != 1)
      return;
      
    RemoveClass(img, "selected");
    ShowPhoto(photo.index);
  }
  divphoto.show = function ()
  {
    photo.show = true;
    RemoveClass(divphoto, "hidden");
  }
  divphoto.hide = function ()
  {
    photo.show = false;
    divphoto.className += " hidden";
  }
  
  var slideshow = document.getElementsByClassName("slideshow")[0];
  slideshow.ontouchstart = function myFunction(event) {
    if (event.touches.length == 1)
    {
      mouse_x_begin = event.touches[0].clientX;
      mouse_y_begin = event.touches[0].clientY;
    }
    else
    {
      mouse_x_begin = undefined;
      mouse_y_begin = undefined;
    }
  }
  slideshow.ontouchmove = function myFunction(event) {
    if (event.touches.length == 1)
    {
      mouse_x_end = event.touches[0].clientX;
      mouse_y_end = event.touches[0].clientY;
    }
    else
    {
      mouse_x_end = undefined;
      mouse_y_end = undefined;
    }
  }
  slideshow.ontouchend = function myFunction(event) {
    if (mouse_x_begin == undefined || !image_click)
    {
      image_click = false;
      return;
    }
    image_click = false;
      
    if (mouse_x_end == undefined)
    {
      if (mouse_x_begin > screen.width / 2)
        NextPhoto();
      else
        PrevPhoto();
    }
    else if (Math.abs(mouse_x_begin - mouse_x_end) > Math.abs(mouse_y_begin - mouse_y_end))
    {
      if (mouse_x_begin - mouse_x_end > 5 && !window.inZoom())
        {NextPhoto(); alert("arrastou pra direita"); alert(mouse_x_begin - mouse_x_end);}
      else if (mouse_x_begin - mouse_x_end < -5 && !window.inZoom())
        PrevPhoto();
    }

    mouse_x_begin = undefined;
    mouse_x_end = undefined;
    mouse_y_begin = undefined;
    mouse_y_end = undefined;
  }
}

function LoadPhotos ()
{
  // Mark current category filter
  var id = "All";
  var category = sessionStorage.getItem("category");
  if (category != undefined && category != "All")
  {
    id = category;
  }
  document.getElementById(id).className = "active";
  
  // order photos by rating
  for (var k = 4; k >= 0; k--)
    lst_photos[5] = lst_photos[5].concat(lst_photos[k]);
  lst_photos = lst_photos[5];
  
  // Open photo slide if mobile and photo in session
  OpenPhoto();
  
  // Add cards with photos to grid
  for (var i = 0; i < lst_photos.length; ++i)
    CreatePhotoCard(i);
  
  InsertPhoto(0);
}

function GetPhotoParam ()
{
  var params = window.location.search;
  var i = params.indexOf("zoom");
  if (i > 0)
  {
    var photo = sessionStorage.getItem("selected_photo");
    if (photo != undefined)
      return Number(photo);
  }
  return -1;
}

function OpenPhoto ()
{
  var photo = GetPhotoParam();
  if (photo >= 0)
    ShowPhoto(photo);
}

function GetPrevPhotoIndex ()
{
  var i = 1;
  while (lst_photos[selected_photo - i] != undefined)
  {
    var img = lst_photos[selected_photo - i];
    if (img.show == true)
      return selected_photo - i;
      
    i++;
  }
  return selected_photo;
}

function GetNextPhotoIndex ()
{
  var i = 1;
  while (lst_photos[selected_photo + i] != undefined)
  {
    var img = lst_photos[selected_photo + i];
    if (img.show == true)
      return selected_photo + i;
      
    i++;
  }
  return selected_photo;
}

function ShowPhoto (i)
{
  sessionStorage.setItem("selected_photo", i);
  if (GetPhotoParam() == -1 && window.isMobile())
  {
    window.location = "gallery.html?zoom";
    return;
  }
  selected_photo = i;
  var img = document.createElement("IMG");
  img.src = "images/photos/" + lst_photos[i].name;
  img.className = "zoom hidden";
  
  var image = document.getElementsByClassName("image")[0];
  document.getElementsByClassName("slideshow")[0].style.display = "grid";
  image.appendChild(img);
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  
  image.style.borderStyle = "none";
  var loader = document.getElementsByClassName("lds-spinner")[0];
  var loaded = false;
  setInterval(function(){
    if (!loaded)
      loader.style.display = "inline-block";
  }, 200);
  
  
  img.addEventListener("load", function()
  {
    loaded = true;
    loader.style.display = "none";
    img.className = "zoom";
    image.style.borderStyle = "solid";
    
    if (!window.isMobile())
    {
      var nextdiv = document.getElementsByClassName("next")[0];
      var prevdiv = document.getElementsByClassName("prev")[0];
      if (GetNextPhotoIndex() > selected_photo)
        nextdiv.style.opacity = "100%";
      if (GetPrevPhotoIndex() < selected_photo)
        prevdiv.style.opacity = "100%";
    }
  });
}

function RemoveSelectedPhoto ()
{
  var nextdiv = document.getElementsByClassName("next")[0];
  var prevdiv = document.getElementsByClassName("prev")[0];
  nextdiv.style.opacity = "0%";
  prevdiv.style.opacity = "0%";
  
  var img_div = document.getElementsByClassName("image")[0];
  img_div.style.borderStyle = "none";
  var child = img_div.lastElementChild; 
  while (child) {
    img_div.removeChild(child);
    child = img_div.lastElementChild;
  }
  selected_photo = undefined;
  sessionStorage.setItem("selected_photo", null)
}

function HidePhoto ()
{
  if (image_click)
  {
    image_click = false;
    return;
  }
  
  if (change_photo)
  {
    change_photo = false;
    return;
  }
    
  document.getElementsByClassName("slideshow")[0].style.display = "none";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  RemoveSelectedPhoto();
}

function ImageClick ()
{
  image_click = true;
}

function NextPhoto ()
{
  change_photo = true;
  var next_index = GetNextPhotoIndex();
  if (next_index <= selected_photo)
    return;
  RemoveSelectedPhoto();
  ShowPhoto(next_index);
}

function PrevPhoto ()
{
  change_photo = true;
  var prev_index = GetPrevPhotoIndex();
  if (prev_index >= selected_photo)
    return;
  RemoveSelectedPhoto();
  ShowPhoto(prev_index);
}

function ShowAll ()
{
  sessionStorage.setItem("category", "All");
  document.getElementsByClassName("active")[0].className = "inactive";
  document.getElementById("All").className = "active";
  Array.from(document.getElementsByClassName("card"), card => {
    card.show();
  });
}

function HideAll ()
{
  Array.from(document.getElementsByClassName("card"), card => {
    card.hide();
  }); 
}

function ShowCategory (category)
{
  sessionStorage.setItem("category", category);
  var currActive = document.getElementsByClassName("active")[0];
  if (currActive != undefined)
    currActive.className = "inactive";
  document.getElementById(category).className = "active";
  Array.from(document.getElementsByClassName("card"), card => {
    Array.from(card.photo.categories, cat => {
      if (cat.toLowerCase() == category.toLowerCase())
        card.show();
    });
  });
}

function GetCategoryName (name)
{
  return category_name[name.toLowerCase()]();
}