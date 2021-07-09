lst_ids = lst_ids.concat(
[
  {
    id: "Profile",
    func: GetProfile,
  },
]);

document.addEventListener("DOMContentLoaded", function() {
  if (window.isMobile())
  {
    var profile = document.getElementsByClassName("profile")[0];
    profile.style.textAlign = "left";
    
    var photo = document.getElementsByClassName("photo")[0];
    photo.style.display = "none";
    
    var content = document.getElementsByClassName("content")[0];
    content.style.display = "block";
  }
});

function GetProfile ()
{
  // if (sessionStorage.getItem("lang") == pt_lang)
  {
    return `
      <div class="section"><div class="sectionbegin"></div>
      <p>
      A história de como eu me apaixonei pela fotografia não é surpreendente ou emocionante, ela é apenas curiosa. Acho incrível como ela surgiu a partir de um fascínio quando ainda criança. Mas eu sinto que para contar essa história, devo falar também sobre como surgiram meus outros hobbies. Pois com eles eu aprendi a me dedicar e desenvolver meus interesses.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Eu tive a sorte de ter aula de iniciação musical no colégio, aos 8 anos de idade. Eu amva! Era divertidíssimo. Quando completei 11, ganhei de aniversário um teclado. Eu nunca havia tocado em um teclado ou piano antes, mas no manual havia indicação das notas. Para mim, aquilo foi suficiente. Em minutos eu estava tocando o tema do filme Titanic (minha música preferida, na época). Ai não teve jeito, meus pais tiveram que me por em uma aula particular.
      </p><p>
      No mesmo ano eu me inscrevi para fazer parte da banda do colégio e fui aceito. Escolhi o saxofone como instrumento, inspirado no gosto musical dos meus pais que adoravam Kenny G. Daí em diante, eu passei a ter contato com diversos instrumentos e músicos. Comecei a tocar na igreja e depois em cerimônias de casamento. Quando entrei pra faculdade, o tempo para estudar música foi diminuindo. Mas certo dia, descobri que faculdade havia uma sala musical com violões disponíveis para os alunos pegarem emprestado. Então eu aprendi a tocar violão nos pequenos intervalos entre as aulas.
      </p><p>
      Hoje o meu contato com a música é menor, mas indiscutivelmente, ela foi a minha primeira paixão e eu sigo sendo um músico apaixonado.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Mas nem todas as minhas aptidões foram iniciadas ainda pequeno. Quando perdi meu bisavô na adolescência, eu tive o impulso de externar minha tristeza em um pequeno texto. Era uma forma de homenageá-lo com palavras bonitas e ao mesmo tempo materializar aquela dor fora do meu corpo. E foi bom. Escrever aquele texto me trouxe uma anestesia. Ainda que rápida, eu logo percebi que poderia renovar a sensação de anestesia ao reler o texto.
      </p><p>
      Alguns anos se passaram e quando eu tive a minha primeira desilusão amorosa, imediatamente comecei a escrever. Inicialmente eu escrevia só para mim, num bloco de notas. Mas certo dia, ao ler alguns dos meus textos, um amigo insistiu para que eu criasse um blog. Foi assim que surgiu o "Sem Dúvidas, Sem Certezas", um blog com textos românticos e reflexões sobre a vida. Atualmente inativo, o blog rendeu mais de 100 textos e alguns leitores fiéis. Apesar de seu fechamento em 2017, nunca deixei de ter carinho pelos textos que escrevi.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Contudo, durante meu envolvimento com a música e a escrita, um elemento sempre esteve presente: as fotos.
      Eu perdia horas no computador buscando imagens para usar como papel de parede. Eram fotos do pôr do sol, de neve, da lua, do oceano, de animais selvagens e por ai vai. Não tinha fim! Eu ficava hipnotizado com fotos bonitas, com os detalhes. Eu queria sempre mais! Queria conhecer aqueles lugares. Tirar aquelas fotos.
      </p><p>
      Das fotos que eu amava ver, o nascer do sol era a mais fácil de reproduzir. Não exigia viajar para um lugar com neve e nem para o meio da savana. Então, foi o que eu tentei fazer... por anos! E apesar de ter tentado todas as configurações possíveis que a Cybershot oferecia, nenhuma foto nunca saiu semelhante àquelas que eu tanto gostava de ver na internet. A verdade é que eu não sabia nada de fotografia. Eu aprendi a usar a câmera da melhor forma possível, mas não conseguia entender o porquê da foto não sair como eu esperava.
      </p><p>
      Certo dia, cansada das fotos de família terríveis, minha mãe pediu para que eu pesquisasse uma câmera que tirasse "boas fotos". Restando alguns meses para concluir a faculdade e com senso crítico bem mais maduro, eu me debrucei sobre a internet em busca de tal câmera e me perdi no mundo fotográfico. De lá para cá, foram inúmeras pesquisas sobre o funcionamento de uma câmera, sobre como uma foto é formada e muita mão na massa. Ainda tenho um longuíssimo caminho a percorrer, mas hoje eu posso finalmente olhar para as minhas fotos e ficar fascinado como eu ficava quando criança.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Hoje, saudoso por um blog desativado e com fotos se acumulando no instagram, tomei a decisão de criar um site pessoal. O objetivo principal é reunir minhas produções artísticas e manter registro para a posterioridade. Mas anseio pelas conexões que o site pode me trazer, além do engajamento e feedback de pessoas apaixonadas pelos mesmos hobbies que eu. Sem mais, sejam bem-vindos! Espero que a visita seja prazerosa.
      </p>
      </div>
    `;
  }
  // else
  {
    return `
    <div class="section"><div class="sectionbegin"></div>
      It's amazing how some of the things that define us, are formed very early in our lives. Since I was little, I've always shown interest in music, photography and technologies. But the development of these interests happened very differently.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      I used to start drumming anywhere I could when I listened to a song I liked. So very naturally, I started to study music. I learnt music theory and learnt how to play the keyboards and the saxophone. A couple of years later I was playing in several wedding ceremonies and regularly playing at the church.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      Although I have always been curious about tech equipment, my interest in technology really begun when I got my first computer, at age of 12. I loved to learn prompt commands and my goal was almost always to make Windows run faster and appear prettier. Years passed and this closeness with computers led me to a Computer Engineering degree, glueing me to technology forever.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      It was only when I finished college that I managed to get closer to photography (at the end of 2014). Until then I was fascinated by beautiful pictures of landscapes, sunsets and the moon, but I was completely incapable of taking any good pictures with my family's camera. But one day I decided to research and find what one needed to take a "perfect" photo. Since then I started an endless path in search of knowledge, practice and equipment to improve my results more and more.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      Now, six years have gone by. I've taken many bad pictures that thought me much. Today I'm proud of a lot of pictures. Enough to want to share with those who also appreciate photography.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      But during all this time, while learning all these interests I had, a new one came along unnoticed. I discovered writing. I started writing to get rid of the feelings of love delusions and I ended up with a blog with over 100 posts.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      Today I collect some texts and photos of which I am honestly proud of. So I decided to create this website as a portfolio to share with friends and lovers of photography, music and literature, a bit of what I have produced along this years, in only one place. This website is where my skills and passions meet because not only all the art and content were created by me but also the website itself was projected and designed by me.
      </p>
      <div class="section"><div class="sectionbegin"></div>
      Without any further ado, welcome! I hope the visit is pleasant and that makes you come back somehow.
      </p>
    `;
  }
}