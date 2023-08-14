const clicou = () => {
  const input = document.getElementById("inputPassword");
  const Btn = document.querySelector(".botao");

  if(input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    Btn.innerText = 'Mostrar senha';
  } else {
    input.setAttribute('type', 'text');
    Btn.innerText = 'Esconder senha';
  }
}