function mudarCorFundoOuFonte(id){
    let paragrafo = document.getElementById("paragrafo")
    let btnId = document.getElementById(id).id
    if (btnId == "btn-1") {
        paragrafo.style.color = "white"
    }
    else if (btnId == "btn-2") {
        paragrafo.style.color = "black"
    }
    else if (btnId == "btn-3") {
        paragrafo.style.background = "white"
    }
    else {
        paragrafo.style.background = "black"
    }
}