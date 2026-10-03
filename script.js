const music = document.getElementById("music");
const beginBtn = document.getElementById("beginBtn");
const musicBtn = document.getElementById("musicBtn");

const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");

const replayBtn = document.getElementById("replayBtn");


/* =========================
   START STORY + MUSIC
========================= */

beginBtn.addEventListener("click", () => {

  music.volume = 0.45;

  music.play().catch(() => {});

  musicBtn.classList.add("show");

  document
    .querySelector("#opening + section")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =========================
   MUSIC CONTROL
========================= */

musicBtn.addEventListener("click", () => {

  if (music.paused) {

    music.play();

    musicBtn.textContent = "♫";

  } else {

    music.pause();

    musicBtn.textContent = "🔇";

  }

});


/* =========================
   OPEN LETTER
========================= */

envelope.addEventListener("click", () => {

  letterContent.classList.toggle("show");

  if (letterContent.classList.contains("show")) {

    setTimeout(() => {

      letterContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 100);

  }

});


/* =========================
   REPLAY
========================= */

replayBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
