function posicao() {
  var title = document.getElementsByTagName("title")[0];
  var value = (!title.firstChild && title.innerHTML) ? title.innerHTML : title.firstChild.nodeValue;
  var barra = ['Biografia', 'Discografia', 'Letras', 'Links', 'Principal'];
  var i;
  for (i = 0; i < barra.length; i++) {
    if (value.indexOf(barra[i]) != -1) { break; }
  }
  if (i == barra.length) { i--; }
  return i;
}
function textoInformativo(posicao) {
  var texto = '&nbsp;';
  switch (posicao) {
    case 0:
      texto = 'Biografia de Marvin Gaye';
      break;
    case 1:
      texto = 'Singles e Álbuns de Marvin Gaye';
      break;
    case 2:
      texto = 'Letras das Músicas de Marvin Gaye';
      break;
    case 3:
      texto = 'Links para outros sítios de Marvin Gaye';
      break;
    case 4:
      texto = 'Sítio sobre o cantor de soul Marvin Gaye';
      break;
  }
  return texto;
}
function gerarTopo() {
  var pos = posicao();

  var doc = '' +
    '<div id="topo">' +
    '<div id="topoTextoImagem">' +
    '<div id="topoTexto">' +
    'MARVIN GAYE' +
    '</div>' +
    '</div>' +
    '<ul id="navegacao">' +
    '<li><a href="biografia.html">Biografia</a></li>' +
    '<li><a href="discos.html">Discografia</a></li>' +
    '<li><a href="letras.html">Letras</a></li>' +
    '<li><a href="links.html">Links</a></li>' +
    '<li><a href="index.html">Principal</a></li>' +
    '</ul>' +
    '<div id="textoInformativo">' + textoInformativo(pos) + '</div>' +
    '</div>';
  var body = document.getElementById("caixaPrincipal");
  body.innerHTML = doc + body.innerHTML;

  var opcoes = document.getElementById("navegacao");
  if (opcoes.getElementsByTagName) {
    var lis = opcoes.getElementsByTagName("li");
    var li = lis[pos];
    li.style.backgroundColor = "rgb(255,153,153)";
  }
}
function gerarRodape() {
  var doc = '<div id="barra"> </div>' +
    '<ul id="botoes">' +
    '<li><a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a> </li>' +
    '</ul>';
  var body = document.getElementById("caixaPrincipal");
  body.innerHTML += doc;
}
function funcoes() {
  gerarTopo();
  gerarRodape();
}
window.onload = funcoes;
