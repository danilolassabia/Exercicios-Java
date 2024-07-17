function mudarFundo() {
  let value = document.getElementById("select").value;
  if (value == "op-1") {
    document.body.style.backgroundColor = "red";
  } else if (value == "op-2") {
    document.body.style.backgroundColor = "green";
  } else if (value == "op-3") {
    document.body.style.backgroundColor = "blue";
  } else if (value == "op-4") {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
}
