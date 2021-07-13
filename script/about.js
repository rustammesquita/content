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
      No mesmo ano eu me inscrevi para fazer parte da banda do colégio e fui aceito. Escolhi o saxofone como instrumento, inspirado no gosto musical dos meus pais que adoravam Kenny G. Daí em diante, eu passei a ter contato com diversos instrumentos e músicos. Comecei a tocar na igreja e depois em cerimônias de casamento. Quando entrei pra faculdade, o tempo para estudar música foi diminuindo. Mas certo dia, descobri que faculdade havia uma sala musical com violões disponíveis para os alunos pegarem emprestado. Então eu aprendi a tocar violão nos pequenos intervalos entre as aulas.
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
      </div>
    `;
  }
  else
  {
    return `
      <div class="section"><div class="sectionbegin"></div>
      <p>
      The story of how I fell in love with photography it's not that exciting, it's just curious. I find it amazing how it all started with a child's fascination. But I can't tell this story without telling you about my other hobbies, since they taught me how to dedicate myself and how to develop my interests. 
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>      
      I was lucky enough to have an introduction to music class at school when I was 8. I used to love it! I had so much fun. When I turned 11, I got the keyboards as a birthday gift from my parents. I had never played the keyboards before, but the notes chart was enough to get me started. In a matter of minutes I was playing the titanic theme song (my favourite song at the time). After that, my parents put me in a piano class.
      </p>
      <p>      
      In the same year, I applied to be part of the school band and was accepted. I chose to learn how to play the saxophone, inspired by the musical taste of my parents who adored Kenny G. In the band, I stood in touch with several musicians and had the opportunity to play many instruments. Thereafter, I started playing at church and then at wedding ceremonies. When I entered college, the time to study music started to decrease. But one day, I found out that the college had a music room with acoustic guitars available for students to borrow. So I learned to play the guitar in the short breaks between classes.
      </p>
      <p>
      Today I have less contact with music, I just play now and then, but the music was my first passion and I continue to be in love with it.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Not all my skills started when I was little. When I lost my great-grandfather in adolescence, I had the impulse to express my sadness in a small text. It was a way to honour him with beautiful words and at the same time materialize that pain outside my body. And it was good. Writing that text briefly softened the feelings. I soon realized that reading it again would keep that sensation.
      </p>
      <p>
      A few years passed and when I had my first heartbreak, I immediately started writing. Initially, I wrote just for myself. But one day, while reading some of my texts, a friend urged me to create a blog. That's how "Sem Dúvidas, Sem Certezas" was created. A blog with romantic texts and reflections on life. Currently inactive, the blog has yielded more than 100 texts and some loyal readers. Despite its closing in 2017, I never stopped being fond of the texts I wrote.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      However, while I dedicated my time to music and writing, one element was always present: the photos. I wasted hours on the computer looking for images to use as wallpaper. There were pictures of sunsets, snow, the moon, the ocean, wild animals and so on. It was endless! I got mesmerized by the detailed beautiful pictures. I always wanted more! I wanted to see those places. Take those pictures.
      </p>
      <p>
      Among all the kinds of photos I loved to see, a sunrise picture was the easiest one to reproduce. It didn't require me to travel to a snowy place or into the middle of the savanna. So that's what I tried to do... for years! And despite having tried every possible configuration that Cybershot offered, no photo has ever come out similar to the ones I so loved to see on the internet. The truth was I didn't know anything about photography. I had learned to use the camera as best I could, but I couldn't understand why the photo didn't turn out as I hope to be.
      </p>
      <p>
      One day, tired of the terrible family photographs, my mother asked me to research a camera that would take "good pictures". With a few months left to finish college and with much more critical thinking, I looked over the internet in search of such a camera and got lost in the photographic world. Since then, there have been countless researches about how a camera works, about how a photo is formed and a lot of pictures taken. I still have a very long way to go, but today I can finally look at my photos and be fascinated by them as I used to be as a child.
      </p>
      </div>
      <div class="section"><div class="sectionbegin"></div>
      <p>
      Today, missing the times of writing in a blog and with photos piling up on instagram, I made the decision to create this personal website. The main purpose of it is to gather my artistic productions and keep a record for later, but I also look forward to the feedback of people passionate about the same things I am. Without any further ado, welcome! I hope the visit is pleasant.
      </p>
      </div>
    `;
  }
}