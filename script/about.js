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
    
    var content = document.getElementsByClassName("content")[0];
    content.style.display = "block";
    
    content.removeChild(photo);
    photo.style.position = "relative";
    photo.style.width = "auto";
    photo.style.paddingRight = "1em";
    photo.style.marginTop = "-1.5rem";
    profile.appendChild(photo);
  }
});

function GetProfile ()
{
  if (sessionStorage.getItem("lang") == pt_lang)
  {
    return `
      <div class="section"><div class="sectionbegin"></div>
      <p>
      A história de como eu me apaixonei pela fotografia não é surpreendente ou emocionante, ela é apenas curiosa. Acho incrível como ela surgiu a partir de um fascínio quando ainda criança. Mas eu sinto que para contar essa história, devo falar também sobre como surgiram meus outros hobbies, pois com eles eu aprendi a me dedicar e desenvolver meus interesses.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Eu tive a sorte de ter aula de iniciação musical no colégio, aos 8 anos de idade. Eu amava! Era divertidíssimo. Quando completei 11, ganhei de aniversário um teclado. Eu nunca havia tocado em um teclado ou piano antes, mas no manual havia indicação das notas. Para mim, aquilo foi suficiente. Em minutos eu estava tocando o tema do filme Titanic (minha música preferida, na época). Ai não teve jeito, meus pais tiveram que me por em uma aula particular.
      </p><p>
      No mesmo ano eu me inscrevi para fazer parte da banda do colégio e fui aceito. Escolhi o saxofone como instrumento, inspirado no gosto musical dos meus pais que adoravam Kenny G. Daí em diante, eu passei a ter contato com diversos instrumentos e músicos. Comecei a tocar na igreja e depois em cerimônias de casamento. Quando entrei pra faculdade, o tempo para estudar música foi diminuindo. Mas certo dia, descobri que na faculdade havia uma sala musical com violões disponíveis para os alunos pegarem emprestado. Então eu aprendi a tocar violão nos pequenos intervalos entre as aulas.
      </p><p>
      Hoje o meu contato com a música é menor, mas indiscutivelmente, ela foi a minha primeira paixão e eu sigo sendo um músico apaixonado.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Mas nem todas as minhas aptidões foram iniciadas ainda pequeno. Quando perdi meu bisavô na adolescência, eu tive o impulso de externar minha tristeza em um pequeno texto. Era uma forma de homenageá-lo com palavras bonitas e ao mesmo tempo materializar aquela dor fora do meu corpo. E foi bom. Escrever aquele texto me trouxe uma anestesia, ainda que rápida. Logo eu percebi que essa sensação de anestesia era renovada toda vez que eu relia o texto.
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
      Hoje, saudoso por um blog desativado e com fotos se acumulando no instagram, tomei a decisão de criar um site pessoal. O objetivo principal é reunir minhas produções artísticas e manter registro para a posterioridade, mas anseio pelas conexões que o site pode me trazer, além do engajamento e feedback de pessoas apaixonadas pelos mesmos hobbies que eu. Sem mais, sejam bem-vindos! Espero que a visita seja prazerosa.
      </p>
      <p>
      Se você gostaria de ter um quadro com uma de minhas fotos, ou fazer um comentário sobre o conteúdo do site, você pode me contactar por email ou direct.
      </p>
      </div>
    `;
  }
  else
  {
    return `
      <div class="section"><div class="sectionbegin"></div>
      <p>
      The story of how I fell in love with photography isn’t that thrilling, but it’s certainly curious. I’m amazed to look back and see how it started as a childhood fascination. But I can’t go into it without telling you about my other hobbies, since they taught me how to be committed and develop my interest in music and writing.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      I was lucky enough to be introduced to music in school classes at the age of 8. I used to love it! I had so much fun. When I turned 11, I got a keyboard from my parents. By that time, I had never played the keyboard, but the notes chart was enough to get me started. In a matter of minutes, I was playing the Titanic theme song, which was my favorite song at the time. My parents enrolled me in piano classes afterwards.
      </p>
      <p>
      In that same year, I applied to the school band, and I was admitted. I chose to learn how to play the saxophone because I was inspired by the musical taste of my parents, who adored Kenny G. In the band, I stayed in touch with several musicians and had the opportunity to experiment with many instruments. Years later, I started off by playing at church followed by wedding ceremonies. When I entered college, my music studying time decreased. Fortunately, I found out my college had a music room with acoustic guitars available to students to borrow. I took the chance to learn how to play the guitar during the short breaks between classes.
      </p>
      <p>
      Today, I play now and then. Unfortunately, I’ve had less contact with music. Nevertheless, music was my first passion, and I’ve been in love with it ever since.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Not all my skills started when I was little. When I lost my great-grandfather in adolescence, I had the impulse to manifest my grief in a small text. It was a way to honor him with beautiful words and, at the same time, materialize that pain outside my body. Using words as a form of expression was a sound decision since writing that text shortly softened the feelings in such a way that doing it became meaningful to me.
      </p>
      <p>
      Not until I had my first heartbreak after a few years did I begin to write regularly. Initially, I wrote just for myself. But, one day, while reading some of my texts, a friend urged me to create a blog. That was how “Sem Dúvidas, Sem Certezas” came about. A blog with romantic texts and reflections on life. Currently inactive, the blog’s yielded more than 100 texts and some loyal readers. Despite its closing in 2017, I’ve never stopped being fond of the texts I’ve written.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      However, while I dedicated my time to music and writing, one element was always present: the photos. I spent hours on the computer looking for images to use as wallpapers. There were pictures of sunsets, snow, the moon, the ocean, wild animals, and many more. It was endless! I got mesmerized by the detailed and beautiful pictures. I wanted to see those places with my own eyes and take those pictures myself.
      </p>
      <p>
      Among all the kinds of photos I loved to see, sunrise ones were the easiest to work with. It didn’t take me a trip to a snowy place or to the middle of the savanna to reproduce them, so they were my tentative projects, for years... Despite every possible attempt to adjust the settings that Cybershot offered, none of the pictures ever came out similar to the ones I loved so much to see on the Internet. Actually, the truth was that I didn’t know anything about photography, even though I had learned to use the camera as best as I could.
      </p>
      <p>
      Once, tired of the poor family photographs, my mother asked me to find a camera that would take “good pictures.” With a few months left to finish college and having a better quality of critical thinking, I looked up on the Internet to find such a camera; and I ended up getting lost in the photographic world. Since then, I have done a great deal of research on how a camera works, the formation process of a photo, and taken many pictures. I still have a very long way to go, but today I can finally look at my photos and be fascinated by them as I used to be as a child.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Today, missing the times of writing blog posts and having photos piling up on Instagram, I decided to create this personal website. Its primary purpose is to gather my artistic productions and keep record of them for the future works. I also look forward to having feedback from people as passionate about the same things as I am. Without any further ado, welcome! I hope your visit will be pleasant.
      </p>
      <p>
      If you wish to own a printed version of one of my photos or comment on the content of this website, feel free contact me via email or direct message.
      </p>
      </div>
    `;
  }
}