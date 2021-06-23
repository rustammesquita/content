document.addEventListener("DOMContentLoaded", InitPage);

function InitPage()
{
  if (sessionStorage.getItem("from_home") == "true")
  {
    var navbar = document.getElementsByClassName("navbar")[0];
    var logo = document.getElementsByClassName("logo")[0];
    var langicos = document.getElementsByClassName("langicos")[0];
    RemoveClass(navbar, "preload");
    RemoveClass(logo, "preload");
    RemoveClass(langicos, "preload");
  }
  sessionStorage.setItem("from_home", "false");
  UpdatePageTexts();
}
