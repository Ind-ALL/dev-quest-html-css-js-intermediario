const form = document.querySelector(".formulario");
const inputNomeCompleto = document.querySelector("#nome-completo");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#tel");
const textareaMensagem = document.querySelector("#mensagem");

const validarInput = () => {
  if (inputNomeCompleto.value === "") {
    inputNomeCompleto.classList.add("invalido");
    inputNomeCompleto.nextElementSibling.classList.remove("hidden");
  } else {
    inputNomeCompleto.classList.add("valido");
    inputNomeCompleto.classList.remove("invalido");
    inputNomeCompleto.nextElementSibling.classList.add("hidden");
  }

  if (inputEmail.value === "") {
    inputEmail.classList.add("invalido");
    inputEmail.nextElementSibling.classList.remove("hidden");
  } else {
    inputEmail.classList.add("valido");
    inputEmail.classList.remove("invalido");
    inputEmail.nextElementSibling.classList.add("hidden");
  }

  if (inputTelefone.value === "") {
    inputTelefone.classList.add("invalido");
    inputTelefone.nextElementSibling.classList.remove("hidden");
  } else {
    inputTelefone.classList.add("valido");
    inputTelefone.classList.remove("invalido");
    inputTelefone.nextElementSibling.classList.add("hidden");
  }

  if (textareaMensagem.value === "") {
    textareaMensagem.classList.add("invalido");
    textareaMensagem.nextElementSibling.classList.remove("hidden");
  } else {
    textareaMensagem.classList.add("valido");
    textareaMensagem.classList.remove("invalido");
    textareaMensagem.nextElementSibling.classList.add("hidden");
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validarInput();
});
