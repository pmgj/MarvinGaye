function ImagemEntrada(endereco, numeroFoto) {
  this.numeroFoto = numeroFoto;
  this.endereco = endereco;
}

function gerarEnderecoFigura(path, quantidadeFiguras) {
	var dataAtual = new Date();
	var num = dataAtual.getSeconds();
	num %= quantidadeFiguras;
	num = (isNaN(num)) ? 4 : num;
	path = "fotos/entrada/" + path + num + ".jpg"
  return new ImagemEntrada(path, num);
}

//configure the below five variables to change the style of the scroller
var scrollerheight = "120px";

//configure the below variable to change the contents of the scroller
var messages = new Array();
messages[0]='<h2>MAIS MÚSICAS</h2><p>Adicionados os links das músicas restantes do álbum &#8220;Live At The London Palladium&#8221; e a música &#8220;You Can Leave, But It\'s Going to Cost You&#8221; do álbum &#8220;Here, My Dear&#8221;. [11/09/2005].</p>';
messages[1]='<h2>ATUALIZAÇÃO</h2><p>Mudança da barra de navegação, remoção da seção de fotos, e-mail para contato no rodapé e novo topo para a página. [07/09/2005].</p>';
messages[2]='<h2>HOW DEEP IS THE OCEAN?</h2><p>Acrescentada música do álbum &#8220;The Soulful Moods Of Marvin Gaye&#8221; [17/07/2005].</p>';
messages[3]='<h2>HOW CAN I FORGET</h2><p>Adicionada música do álbum &#8220;That\'s The Way Love Is&#8221; [10/07/2005].</p>';

///////////////////

var tempo_espera = 4000; /* Tempo que a noticia fica parada para ser lida */
var velocidade_subida = 70; /* Velocidade que o scroll sobe */

if (messages.length>2) i=2;
else i=0;

function move3(whichdiv){
  tdiv = whichdiv;
  if(parseInt(tdiv.style.top) > 0 && parseInt(tdiv.style.top) <= 5) {
    tdiv.style.top = "0";
    setTimeout("move3(tdiv)",tempo_espera);
    setTimeout("move4(second2_obj)",tempo_espera);
  } else if (parseInt(tdiv.style.top) >= tdiv.offsetHeight*-1) {
    tdiv.style.top = (parseInt(tdiv.style.top) - 5) + "px";
    setTimeout("move3(tdiv)",velocidade_subida);
  } else {
    tdiv.style.top = scrollerheight;
    tdiv.innerHTML = messages[i];
    if(i==messages.length-1) i = 0;
    else i++;
  }
}

function move4(whichdiv){
  tdiv2 = whichdiv;
  if(parseInt(tdiv2.style.top) > 0 && parseInt(tdiv2.style.top) <= 5) {
    tdiv2.style.top = "0";
    setTimeout("move4(tdiv2)",tempo_espera);
    setTimeout("move3(first2_obj)",tempo_espera);
  } else if (parseInt(tdiv2.style.top) >= tdiv2.offsetHeight*-1) {
    tdiv2.style.top = (parseInt(tdiv2.style.top) - 5) + "px";
    setTimeout("move4(second2_obj)",velocidade_subida);
  } else {
    tdiv2.style.top = scrollerheight;
    tdiv2.innerHTML = messages[i];
    if(i==messages.length-1) i = 0;
    else i++;
  }
}

function startscroll(){
  first2_obj = document.getElementById("first");
  second2_obj = document.getElementById("second");
  move3(first2_obj);
  second2_obj.style.top = scrollerheight;
  second2_obj.style.visibility = 'visible';
}

function mudarPosicaoScroll() {
  var figura = gerarEnderecoFigura("entrada",5);
  var doc = document.getElementById("subCaixaPrincipal");
  doc.style.backgroundImage = "url(" + figura.endereco + ")";
  doc = document.getElementById("scroller").style;
  switch(figura.numeroFoto) {
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
  var string = '<div id="innerScroll" style="height: ' + scrollerheight + '">' +
  '<div id="first" style="position: absolute; top: 1px;">' +
  messages[0] +
  '</div>' +
  '<div id="second" style="position: absolute;">' +
  messages[dyndetermine=(messages.length==1)? 0 : 1] +
  '</div>' +
  '</div>';
  var scroll = document.getElementById("scroller");
  scroll.innerHTML = string;
  mudarPosicaoScroll();
}

var old = (window.onload) ? window.onload : function () {};
window.onload = function () {old(); gerarScroll(); startscroll()};
