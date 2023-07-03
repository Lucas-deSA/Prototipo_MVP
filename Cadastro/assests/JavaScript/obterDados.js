btnSalvar.addEventListener("click", function (event) {
  event.preventDefault();

  var frmCliente = document.querySelector("#frmCliente");

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (frmCliente.checkValidity()) {
    var data = {
      username: frmCliente.username.value,
      email: frmCliente.email.value,
      number: frmCliente.number.value,
      cpfCnpj: frmCliente.cpfCnpj.value,
      enderecoCep: frmCliente.enderecoCep.value,
      endereco: frmCliente.endereco.value,
      opcaoCadastro: getOpcaoCadastroSelecionada(),
    };

    localStorage.setItem("formData", JSON.stringify(data));

    // Redirecionar para a outra página
    window.location.href = "inform.html";
  } else {
    // Exibir mensagem de erro ou realizar outra ação apropriada
    alert("Preencha todos os campos obrigatórios antes de continuar.");
  }
});

function getOpcaoCadastroSelecionada() {
  var opcaoCadastroRadios = document.getElementsByName("opcaoCadastro");

  for (var i = 0; i < opcaoCadastroRadios.length; i++) {
    if (opcaoCadastroRadios[i].checked) {
      return opcaoCadastroRadios[i].value;
    }
  }

  return "";
}
