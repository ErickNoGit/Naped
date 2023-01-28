const botaoMobile = document.querySelector("#btn-mobile");

function ativarMenu(event) {
  const acesso = document.getElementById("acessos");
  acesso.classList.toggle('ativado');
}
botaoMobile.addEventListener("click", ativarMenu);