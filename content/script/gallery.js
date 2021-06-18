document.addEventListener("DOMContentLoaded", InsertPhotos);
var lst_photos = [[], [], [], [], [], []];
var image_click = false;
var change_photo = false;
var selected_photo;

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

function AddPhoto (file_name)
{
  var photo = new Photo(file_name);
  lst_photos[photo.rating].push(photo);
}

AddPhoto("20160729_063518-site, sky, Travel-2.jpg");
AddPhoto("20161108_185603-Nature, rainbow, site-2.jpg");
AddPhoto("20161115_233613-NightSky, site-2.jpg");
AddPhoto("20161126_124235-flower, Nature, site-3.jpg");
AddPhoto("20161218_060622-moon, site-3.jpg");
AddPhoto("20170105_184909-Nature, rainbow, site-3.jpg");
AddPhoto("20170617_170736-site, wildlife-3.jpg");
AddPhoto("20170617_171116-site, wildlife-3.jpg");
AddPhoto("20170617_171146-site, wildlife-3.jpg");
AddPhoto("20170730_115905-panorama, rio, site-2.jpg");
AddPhoto("20170730_134620-Nature, site-2.jpg");
AddPhoto("20171225_080600-BW, site, Travel-4.jpg");
AddPhoto("20171225_130821-macro, site-2.jpg");
AddPhoto("20171225_131040-Nature, site-3.jpg");
AddPhoto("20171225_131058-Nature, site-2.jpg");
AddPhoto("20171226_133329-BW, panorama, site-3.jpg");
AddPhoto("20171227_110305-site, wildlife-3.jpg");
AddPhoto("20171227_110833-site, wildlife-4.jpg");
AddPhoto("20171227_111431-site, wildlife-4.jpg");
AddPhoto("20171227_111557-site, wildlife-4.jpg");
AddPhoto("20171227_180601-site, wildlife-4.jpg");
AddPhoto("20171228_102051-site, Stock-3.jpg");
AddPhoto("20171228_102756-BW, site, Stock-3.jpg");
AddPhoto("20171228_174802-BW, site-5.jpg");
AddPhoto("20171229_110616-Nature, site-3.jpg");
AddPhoto("20180102_155502-site, Street-1.jpg");
AddPhoto("20180310_105558-moon, Nature, site-2.jpg");
AddPhoto("20180506_174429-Nature, site-1.jpg");
AddPhoto("20180708_172625-Nature, site, wildlife-4.jpg");
AddPhoto("20180714_130339-Nature, site-2.jpg");
AddPhoto("20180714_131335-site, wildlife-2.jpg");
AddPhoto("20180714_184801-NightSky, site-3.jpg");
AddPhoto("20180714_185402-horizon, landscape, site-3.jpg");
AddPhoto("20180714_185453-horizon, landscape, site-3.jpg");
AddPhoto("20180727_190319-moon, site-3.jpg");
AddPhoto("20180922_184715-moon, site-3.jpg");
AddPhoto("20181021_173445-rio, site-3.jpg");
AddPhoto("20181104_174942-birds, site, wildlife-3.jpg");
AddPhoto("20181227_093801-Chaplin, site, Street-3.jpg");
AddPhoto("20181227_102645-Architecture, site-3.jpg");
AddPhoto("20181227_121912-abstract, Architecture, site-2.jpg");
AddPhoto("20181227_140018-flower, Nature, site-3.jpg");
AddPhoto("20181227_145406-site, wildlife-3.jpg");
AddPhoto("20181227_151352-site, wildlife-3.jpg");
AddPhoto("20181231_140715-landscape, site-3.jpg");
AddPhoto("20181231_215056-NightSky, site-3.jpg");
AddPhoto("20181231_215228-NightSky, site-3.jpg");
AddPhoto("20181231_221227-NightSky, site-3.jpg");
AddPhoto("20190119_183506-rio, site, sunset-3.jpg");
AddPhoto("20190119_183909-rio, site, sunset-3.jpg");
AddPhoto("20190119_184128-rio, site, sunset-3.jpg");
AddPhoto("20190119_184256-Nature, site, sky-2.jpg");
AddPhoto("20190119_184337-horizon, rio, site, Sun, sunset-3.jpg");
AddPhoto("20190323_163057-landscape, site-3.jpg");
AddPhoto("20190323_163349-landscape, site-3.jpg");
AddPhoto("20190323_174124-Nature, site-2.jpg");
AddPhoto("20190713_060150-landscape, rio, site-4.jpg");
AddPhoto("20190713_060601-rio, site-3.jpg");
AddPhoto("20190713_063521-rio, site, sunrise-5.jpg");
AddPhoto("20190713_063721-horizon, landscape, rio, site-4.jpg");
AddPhoto("20190713_063758-rio, site, sunrise-5.jpg");
AddPhoto("20190713_063928-landscape, rio, site, sunrise-4.jpg");
AddPhoto("20190713_064350-horizon, landscape, rio, site-4.jpg");
AddPhoto("20190713_064723-landscape, rio, site, sunrise-4.jpg");
AddPhoto("20190713_065043-Nature, site-3.jpg");
AddPhoto("20190713_071523-landscape, rio, site-4.jpg");
AddPhoto("20191011_112046-museum, site, Travel-1.jpg");
AddPhoto("20191011_123826-museum, site, Travel-3.jpg");
AddPhoto("20191013_121116-london, site-4.jpg");
AddPhoto("20191013_123640-london, site-3.jpg");
AddPhoto("20191013_124339-Comedy, site, squirrel, wildlife-3.jpg");
AddPhoto("20191013_131659-london, Nature, site, Trees-3.jpg");
AddPhoto("20191013_132130-london, Nature, site-3.jpg");
AddPhoto("20191014_114410-london, site, Street-2.jpg");
AddPhoto("20191014_115402-london, site, Street-2.jpg");
AddPhoto("20191015_061216-site, Street, wildlife-3.jpg");
AddPhoto("20191015_065703-site, squirrel, wildlife-3.jpg");
AddPhoto("20191015_080505-london, site, Street-5.jpg");
AddPhoto("20191015_104203-landscape, Nature, site, Trees-2.jpg");
AddPhoto("20191015_104312-birds, site, wildlife-2.jpg");
AddPhoto("20191015_105108-Nature, site, Trees-3.jpg");
AddPhoto("20191015_110730-Nature, site-3.jpg");
AddPhoto("20191015_110939-Nature, site-4.jpg");
AddPhoto("20191015_111906-Nature, site-3.jpg");
AddPhoto("20191015_112732-landscape, site, Trees-3.jpg");
AddPhoto("20191015_113749-site, wildlife-5.jpg");
AddPhoto("20191015_115738-site, wildlife-2.jpg");
AddPhoto("20191015_115808-site, wildlife-5.jpg");
AddPhoto("20191015_120118-Nature, site-3.jpg");
AddPhoto("20191015_124250-birds, site, wildlife-3.jpg");
AddPhoto("20191016_121724-site, Street-2.jpg");
AddPhoto("20191016_121846-BW, People, site-3.jpg");
AddPhoto("20191016_133849-london, site, Travel-2.jpg");
AddPhoto("20191018_082132-london, site, Travel-3.jpg");
AddPhoto("20191018_120559-london, site, Travel-3.jpg");
AddPhoto("20191019_130129-london, site, Travel-4.jpg");
AddPhoto("20191020_073818-abstract, ceiling, site-1.jpg");
AddPhoto("20191020_085124-birds, site, wildlife-3.jpg");
AddPhoto("20191021_084601-london, museum, site-2.jpg");
AddPhoto("20191021_103031-london, site, Street-3.jpg");
AddPhoto("20191021_135022-london, site-5.jpg");
AddPhoto("20191021_140121-london, site-3.jpg");
AddPhoto("20191021_150556-london, site-3.jpg");
AddPhoto("20191021_160827-london, site-2.jpg");
AddPhoto("20191021_174616-london, site-5.jpg");
AddPhoto("20191021_182055-london, site-2.jpg");
AddPhoto("20191022_040310-london, site-4.jpg");
AddPhoto("20191022_040754-london, site, Street-2.jpg");
AddPhoto("20191022_040927-london, site-5.jpg");
AddPhoto("20191217_144716-abstract, Architecture, ceiling, site-2.jpg");
AddPhoto("20191228_184829-NY, site, Street-1.jpg");
AddPhoto("20191230_135618-abstract, Architecture, ceiling, NY, site-1.jpg");
AddPhoto("20191230_181755-Architecture, ceiling, NY, site-2.jpg");
AddPhoto("20191231_111018-NY, site-3.jpg");
AddPhoto("20191231_124803-NY, site, Street, Travel-3.jpg");
AddPhoto("20191231_132541-Architecture, NY, site-3.jpg");
AddPhoto("20191231_145158-Architecture, NY, site-3.jpg");
AddPhoto("20200727_171019-moon, site-5.jpg");
AddPhoto("20201003_003538-moon, NightSky, site-3.jpg");
AddPhoto("20201014_143326-Nature, site-4.jpg");
AddPhoto("20201014_180031-horizon, Nature, site-2.jpg");
AddPhoto("20201014_191132-NightSky, site-5.jpg");
AddPhoto("20201015_131418-Nature, site-2.jpg");
AddPhoto("20201015_165249-Nature, site-3.jpg");
AddPhoto("20201017_112850-Comedy, site, wildlife-5.jpg");
AddPhoto("20201017_171419-site, wildlife-5.jpg");
AddPhoto("20201017_172147-site, wildlife-4.jpg");
AddPhoto("20201017_172426-site, wildlife-5.jpg");

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

function InsertPhotos()
{
  var grid = document.getElementsByClassName("grid")[0];
  
  for (var k = 4; k >= 0; k--)
  {
    lst_photos[5] = lst_photos[5].concat(lst_photos[k]);
  }
  lst_photos = lst_photos[5];
  
  var i = 0;
  lst_photos.forEach(photo => {
    var img = document.createElement("IMG");
    var divphoto = document.createElement("DIV");
    divphoto.className = "card";
    divphoto.photo = photo;
    img.src = "images/" + photo.name;
    img.className = "photo"
    photo.index = i;
    photo.show = true;
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
    divphoto.onmousedown = function ()
    {
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
    
    i++;
  });
}

function GetPrevPhotoIndex()
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

function GetNextPhotoIndex()
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

function ShowPhoto(i)
{
  var img = document.createElement("IMG");
  img.src = "images/" + lst_photos[i].name;
  img.className = "zoom"
  selected_photo = i;
  document.getElementsByClassName("slideshow")[0].style.display = "grid";
  document.getElementsByClassName("image")[0].appendChild(img);
  document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
  
  var nextdiv = document.getElementsByClassName("next")[0];
  var prevdiv = document.getElementsByClassName("prev")[0];
  if (GetNextPhotoIndex() > selected_photo)
    nextdiv.style.opacity = "100%";
  else
    nextdiv.style.opacity = "0%";
  
  if (GetPrevPhotoIndex() < selected_photo)
    prevdiv.style.opacity = "100%";
  else
    prevdiv.style.opacity = "0%";
}

function RemoveSelectedPhoto()
{
  var img_div = document.getElementsByClassName("image")[0];
  var child = img_div.lastElementChild; 
  while (child) {
    img_div.removeChild(child);
    child = img_div.lastElementChild;
  }
}

function HidePhoto()
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

function ImageClick()
{
  image_click = true;
}

function NextPhoto()
{
  change_photo = true;
  var next_index = GetNextPhotoIndex();
  if (next_index <= selected_photo)
    return;
  RemoveSelectedPhoto();
  ShowPhoto(next_index);
}

function PrevPhoto()
{
  change_photo = true;
  var prev_index = GetPrevPhotoIndex();
  if (prev_index >= selected_photo)
    return;
  RemoveSelectedPhoto();
  ShowPhoto(prev_index);
}

function ShowAll()
{
  document.getElementsByClassName("active")[0].className = "inactive";
  document.getElementById("All").className = "active";
  Array.from(document.getElementsByClassName("card"), card => {
    card.show();
  });
}

function HideAll()
{
  Array.from(document.getElementsByClassName("card"), card => {
    card.hide();
  }); 
}

function ShowCategory(category)
{
  document.getElementsByClassName("active")[0].className = "inactive";
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