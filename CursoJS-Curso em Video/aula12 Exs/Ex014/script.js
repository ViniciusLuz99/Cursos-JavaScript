function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "./images/manha.jpg";
    document.body.style.background = "#E9B359";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "./images/tarde.jpg";
    document.body.style.background = "#4A7E80";
  } else {
    //boa noite
    img.src = "./images/noite.jpg";
    document.body.style.background = '#131326'
  }
}
