function soltou(event) {
  console.log(event.code);
  console.log(event.key);

  console.log("Shift ?" + event.shiftKey);
  console.log("Crtl ?" + event.ctrlKey);
  console.log("Alt ?" + event.altKey);
}
const input = document.querySelector("input");

input.addEventListener("keyup", soltou);
