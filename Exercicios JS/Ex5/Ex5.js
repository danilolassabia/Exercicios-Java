function verificarCheckboxes(){
    let checkboxesMarcadas = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxesMarcadas.length > 1) {
        document.getElementById('button').disabled = false        
    } else {
        document.getElementById('button').disabled = true
    }
}