function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
 // var hora = data.getHours();
 var hora = 7
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = './manha.jpg';
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "tarde.jpg";
  } else {
    //boa noite
    img.src = "noite.jpg";
  }
}
