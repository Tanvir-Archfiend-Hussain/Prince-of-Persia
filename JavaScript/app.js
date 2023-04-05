document.addEventListener("DOMContentLoaded", () => {
  const prince = document.querySelector(".character");
  let bottom = 0; /* Making a variable called 'bottom' and then giving it a value of 0  */

  /** Creating function called Jump */
  function jump() {
    bottom += 30; /* Making the bottom variable go from  being 0 to being 30*/
    prince.style.bottom = bottom + "px";
    /* Adding 30 px to the bottom to send the prince up */
  }

  jump(); /** Invoking the function */

  /** Assign functions to keycode */
  function control(e) {
    if (e.keyCode === 38) {
      jump();
    }
  }
  document.addEventListener("keydown", control);

  function OpenWin() {
    window.open("https://www.w3schools.com");
  }
  function control02(e) {
    if (e.keyCode === 40) {
      OpenWin();
    }
  }
  document.addEventListener("keydown", control02);
  // key down means when any key is pressed
});
