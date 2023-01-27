// DOM = Document Object Model.
// Event-driven = programação direcionada á eventos.
// Programação Imperativa = dar ordens passo a passo do que deve ser feito.
// Programação Declarativa = programar de forma mais reduzida.
// Callback = função passada como argumento.
// Refatoração = deixar o código mais performático sem alterar suas funcionalidades.
// Recursividade = é quando uma função chama ela mesma.
// cleancode = nomes significativos

import resetControls from "./controls";
import { Timer } from "./timer";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

//aqui injetamos as dependências da factory e colocamos em uma variável
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
});

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  // usamos aqui o objeto
  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  resetControls();
  // usamos aqui o objeto
  timer.resetTimer();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSet.addEventListener("click", function () {
  let newMinutes = prompt("Quantos minutos ?");
  if (!newMinutes) {
    // usamos aqui o objeto
    timer.resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
});
