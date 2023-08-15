//mudando o estilo inline
const inlineStyleBtn = document.getElementById("inlineStyle");
inlineStyleBtn.addEventListener("click", () => {
  const paragraph = document.getElementById("paragraph");
  paragraph.style.backgroundColor = "white";
  paragraph.style.color = "blue";
});
