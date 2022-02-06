
// Cursosr Drum
let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

// Drum
function titic() {
  document.querySelector(".baqueta img").style.transform = "rotate(5deg)";
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
  

// Cursor firma
const firma = document.querySelector(".firma-link");
firma.addEventListener('mouseenter', event => {
  console.log("event.button") 
  document.querySelector(".baqueta img").style.display = "none";
})
firma.addEventListener('mouseleave', event => {
  console.log("XAo") 
  document.querySelector(".baqueta img").style.display = "block";
})


// Audio Keyboard

// variables notas div
const activeDO = document.querySelector("#container .note:nth-child(1)");
const activespanDO = document.querySelector("#container .note:nth-child(1) span");

const activeRE = document.querySelector("#container .note:nth-child(2)");
const activespanRE = document.querySelector("#container .note:nth-child(2) span");

const activeMI = document.querySelector("#container .note:nth-child(3)");
const activespanMI = document.querySelector("#container .note:nth-child(3) span");

const activeFA = document.querySelector("#container .note:nth-child(4)");
const activespanFA = document.querySelector("#container .note:nth-child(4) span");

const activeSOL = document.querySelector("#container .note:nth-child(5)");
const activespanSOL = document.querySelector("#container .note:nth-child(5) span");

const activeLA = document.querySelector("#container .note:nth-child(6)");
const activespanLA = document.querySelector("#container .note:nth-child(6) span");

const activeSI = document.querySelector("#container .note:nth-child(7)");
const activespanSI = document.querySelector("#container .note:nth-child(7) span");

const activeDO2 = document.querySelector("#container .note:nth-child(8)");
const activespanDO2 = document.querySelector("#container .note:nth-child(8) span");

// bola select note active
const notedot = document.head.appendChild(document.createElement("style"));

// tecla preisionada antes de soltar
document.onkeydown = function(evt) {
  evt = evt || window.event;
  switch (evt.keyCode) {
    // Do
    case 49:
      const noteDO = new Audio(document.querySelector("#container .note:nth-child(1)").dataset.soundaudio);
      noteDO.play();

      activeDO.style.filter = "brightness(95%)";
      activespanDO.style.filter = "brightness(130%)";
      
      notedot.innerHTML = ".note:nth-child(1):before {display: block !important;}";
    break;
    // Re
    case 50:
      const noteRE = new Audio(document.querySelector("#container .note:nth-child(2)").dataset.soundaudio);
      noteRE.play();

      activeRE.style.filter = "brightness(95%)";
      activespanRE.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(2):before {display: block !important;}";
    break;
    // MI
    case 51:
      const noteMI = new Audio(document.querySelector("#container .note:nth-child(3)").dataset.soundaudio);
      noteMI.play();

      activeMI.style.filter = "brightness(95%)";
      activespanMI.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(3):before {display: block !important;}";
    break;
    // Fa
    case 52:
      const noteFA = new Audio(document.querySelector("#container .note:nth-child(4)").dataset.soundaudio);
      noteFA.play();

      activeFA.style.filter = "brightness(95%)";
      activespanFA.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(4):before {display: block !important;}";
    break;
    // Sol
    case 53:
      const noteSOL = new Audio(document.querySelector("#container .note:nth-child(5)").dataset.soundaudio);
      noteSOL.play();

      activeSOL.style.filter = "brightness(95%)";
      activespanSOL.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(5):before {display: block !important;}";
    break;
    // La
    case 54:
      const noteLA = new Audio(document.querySelector("#container .note:nth-child(6)").dataset.soundaudio);
      noteLA.play();

      activeLA.style.filter = "brightness(95%)";
      activespanLA.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(6):before {display: block !important;}";
    break;
    // Si
    case 55:
      const noteSI = new Audio(document.querySelector("#container .note:nth-child(7)").dataset.soundaudio);
      noteSI.play();

      activeSI.style.filter = "brightness(95%)";
      activespanSI.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(7):before {display: block !important;}";
    break;
    // Ddo
    case 56:
      const noteDOs = new Audio(document.querySelector("#container .note:nth-child(8)").dataset.soundaudio);
      noteDOs.play();

      activeDO2.style.filter = "brightness(95%)";
      activespanDO2.style.filter = "brightness(130%)";

      notedot.innerHTML = ".note:nth-child(8):before {display: block !important;}";
    break;
    default:
    break;
  }
};

// tecla levantada
document.onkeyup = function(evt) {
  evt = evt || window.event;
  switch (evt.keyCode) {
    case 49:
      activeDO.style.filter = "brightness(100%)";
      activespanDO.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(1):before {display: none !important;}";
    break;
    case 50:
      activeRE.style.filter = "brightness(100%)";
      activespanRE.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(2):before {display: none !important;}";
    break;
    case 51:
      activeMI.style.filter = "brightness(100%)";
      activespanMI.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(3):before {display: none !important;}";
    break;
    case 52:
      activeFA.style.filter = "brightness(100%)";
      activespanFA.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(4):before {display: none !important;}";
    break;
    case 53:
      activeSOL.style.filter = "brightness(100%)";
      activespanSOL.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(5):before {display: none !important;}";
    break;
    case 54:
      activeLA.style.filter = "brightness(100%)";
      activespanLA.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(6):before {display: none !important;}";
    break;
    case 55:
      activeSI.style.filter = "brightness(100%)";
      activespanSI.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(7):before {display: none !important;}";
    break;
    case 56:
      activeDO2.style.filter = "brightness(100%)";
      activespanDO2.style.filter = "brightness(100%)";

      notedot.innerHTML = ".note:nth-child(8):before {display: none !important;}";
    break;
    default:
    break;
  }
}