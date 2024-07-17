function mudarCorFundoOuFonte(id) {
  let paragrafo = document.getElementById("paragrafo");
  let btnId = document.getElementById(id).id;
  if (btnId == "btn-1") {
    paragrafo.style.color = "white";
  } else if (btnId == "btn-2") {
    paragrafo.style.color = "black";
  } else if (btnId == "btn-3") {
    paragrafo.style.background = "white";
  } else {
    paragrafo.style.background = "black";
  }
}

function aumentarOuDiminuir(id) {
  let btnId = document.getElementById(id).id;
  let paragrafo = document.getElementById("paragrafo");
  let tamanhoFonte = parseFloat(
    window.getComputedStyle(paragrafo).getPropertyValue("font-size")
  );
  if (btnId == "btn-5") {
    tamanhoFonte++;
    paragrafo.style.fontSize = tamanhoFonte + "px";
  } else {
    tamanhoFonte--;
    paragrafo.style.fontSize = tamanhoFonte + "px";
  }
}

function maiusculoOuMinusculo(id) {
  let paragrafo = document.getElementById("paragrafo");
  let btnId = document.getElementById(id).id;
  if (btnId == "btn-8") {
    paragrafo.textContent = paragrafo.textContent.toLowerCase();
  } else {
    paragrafo.textContent = paragrafo.textContent.toUpperCase();
  }
}
