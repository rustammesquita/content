lst_ids = lst_ids.concat(
[
  {
    id: "BlogMsg",
    func: GetBlogMsg,
  },
]);

function GetBlogMsg()
{
  if (sessionStorage.getItem("lang") == pt_lang)
  {
    return "Em breve, textos do blog <a href='https://semduvidassemcertezas.blogspot.com'>Sem D\&uacute;vidas, Sem Certezas</a> aqui."
  }
}