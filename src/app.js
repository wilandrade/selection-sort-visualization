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
  //set this into variable so we can modify it and create a delay for following
  let intervalTime = 0;
  let addSnapShot = (boardState, isAnimatable = true) => {
    intervalTime += 500;
    const snapshot = document.createElement("div");
    snapshot.className = "snapshot";

    boardState.rows.forEach((curRow, i) => {
      const rowEl = document.createElement("div");
      rowEl.className = "unit-row";
      if (boardState.indexB !== boardState.indexA) {
        if (boardState.indexA === i) {
          rowEl.style.backgroundColor = "yellow";
          if (isAnimatable) {
            setTimeout(() => {
              rowEl.className += " fade-in";
            }, intervalTime);
          }
        }
        if (boardState.indexB === i) {
          rowEl.style.backgroundColor = "#F2844F";
          if (isAnimatable) {
            setTimeout(() => {
              rowEl.className += " fade-in";
            }, intervalTime);
          }
        }
      }

      for (let i = 0; i < curRow; i++) {
        let block = document.createElement("div");
        block.className = "unit-block";
        rowEl.appendChild(block);
      }

      if (isAnimatable) {
        snapshot.className += " is-swap";
      }
      snapshot.appendChild(rowEl);
      document.getElementById("history").appendChild(snapshot);
    });
  };

  let historyBoard = document.getElementById("history");
  historyBoard.innerHTML = "";

  rowManager.sort.boardStates.forEach((boardState) => {
    addSnapShot(boardState, boardState.isSwap ? true : false);
  });
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
