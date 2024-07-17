function verificarRadio() {
  let pessoaFisica = document.getElementById("fisica").checked;
  document.getElementById("cpf").disabled = !pessoaFisica;
  document.getElementById("cnpj").disabled = pessoaFisica;
  document.getElementById("data-nasc").disabled = !pessoaFisica;
}
