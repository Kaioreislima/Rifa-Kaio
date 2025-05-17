
const grid = document.getElementById("numbers-grid");
const selectedNumbersField = document.getElementById("selected-numbers-field");
let selectedNumbers = [];

for (let i = 1; i <= 1000; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = i;
  div.onclick = () => {
    if (selectedNumbers.includes(i)) {
      selectedNumbers = selectedNumbers.filter(n => n !== i);
      div.classList.remove("selected");
    } else {
      selectedNumbers.push(i);
      div.classList.add("selected");
    }
    selectedNumbersField.value = selectedNumbers.join(", ");
  };
  grid.appendChild(div);
}
