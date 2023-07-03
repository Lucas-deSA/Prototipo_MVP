// Obtém a referência para o elemento do input
var cpfCnpjInput = document.querySelector("#cpfCnpj");

// Obtém a referência para o elemento do input
var cpfCnpjInput = document.querySelector("#cpfCnpj");

// Adiciona um listener de evento para detectar mudanças no valor do input
cpfCnpjInput.addEventListener("input", function () {
  var value = cpfCnpjInput.value;

  // Remove todos os caracteres não numéricos do CPF/CNPJ
  value = value.replace(/\D/g, "");

  // Verifica o comprimento do valor digitado
  if (value.length > 14) {
    // Limita o valor a 14 caracteres
    value = value.substr(0, 14);
  }

  // Verifica se o valor tem 11 caracteres para aplicar a formatação de CPF
  if (value.length === 11) {
    // Aplica a formatação de CPF (XXX.XXX.XXX-XX)
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    cpfCnpjInput.classList.remove("error");
    cpfCnpjInput.setCustomValidity("");
  }
  // Verifica se o valor tem 14 caracteres para aplicar a formatação de CNPJ
  else if (value.length === 14) {
    // Aplica a formatação de CNPJ (XX.XXX.XXX/XXXX-XX)
    value = value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
    cpfCnpjInput.classList.remove("error");
    cpfCnpjInput.setCustomValidity("");
  }
  // Valor inválido, exibe mensagem de erro
  else {
    cpfCnpjInput.classList.add("error");
    cpfCnpjInput.setCustomValidity("Digite um CPF ou CNPJ válido.");
  }

  // Define o valor formatado no input
  cpfCnpjInput.value = value;
});

function formatarCPFCNPJ(cpfCnpj) {
  cpfCnpj = cpfCnpj.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

  if (cpfCnpj.length === 11) {
    cpfCnpj = cpfCnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"); // Formata CPF (XXX.XXX.XXX-XX)
  } else if (cpfCnpj.length === 14) {
    cpfCnpj = cpfCnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    ); // Formata CNPJ (XX.XXX.XXX/XXXX-XX)
  }

  return cpfCnpj;
}

var numberInput = document.querySelector("#number");

numberInput.addEventListener("input", function () {
  var value = numberInput.value;

  value = value.replace(/\D/g, "");

  if (value.length > 11) {
    value = value.substr(0, 11);
  }

  value = formatarTelefone(value);

  numberInput.value = value;
});

function formatarTelefone(telefone) {
  var formattedTelefone = telefone;

  if (telefone.length >= 2) {
    formattedTelefone = "(" + telefone.substr(0, 2) + ") ";

    if (telefone.length > 6) {
      formattedTelefone += telefone.substr(2, 5) + "-" + telefone.substr(7);
    } else {
      formattedTelefone += telefone.substr(2);
    }
  }

  return formattedTelefone;
}

var enderecoCepInput = document.getElementById("enderecoCep");

enderecoCepInput.addEventListener("input", function () {
  var cep = enderecoCepInput.value;

  // Remove todos os caracteres não numéricos do CEP
  cep = cep.replace(/\D/g, "");

  // Aplica a formatação do CEP (XXXXX-XXX)
  cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  enderecoCepInput.value = cep;
});
