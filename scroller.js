class ImagemEntrada {
  constructor(endereco, numeroFoto) {
    this.numeroFoto = numeroFoto;
    this.endereco = endereco;
  }
}

function gerarEnderecoFigura(path, quantidadeFiguras) {
  let dataAtual = new Date();
  let num = dataAtual.getSeconds();
  num %= quantidadeFiguras;
  num = (isNaN(num)) ? 4 : num;
  path = `fotos/entrada/${path}${num}.jpg`;
  return new ImagemEntrada(path, num);
}

//configure the below five variables to change the style of the scroller
let scrollerheight = "120px";

//configure the below variable to change the contents of the scroller
let messages = new Array();
messages[0] = '<h2>MAIS MÚSICAS</h2><p>Adicionados os links das músicas restantes do álbum &#8220;Live At The London Palladium&#8221; e a música &#8220;You Can Leave, But It\'s Going to Cost You&#8221; do álbum &#8220;Here, My Dear&#8221;. [11/09/2005].</p>';
messages[1] = '<h2>ATUALIZAÇÃO</h2><p>Mudança da barra de navegação, remoção da seção de fotos, e-mail para contato no rodapé e novo topo para a página. [07/09/2005].</p>';
messages[2] = '<h2>HOW DEEP IS THE OCEAN?</h2><p>Acrescentada música do álbum &#8220;The Soulful Moods Of Marvin Gaye&#8221; [17/07/2005].</p>';
messages[3] = '<h2>HOW CAN I FORGET</h2><p>Adicionada música do álbum &#8220;That\'s The Way Love Is&#8221; [10/07/2005].</p>';

///////////////////

let tempo_espera = 4000; /* Tempo que a noticia fica parada para ser lida */
let velocidade_subida = 70; /* Velocidade que o scroll sobe */

i = messages.length > 2 ? 2 : 0;

function move3(whichdiv) {
  tdiv = whichdiv;
  if (parseInt(tdiv.style.top) > 0 && parseInt(tdiv.style.top) <= 5) {
    tdiv.style.top = "0";
    setTimeout(move3, tempo_espera, tdiv);
    setTimeout(move4, tempo_espera, second2_obj);
  } else if (parseInt(tdiv.style.top) >= tdiv.offsetHeight * -1) {
    tdiv.style.top = (parseInt(tdiv.style.top) - 5) + "px";
    setTimeout(move3, velocidade_subida, tdiv);
  } else {
    tdiv.style.top = scrollerheight;
    tdiv.innerHTML = messages[i];
    if (i == messages.length - 1) i = 0;
    else i++;
  }
}

function move4(whichdiv) {
  tdiv2 = whichdiv;
  if (parseInt(tdiv2.style.top) > 0 && parseInt(tdiv2.style.top) <= 5) {
    tdiv2.style.top = "0";
    setTimeout(move4, tempo_espera, tdiv2);
    setTimeout(move3, tempo_espera, first2_obj);
  } else if (parseInt(tdiv2.style.top) >= tdiv2.offsetHeight * -1) {
    tdiv2.style.top = (parseInt(tdiv2.style.top) - 5) + "px";
    setTimeout(move4, velocidade_subida, second2_obj);
  } else {
    tdiv2.style.top = scrollerheight;
    tdiv2.innerHTML = messages[i];
    i = (i == messages.length - 1) ? 0 : i + 1;
  }
}
function startscroll() {
  first2_obj = document.getElementById("first");
  second2_obj = document.getElementById("second");
  move3(first2_obj);
  second2_obj.style.top = scrollerheight;
  second2_obj.style.visibility = 'visible';
}
function mudarPosicaoScroll() {
  let figura = gerarEnderecoFigura("entrada", 5);
  let doc = document.querySelector("main");
  doc.style.backgroundImage = `url(${figura.endereco})`;
  doc = document.getElementById("scroller").style;
  switch (figura.numeroFoto) {
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
  let string = `<div id="innerScroll" style="height: ${scrollerheight}">` +
    `<div id="first" style="position: absolute; top: 1px;">${messages[0]}</div>` +
    `<div id="second" style="position: absolute;">${messages[messages.length == 1 ? 0 : 1]}</div>` +
    '</div>';
  let scroll = document.getElementById("scroller");
  scroll.innerHTML = string;
  mudarPosicaoScroll();
}
window.addEventListener("load", () => {
  gerarScroll();
  startscroll();
});