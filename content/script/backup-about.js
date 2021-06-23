lst_ids = lst_ids.concat(
[
  {
    id: "Profile",
    func: GetProfile,
  },
]);

function GetProfile()
{
  if (sessionStorage.getItem("lang") == pt_lang)
  {
    return `
      <p>
      Eu acho incr\&iacute;vel como algumas de nossas caracter\&iacute;sticas s\&atilde;o formadas ainda muito cedo. Desde pequeno, eu sempre gostei muito de m\&uacute;sica, fotos e tecnologia. Mas o desenvolvimento desses interesses ocorreu de forma distinta para cada um deles.
      </p>
      <p>
      Eu batucava em qualquer lugar quando ouvia uma m\&uacute;sica que gostava. Ent\&atilde;o, muito naturalmente eu comecei a ter aulas de m\&uacute;sica com 8 anos de idade. Tive um ensino b\&aacute;sico (por\&eacute;m essencial) em teorica musical, teclado e saxofone. A consequ\&ecirc;ncia dos estudos foram anos tocando saxofone na igreja e em diversos casamentos.
      </p>
      <p>
      J\&aacute; meu interesse tecnol\&oacute;gico despertou mesmo quando eu ganhei meu primeiro computador, aos 12 anos de idade. Eu adorava aprender comandos do prompt e minha meta era sempre deixar o Windows mais r\&aacute;pido e mais bonito. O amadurecimento desse interesse veio ent\&atilde;o mais tarde, com a faculdade. Me formei em Engenharia da Computa\&ccedil;\&atilde;o, selando de vez minha intimidade com tecnologia, para sempre.
      </p>
      <p>
      Mas foi com o fim da faculdade que eu consegui me aproximar da fotografia (no final de 2014). At\&eacute; ent\&atilde;o eu era fascinado por belas fotos que me permitiam ver os cantos do mundo, mas eu era incapaz de reproduzir qualquer foto com qualidade semelhante. Foi ent\&atilde;o que resolvi pesquisar o que era necess\&aacute;rio para obter uma foto "perfeita". Desde ent\&atilde;o, entrei em um caminho sem volta em busca de conhecimento, pr\&aacute;tica e equipamentos para aprimorar cada vez mais meus resultados.
      </p>
      <p>
      Seis anos se passaram. Tirei muitas fotos ruins nesse tempo, que me ensinaram muito. Hoje tenho orgulho de diversas fotos. O suficiente para querer compartilh\&aacute;-las com aqueles que tamb\&eacute;m apreciam fotografia.
      </p>
      <p>
      Mas ao longo desse caminho, enquanto eu me aprofundava em todos esses interesses, um novo surgiu repentinamente. Eu descobri a escrita. Comecei a escrever para por para fora minhas desilus\&otilde;es amorosas e os textos acabram rendendo um blog com mais de 100 postagens.
      </p>
      <p>
      Hoje eu coleciono alguns textos e fotos dos quais me orgulho muito. Ent\&atilde;o resolvi criar esse site como um portf\&oacute;lio, para poder compartilhar com os amigos e amantes de fotografia, m\&uacute;sica e literatura, um pouco do que eu produzo e j\&aacute; produzi ao longo dos anos, reunido em um s\&oacute; lugar. O site \&eacute; um ponto de encontro dos meus interesses, pois n\&atilde;o s\&oacute; todo conte\&uacute;do \&eacute; de minha autoria, como tamb\&eacute;m o site em si foi projetado e desenvolvido por mim.
      </p>
      <p>
      Sem mais, sejam bem-vindos! Espero que a visita gere algum prazer e passa-tempo.
      </p>
    `;
  }
  else
  {
    return `
    <p>
      It's amazing how some of the things that define us, are formed very early in our lives. Since I was little, I've always shown interest in music, photography and technologies. But the development of these interests happened very differently.
      </p>
      <p>
      I used to start drumming anywhere I could when I listened to a song I liked. So very naturally, I started to study music. I learnt music theory and learnt how to play the keyboards and the saxophone. A couple of years later I was playing in several wedding ceremonies and regularly playing at the church.
      </p>
      <p>
      Although I have always been curious about tech equipment, my interest in technology really begun when I got my first computer, at age of 12. I loved to learn prompt commands and my goal was almost always to make Windows run faster and appear prettier. Years passed and this closeness with computers led me to a Computer Engineering degree, glueing me to technology forever.
      </p>
      <p>
      It was only when I finished college that I managed to get closer to photography (at the end of 2014). Until then I was fascinated by beautiful pictures of landscapes, sunsets and the moon, but I was completely incapable of taking any good pictures with my family's camera. But one day I decided to research and find what one needed to take a "perfect" photo. Since then I started an endless path in search of knowledge, practice and equipment to improve my results more and more.
      </p>
      <p>
      Now, six years have gone by. I've taken many bad pictures that thought me much. Today I'm proud of a lot of pictures. Enough to want to share with those who also appreciate photography.
      </p>
      <p>
      But during all this time, while learning all these interests I had, a new one came along unnoticed. I discovered writing. I started writing to get rid of the feelings of love delusions and I ended up with a blog with over 100 posts.
      </p>
      <p>
      Today I collect some texts and photos of which I am honestly proud of. So I decided to create this website as a portfolio to share with friends and lovers of photography, music and literature, a bit of what I have produced along this years, in only one place. This website is where my skills and passions meet because not only all the art and content were created by me but also the website itself was projected and designed by me.
      </p>
      <p>
      Without any further ado, welcome! I hope the visit is pleasant and that makes you come back somehow.
      </p>
    `;
  }
}