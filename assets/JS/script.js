// botão mobile do header
const botaoMobile = document.querySelector("#btn-mobile");

function ativarMenu(event) {
  if (event.type === 'touchstart') event.preventDefoult();
  const acesso = document.getElementById("acessos");
  acesso.classList.toggle('ativado');

  const active = acesso.classList.contains('ativado');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

botaoMobile.addEventListener("click", ativarMenu);
botaoMobile.addEventListener("touchstart", ativarMenu);