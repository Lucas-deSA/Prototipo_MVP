var cepInput = document.getElementById("enderecoCep");
var enderecoInput = document.getElementById("endereco");

cepInput.addEventListener("blur", function () {
  var cep = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se o CEP possui 8 dígitos
  if (cep.length === 8) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var endereco = JSON.parse(xhr.responseText);

        // Preenche os campos de endereço com os dados retornados
        enderecoInput.value =
          endereco.logradouro +
          ", " +
          endereco.bairro +
          ", " +
          endereco.localidade +
          " - " +
          endereco.uf;
      }
    };

    xhr.send();
  }
});
