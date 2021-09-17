const APP = document.querySelector(".app");

class Appre {
  render() {
    let html = `
        <div class="hitext">
            <div class="text">
                <p>Привет Nigga! У меня есть план какпан. Давай посадим немного этой дури и срубим бабла 🤑💲💲👧🚗🍺👍</p>
                <p>Возьми эти пакеты 👇 семян и посади их.</p>
            </div>
            <div class="ceed-space">
                <div class="ceed" draggable="true" onclick="itemClick(this);"></div>
                <div class="ceed" draggable="true" onclick="itemClick(this);"></div>
                <div class="ceed" draggable="true" onclick="itemClick(this);"></div>
            </div>
        </div>
        <div class="row">
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
        </div>
        `;

    APP.innerHTML = html;
  }
}

const app = new Appre();
let score = 0;

app.render();

let ceed = document.querySelectorAll(".ceed-space>.ceed");
const placeholder = document.querySelectorAll(".placeholder");
const text = document.querySelector(".text");

let item = "";

ceed.forEach((item) => {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
});

placeholder.forEach((item) => {
  item.addEventListener("dragover", dragover);
  item.addEventListener("dragenter", dragenter);
  item.addEventListener("dragleave", dragleave);
  item.addEventListener("drop", drop);
});

function dragstart(event) {
  item = event.target;
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
    event.target.remove();
  }, 0);
}

function dragend(event) {
  event.target.classList.remove("hold", "hide");
  ceed = document.querySelectorAll(".ceed-space>.ceed");
  if (ceed.length == 2 && score == 1) {
    text.innerHTML = "<p>Осталось 👇 2 пакета 🌿🌿</p>";
  }
  if (ceed.length == 2 && score == 0) {
    text.innerHTML = "<p>Дядя ты проебал пакет за 100💲</p>";
  }
  if (ceed.length == 1 && score == 1) {
    text.innerHTML = "<p>Окуратно не роняй 🌿🌿</p>";
  }
  if (ceed.length == 1 && score == 0) {
    text.innerHTML = "<p>Еще одна ошибка и тебе ☠️</p>";
  }
  if (ceed.length == 0 && score == 1) {
    text.classList.add("big")
    text.innerHTML = "<p>Нужно было сразу доставать 🔫</p>";
  }
  if (ceed.length == 0 && score == 0) {
    text.classList.add("big")
    text.innerHTML = "<p>Туц-туц 🔫☀️ чики брики</p>";
  }
  if (ceed.length == 1 && score == 2) {
    text.innerHTML = "<p>Еще немного и пойдем 😮‍💨</p>";
  }
  if (ceed.length == 0 && score == 2) {
    text.classList.add("big")
    text.innerHTML = "<p>Пошли ебним 🌿⚗️</p>";
  }
  if (ceed.length == 0 && score == 3) {
       text.classList.add("big")
    text.innerHTML = "<p>Красава скоро у нас будет много нала 💲💲💲💲💲💲</p>";
  }
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function drop(event) {
  event.target.classList.remove("hovered");
  if (event.target.lastChild == null) {
      event.target.append(item);
      score += 1 ; 
  }

}
