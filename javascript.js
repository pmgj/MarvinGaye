let headerData = [{ label: "Biografia", text: "Biografia de Marvin Gaye", link: "biografia.html" }, { label: "Discografia", text: "Singles e Álbuns de Marvin Gaye", link: "discos.html" }, { label: "Letras", text: "Letras das Músicas de Marvin Gaye", link: "letras.html" }, { label: "Links", text: "Links para outros sítios de Marvin Gaye", link: "links.html" }, { label: "Principal", text: "Sítio sobre o cantor de soul Marvin Gaye", link: "index.html" }];
function posicao() {
  let title = document.querySelector("title");
  let value = title.textContent;
  for (let i = 0; i < headerData.length; i++) {
    if (value.indexOf(headerData[i].label) != -1) {
      return i;
    }
  }
  return headerData.length - 1;
}
function gerarTopo() {
  let pos = posicao();
  let body = document.querySelector("#caixaPrincipal");
  let main = document.querySelector("main");
  let header = document.createElement("header");
  body.insertBefore(header, main);
  header.textContent = 'MARVIN GAYE';
  let nav = document.createElement("nav");
  let doc = "<ul>";
  headerData.forEach((d, i) => doc += `<li${i === pos ? ' class="selected"' : ''}><a href="${d.link}">${d.label}</a></li>`);
  doc += "</ul>";
  nav.innerHTML = doc;
  body.insertBefore(nav, main);
  let div = document.createElement("div");
  div.textContent = headerData[pos].text;
  body.insertBefore(div, main);
}
function gerarRodape() {
  let footer = document.createElement("footer");
  footer.innerHTML = '<a href="mailto:paulomgj@gmail.com">paulomgj@gmail.com</a>';
  let body = document.querySelector("#caixaPrincipal");
  body.appendChild(footer);
}
function funcoes() {
  gerarTopo();
  gerarRodape();
}
window.addEventListener("load", funcoes);