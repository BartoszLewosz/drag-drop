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
  [...randomAnimals]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .forEach((animal, index) => {
      console.log(animal);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p>${animal}</p></div>`;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
