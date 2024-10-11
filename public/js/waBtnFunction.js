const waBtn = document.querySelector("#wa-btn");
const waContainerMessage = document.querySelector("#wa-container-message");
const waBtnClose = document.querySelector("#wa-btn-close");

const waOra = document.querySelector("#wa-ora");

waBtn.addEventListener("click", () => {
  waOra.innerText = getCurrentTime();
  waContainerMessage.classList.toggle("hidden");
});
waBtnClose.addEventListener("click", () => {
  waOra.innerText = getCurrentTime();
  waContainerMessage.classList.toggle("hidden");
});

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); // Ottiene le ore e le formatta a 2 cifre
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Ottiene i minuti e li formatta a 2 cifre
  return `${hours}:${minutes}`; // Restituisce l'ora nel formato HH:MM
}

waOra.innerText = getCurrentTime();
