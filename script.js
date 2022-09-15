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
