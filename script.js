const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const beginBtn = document.getElementById("beginBtn");
const replayBtn = document.getElementById("replayBtn");

const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");


/* =========================
   MUSIC
========================= */

let isPlaying = false;

function playMusic() {
  music.play()
    .then(() => {
      isPlaying = true;
      musicBtn.textContent = "♫ Musik";
      musicBtn.classList.add("playing");
    })
    .catch(() => {
      console.log("Musik belum bisa diputar.");
    });
}

function pauseMusic() {
  music.pause();

  isPlaying = false;

  musicBtn.textContent = "♫ Musik";
  musicBtn.classList.remove("playing");
}

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});


/* =========================
   BEGIN BUTTON
========================= */

beginBtn.addEventListener("click", () => {

  playMusic();

  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });

});


/* =========================
   ENVELOPE
========================= */

envelope.addEventListener("click", () => {

  const isOpen = envelope.classList.contains("open");

  if (!isOpen) {

    envelope.classList.add("open");

    setTimeout(() => {
      letterContent.classList.add("show");

      setTimeout(() => {
        letterContent.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 150);

    }, 500);

  } else {

    envelope.classList.remove("open");
    letterContent.classList.remove("show");

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


/* =========================
   FADE IN ON SCROLL
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.15
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
