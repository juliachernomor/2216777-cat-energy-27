const calculateRandomValue = (e, t) => {
  return e + Math.random() * (t - e)
}

const createAnimateBubbles = (element) => {
  let i = " ";
  for (a = 0; a < 120; a++) {
    let n = calculateRandomValue(2, 30);
    i += `<div class="bubbles__object" style="height: ${n}px; width: ${n}px; background-color: rgb(${calculateRandomValue(0, 100)},${calculateRandomValue(55, 75)},${calculateRandomValue(55, 74)}); animation-duration: ${calculateRandomValue(10, 30)}s; top: ${calculateRandomValue(0, 100)}%; left: ${calculateRandomValue(0, 100)}%;"></div>`
  }
  document.querySelector(element).innerHTML += i;
}

window.addEventListener("DOMContentLoaded", ()=> {
  createAnimateBubbles(".bubbles")
  }
);
