function posicao() {
  let title = document.getElementsByTagName("title")[0];
  let value = (!title.firstChild && title.innerHTML) ? title.innerHTML : title.firstChild.nodeValue;
  let barra = ['Biografia', 'Discografia', 'Letras', 'Links', 'Principal'];
  let i;
  for (i = 0; i < barra.length; i++) {
    if (value.indexOf(barra[i]) != -1) { break; }
  }
  if (i == barra.length) { i--; }
  return i;
}
function textoInformativo(posicao) {
  let infos = ['Biografia de Marvin Gaye', 'Singles e Álbuns de Marvin Gaye', 'Letras das Músicas de Marvin Gaye', 'Links para outros sítios de Marvin Gaye', 'Sítio sobre o cantor de soul Marvin Gaye'];
  return infos[posicao];
}
function gerarTopo() {
  let pos = posicao();

  let doc = '' +
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
    `<div id="textoInformativo">${textoInformativo(pos)}</div>` +
    '</div>';
  let body = document.getElementById("caixaPrincipal");
  body.innerHTML = doc + body.innerHTML;

  let opcoes = document.getElementById("navegacao");
  if (opcoes.getElementsByTagName) {
    let lis = opcoes.getElementsByTagName("li");
    let li = lis[pos];
    li.style.backgroundColor = "rgb(255,153,153)";
  }
}
function gerarRodape() {
  let doc = '<div id="barra"> </div>' +
    '<ul id="botoes">' +
    '<li><a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a> </li>' +
    '</ul>';
  let body = document.getElementById("caixaPrincipal");
  body.innerHTML += doc;
}
function funcoes() {
  gerarTopo();
  gerarRodape();
}
window.onload = funcoes;