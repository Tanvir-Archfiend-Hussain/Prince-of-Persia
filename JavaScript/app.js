document.addEventListener("DOMContentLoaded", () => {
  const prince = document.querySelector(".character");
  let bottom = 0;

  function jump() {
    bottom += 30;
    prince.style.bottom = bottom + "px";
    //adding 30
  }

  jump();

  //assign functions to keycode
});
