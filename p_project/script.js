const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");
const success = document.getElementById("success");
const message = document.getElementById("message");

let noScale = 1;
let yesScale = 1;
let msgIndex = 0;
let noClicks = 0;

const messages = [
  "Nope 😌",
  "Hey… don’t do that 😳",
  "Why are you clicking No 😭",
  "Please stop 🥺",
  "This is getting awkward 😅",
  "Okay okay relax",
  "We both know the answer 💕",
  "Seriously? 😏",
  "Alright… you win",
  "Fine… I give up"
];

message.textContent = messages[0];

function moveNo() {
  noClicks++;

  const padding = 100;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const moveX = Math.random() * maxX - maxX / 2;
  const moveY = Math.random() * maxY - maxY / 2;

  noScale = Math.max(0.4, noScale - 0.07);
  yesScale = Math.min(2.5, yesScale + 0.12);

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px) scale(${noScale})`;
  yesBtn.style.transform = `translateX(-60%) scale(${yesScale})`;

  if (msgIndex < messages.length - 1) msgIndex++;
  message.textContent = messages[msgIndex];

  if (yesScale > 1.4) yesBtn.classList.add("pulse");

  if (noClicks >= 10) {
    noBtn.style.display = "none";
    message.textContent = "No is no longer an option 😏💖";
  }

  createHeart();
}

noBtn.addEventListener("click", moveNo);

yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  message.style.display = "none";
  success.classList.remove("hidden");
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  const rect = yesBtn.getBoundingClientRect();
  heart.style.left = rect.left + rect.width / 2 + "px";
  heart.style.top = rect.top + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1200);
}
