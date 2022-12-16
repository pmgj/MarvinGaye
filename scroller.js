function gerarEnderecoFigura(quantidadeFiguras) {
  let dataAtual = new Date();
  let num = dataAtual.getSeconds();
  num %= quantidadeFiguras;
  return num;
}
let scrollerheight;
let messages = new Array();
messages[0] = '<h2>MAIS MÚSICAS</h2><p>Adicionados os links das músicas restantes do álbum &#8220;Live At The London Palladium&#8221; e a música &#8220;You Can Leave, But It\'s Going to Cost You&#8221; do álbum &#8220;Here, My Dear&#8221;. [11/09/2005].</p>';
messages[1] = '<h2>ATUALIZAÇÃO</h2><p>Mudança da barra de navegação, remoção da seção de fotos, e-mail para contato no rodapé e novo topo para a página. [07/09/2005].</p>';
messages[2] = '<h2>HOW DEEP IS THE OCEAN?</h2><p>Acrescentada música do álbum &#8220;The Soulful Moods Of Marvin Gaye&#8221; [17/07/2005].</p>';
messages[3] = '<h2>HOW CAN I FORGET</h2><p>Adicionada música do álbum &#8220;That\'s The Way Love Is&#8221; [10/07/2005].</p>';
let tempo_espera = 4000;
let velocidade_subida = 70;
let i = messages.length > 2 ? 2 : 0;
function move(tdiv) {
  let top = parseInt(tdiv.style.top);
  if (isNaN(top) || (top > 0 && top <= 5)) {
    tdiv.style.top = "0";
    setTimeout(move, tempo_espera, first2_obj);
    setTimeout(move, tempo_espera, second2_obj);
  } else if (top >= tdiv.offsetHeight * -1) {
    tdiv.style.top = `${top - 5}px`;
    setTimeout(move, velocidade_subida, tdiv);
  } else {
    tdiv.style.top = scrollerheight;
    tdiv.innerHTML = messages[i];
    i = (i == messages.length - 1) ? 0 : i + 1;
  }
}
function startScroll() {
  first2_obj = document.getElementById("first");
  second2_obj = document.getElementById("second");
  move(first2_obj);
  second2_obj.style.top = scrollerheight;
}
function mudarPosicaoScroll() {
  let num = gerarEnderecoFigura(5);
  let doc = document.querySelector("main");
  doc.style.backgroundImage = `url(fotos/entrada/entrada${num}.jpg)`;
  doc = document.getElementById("scroller").style;
  switch (num) {
    case 0:
    case 1:
    case 3:
      doc.top = "0";
      doc.right = "0";
      break;
    case 2:
      doc.top = "0";
      doc.left = "0";
      break;
    case 4:
      doc.bottom = "0";
      doc.left = "0";
      break;
  }
}
function gerarScroll() {
  let string = `<div id="innerScroll">` +
    `<div id="first">${messages[0]}</div>` +
    `<div id="second">${messages[messages.length == 1 ? 0 : 1]}</div>` +
    '</div>';
  let scroll = document.getElementById("scroller");
  scroll.innerHTML = string;
  mudarPosicaoScroll();
  let is = document.querySelector("#innerScroll");
  scrollerheight = `${is.offsetHeight}px`;
}
window.addEventListener("load", () => {
  gerarScroll();
  startScroll();
});