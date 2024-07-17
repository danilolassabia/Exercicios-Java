function mudarFundo(id) {
    let aId = document.getElementById(id).id
    if (aId == "a-1") {
        document.body.style.backgroundColor = "red";
    }    
    else if (aId == "a-2") {
        document.body.style.backgroundColor = "green";
    }    
    else if (aId == "a-3") {
        document.body.style.backgroundColor = "blue";
    }    
    else{
        document.body.style.backgroundColor = "yellow";
    }    
}