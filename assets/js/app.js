
// Cursosr Drum
let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

// Drum
function titic() {
  document.querySelector(".baqueta img").style.transform = "rotate(10deg)";
}
function toctoc() {
  document.querySelector(".baqueta img").style.transform = "rotate(0deg)";
}

// Audio Drum
function play(audio) {
  const sound = document.querySelector('#audio');
  sound.setAttribute('src', audio)
    sound.paused ? sound.play() : sound.currentTime = 0;
}
    


/* document.addEventListener("keypress", (event)=> {
  if (event.keyCode === 49) { // key code of the keybord key
    event.preventDefault();
 // your code to Run
 alert("1111")
  }
}); */
/* document.addEventListener("keypress", (event)=> {
  event = event || window.event;
  switch (event.keyCode) {
    case 49:
        const noteDO = new Audio(document.querySelector("#container .note:nth-child(1)").dataset.soundaudio);
        noteDO.play();
      break;
  
    default:
      break;
  }

}); */
document.onkeyup = function(evt) {
  evt = evt || window.event;
  document.querySelector("#container .note").removeAttribute("box-shadow").style.boxShadow = "3px 3px 5px 2px";
}


// Audio Keyboard
document.onkeydown = function(evt) {
  evt = evt || window.event;

  switch (evt.keyCode) {
    // Do
    case 49:
      const noteDO = new Audio(document.querySelector("#container .note:nth-child(1)").dataset.soundaudio);
      noteDO.play();

      document.querySelector("#container .note:nth-child(1)").style.boxShadow = "3px 3px 5px 2px";
    break;
    // Re
    case 50:
      const noteRE = new Audio(document.querySelector("#container .note:nth-child(2)").dataset.soundaudio);
      noteRE.play();
    break;
    // MI
    case 51:
      const noteMI = new Audio(document.querySelector("#container .note:nth-child(3)").dataset.soundaudio);
      noteMI.play();
    break;
    // Fa
    case 52:
      const noteFA = new Audio(document.querySelector("#container .note:nth-child(4)").dataset.soundaudio);
      noteFA.play();
    break;
    // Sol
    case 53:
      const noteSOL = new Audio(document.querySelector("#container .note:nth-child(5)").dataset.soundaudio);
      noteSOL.play();
    break;
    // La
    case 54:
      const noteLA = new Audio(document.querySelector("#container .note:nth-child(6)").dataset.soundaudio);
      noteLA.play();
    break;
    // Si
    case 55:
      const noteSI = new Audio(document.querySelector("#container .note:nth-child(7)").dataset.soundaudio);
      noteSI.play();
    break;
    // Ddo
    case 56:
      const noteDOs = new Audio(document.querySelector("#container .note:nth-child(8)").dataset.soundaudio);
      noteDOs.play();
    break;
    default:
    break;
  }
};