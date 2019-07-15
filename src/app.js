/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const RowManager = require("./Row");

// A link to our styles!
require("./index.css");
const rowManager = new RowManager();

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle("Selection Sort");
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function addRow(event) {
  event.preventDefault();
  const totalUnits = Math.floor(Math.random() * 5) + 1;
  rowManager.addRow(totalUnits);
}

function refreshHistoryBoard() {
  let historyBoard = document.getElementById("history");
  historyBoard.innerHTML = "";

  let historyStates = rowManager.sort.boardStates.map((boardState) => {
    return boardState.rows;
  });

  let currentStep = 0;
  historyStates.forEach((state) => {
    let entry = document.createElement("li");
    let entryLabel = document.createElement("label");
    entryLabel.innerHTML = "Step: " + currentStep++;
    entry.appendChild(entryLabel);
    let stateDiv = document.createElement("div");
    stateDiv.innerHTML = JSON.stringify(state);
    historyBoard.appendChild(entry);
    historyBoard.appendChild(stateDiv);
  });
  console.log(historyStates);
}

function sortRow(event) {
  event.preventDefault();
  rowManager.sortRows();
  refreshHistoryBoard();
}

const addRowForm = document.getElementById("add-row-btn");
document.addEventListener("DOMContentLoaded", () => {
  addRowForm.onsubmit = addRow;
});

const sortRowForm = document.getElementById("sort-row-btn");
document.addEventListener("DOMContentLoaded", () => {
  sortRowForm.onsubmit = sortRow;
});
