const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");
const generate = document.getElementById("generate");

const randomAnimals = [
  "cow",
  "dog",
  "horse",
  "pig",
  "lion",
  "elephant",
  "monkey",
  "whale",
  "frog",
  "cat",
  "octopus",
  "tiger",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...randomAnimals].forEach((animal, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div>
    <p>${animal}</p></div>`;
  });
}
