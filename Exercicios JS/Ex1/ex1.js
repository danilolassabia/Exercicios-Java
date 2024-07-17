function mudarFundo(id) {
    let btnId = document.getElementById(id).id
    if (btnId == "btn-1") {
        document.body.style.backgroundColor = "red";
    }    
    else if (btnId == "btn-2") {
        document.body.style.backgroundColor = "green";
    }    
    else if (btnId == "btn-3") {
        document.body.style.backgroundColor = "blue";
    }    
    else{
        document.body.style.backgroundColor = "yellow";
    }    
}