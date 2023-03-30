/** Pressing key to open window */
function OpenWin() {
  window.open("https://static.toiimg.com/photo/msid-71761024/71761024.jpg");
}
function control02(e) {
  if (e.keyCode === 40) {
    OpenWin();
  }
}
document.addEventListener("keydown", control02);
