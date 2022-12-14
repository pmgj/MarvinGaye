function posicao() {
  let title = document.querySelector("title");
  let value = (!title.firstChild && title.innerHTML) ? title.innerHTML : title.firstChild.nodeValue;
  let barra = ['Biografia', 'Discografia', 'Letras', 'Links', 'Principal'];
  for (let i = 0; i < barra.length; i++) {
    if (value.indexOf(barra[i]) != -1) {
      return i;
    }
  }
  return barra.length - 1;
}
function textoInformativo(posicao) {
  let infos = ['Biografia de Marvin Gaye', 'Singles e Álbuns de Marvin Gaye', 'Letras das Músicas de Marvin Gaye', 'Links para outros sítios de Marvin Gaye', 'Sítio sobre o cantor de soul Marvin Gaye'];
  return infos[posicao];
}
function gerarTopo() {
  let pos = posicao();
  let doc = '<header>' +
    '<div id="topoTexto">MARVIN GAYE</div>' +
    '<ul id="navegacao">' +
    '<li><a href="biografia.html">Biografia</a></li>' +
    '<li><a href="discos.html">Discografia</a></li>' +
    '<li><a href="letras.html">Letras</a></li>' +
    '<li><a href="links.html">Links</a></li>' +
    '<li><a href="index.html">Principal</a></li>' +
    '</ul>' +
    `<div id="textoInformativo">${textoInformativo(pos)}</div>` +
    '</header>';
  let body = document.querySelector("#caixaPrincipal");
  body.innerHTML = doc + body.innerHTML;
  let opcoes = document.querySelector("#navegacao");
  let lis = opcoes.querySelectorAll("li");
  let li = lis[pos];
  li.style.backgroundColor = "rgb(255,153,153)";
}
function gerarRodape() {
  let doc = '<footer><a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a></footer>';
  let body = document.querySelector("#caixaPrincipal");
  body.innerHTML += doc;
}
function funcoes() {
  gerarTopo();
  gerarRodape();
}
window.addEventListener("load", funcoes);