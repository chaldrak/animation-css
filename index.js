let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.onclick = function () {
  menu.classList.toggle("active");
};

// clock
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

const clock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock);

// section 12
var text = document.getElementById("text");
var shadow = "";
for (let i = 0; i < 30; i++) {
  shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #d9d9d9";
}
text.style.textShadow = shadow;

// section 17
const rating = document.getElementsByClassName("rating")[0];
const block = document.getElementsByClassName("block");

const data_target = +document
  .querySelector(".counter")
  .getAttribute("data-target");

block[0].style.backgroundColor = "#0f0";
for (let i = 1; i < 100; i++) {
  rating.innerHTML += `<div class="block"></div>`;
  if (i < data_target) block[i].style.backgroundColor = "#0f0";
  block[i].style.transform = `rotate(${3.6 * i}deg)`;
  block[i].style.animationDelay = `${i / 40}s`;
}

const counter = document.querySelector(".counter");
counter.innerText = 0;
target = +counter.getAttribute("data-target");

const numberCounter = () => {
  const value = +counter.innerText;
  if (value < target) {
    counter.innerText = Math.ceil(value + 1);
    setInterval(() => numberCounter(), 325);
  }
};

numberCounter();
