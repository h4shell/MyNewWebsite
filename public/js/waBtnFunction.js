const waBtn = document.querySelector("#wa-btn");
const waContainerMessage = document.querySelector("#wa-container-message");
const waBtnClose = document.querySelector("#wa-btn-close");
waBtn.addEventListener("click", () => {
  waContainerMessage.classList.toggle("hidden");
});
waBtnClose.addEventListener("click", () => {
  waContainerMessage.classList.toggle("hidden");
});
