const root = document.documentElement;
const baqueta = document.querySelector(".baqueta img");
const audio = document.querySelector("#audio");
const notes = Array.from(document.querySelectorAll("#xilofono .note"));
const firma = document.querySelector(".firma-link");

function moveCursor(event) {
  root.style.setProperty("--mouse-x", `${event.clientX}px`);
  root.style.setProperty("--mouse-y", `${event.clientY}px`);
}

function swing() {
  if (baqueta) baqueta.style.transform = "rotate(5deg)";
}

function resetSwing() {
  if (baqueta) baqueta.style.transform = "rotate(0deg)";
}

function playNote(note) {
  const src = note.dataset.soundaudio;
  if (!src) return;

  audio.src = src;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function noteFromKey(event) {
  const index = Number(event.key) - 1;
  const isValid = Number.isInteger(index) && index >= 0 && index < notes.length;
  return isValid ? notes[index] : null;
}

renderInteractions();

function renderInteractions() {
  root.addEventListener("mousemove", moveCursor);

  notes.forEach(note => {
    note.addEventListener("pointerdown", swing);
    note.addEventListener("pointerup", resetSwing);
    note.addEventListener("pointerleave", resetSwing);
    note.addEventListener("click", () => playNote(note));
  });

  document.addEventListener("keydown", event => {
    if (event.repeat) return;

    const note = noteFromKey(event);
    if (!note) return;

    event.preventDefault();
    note.classList.add("is-active");
    playNote(note);
  });

  document.addEventListener("keyup", event => {
    const note = noteFromKey(event);
    if (!note) return;

    note.classList.remove("is-active");
  });

  if (firma) {
    firma.addEventListener("mouseenter", () => {
      if (baqueta) baqueta.style.display = "none";
    });
    firma.addEventListener("mouseleave", () => {
      if (baqueta) baqueta.style.display = "block";
    });
  }
}
