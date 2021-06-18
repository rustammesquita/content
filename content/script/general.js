const pt_lang = "pt";
const eng_lang = "eng";
const menu_upper_case = true;

var lst_ids = [
  {
    id: "Home",
    func: GetHomeTitle,
  },
  {
    id: "Gallery",
    func: GetGalleryTitle,
  },
  {
    id: "Blog",
    func: GetBlogTitle,
  },
  {
    id: "About",
    func: GetAboutTitle,
  },
  {
    id: "Contact",
    func: GetContactTitle,
  },
];

if (sessionStorage.getItem("lang") == undefined)
{
  sessionStorage.setItem("lang", eng_lang);
}

function RemoveClass (elem, classname)
{
  var pos = elem.className.indexOf(" " + classname);
  if (pos >= 0)
    elem.className = elem.className.slice(0, pos);
}

function GetHomeTitle ()
{
  var title = "Home";
  if (menu_upper_case)
    title = title.toUpperCase();
  return title;
}

function GetGalleryTitle ()
{
  var title = "Gallery";
  if (sessionStorage.getItem("lang") == pt_lang)
    title = "Galeria";
  if (menu_upper_case)
    title = title.toUpperCase();
  return title;
}

function GetBlogTitle ()
{
  var title = "Blog";
  if (sessionStorage.getItem("lang") == pt_lang)
    title = "Blog";
  if (menu_upper_case)
    title = title.toUpperCase();
  return title;
}

function GetAboutTitle ()
{
  var title = "About";
  if (sessionStorage.getItem("lang") == pt_lang)
    title = "Sobre";
  if (menu_upper_case)
    title = title.toUpperCase();
  return title;
}

function GetContactTitle ()
{
  var title = "Contact";
  if (sessionStorage.getItem("lang") == pt_lang)
    title = "Contato";
  if (menu_upper_case)
    title = title.toUpperCase();
  return title;
}

function GetURLParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) 
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) 
    {
      return sParameterName[1];
    }
  }
}

function UseEnglish ()
{
  sessionStorage.setItem("lang", eng_lang);
  UpdatePageTexts();
}

function UsePortuguese ()
{
  sessionStorage.setItem("lang", pt_lang);
  UpdatePageTexts();
}

function UpdatePageTexts()
{
  const l = lst_ids.length;
  for (var i = 0; i < l; ++i)
  {
    document.getElementById(lst_ids[i].id).innerHTML = lst_ids[i].func(lst_ids[i].id);
  }
}