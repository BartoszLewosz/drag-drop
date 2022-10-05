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
    .map((a) => a.value)
    .forEach((animal, index) => {
      console.log(animal);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      // listItem.classList.add("wrong");
      // listItem.classList.add("right");

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p class="animal__name">${animal}</p><i class="fas far fa-grip-vertical"></i></div>`;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
