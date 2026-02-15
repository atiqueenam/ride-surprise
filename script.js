const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bigYesBtn = document.getElementById("bigYesBtn");

const questionBox = document.getElementById("questionBox");
const finalYesBox = document.getElementById("finalYesBox");
const celebrationBox = document.getElementById("celebrationBox");

let noClickCount = 0;

// Move NO button randomly
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

function moveNoButton() {
  noClickCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (noClickCount >= 5) {
    questionBox.classList.add("hidden");
    finalYesBox.classList.remove("hidden");
  }
}

// First YES click
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  celebrationBox.classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});

// Big YES click
bigYesBtn.addEventListener("click", () => {
  finalYesBox.classList.add("hidden");
  celebrationBox.classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, i * 300);
}


