const Sort = require("./Sort");

class Row {
  constructor(units = 1) {
    this.units = units;

    const CSS_ROW_CLASSNAME = "unit-row";
    const CSS_BLOCK_CLASSNAME = "unit-block";

    const rowEl = document.createElement("div");
    rowEl.className = CSS_ROW_CLASSNAME;
    const blocks = [];
    for (let i = 0; i < units; i++) {
      let block = document.createElement("div");
      block.className = CSS_BLOCK_CLASSNAME;
      blocks.push(block);
      rowEl.appendChild(block);
    }

    this.el = rowEl;
  }

  addToTable() {
    document.getElementById("board").appendChild(this.el);
  }
}

class RowManager {
  constructor() {
    this.test = "working";
    this.rows = [];
    this.sort = new Sort(this.rows, (row) => row.units);
  }

  addRow(units) {
    const newRow = new Row(units);
    this.rows.push(newRow);
    this.rows[this.rows.length - 1].addToTable();
  }

  clearRows() {
    document.getElementById("board").innerHTML = "";
  }

  sortRows() {
    this.sort.sort();
    this.updateRows();
  }

  updateRows() {
    this.clearRows();
    this.rows.forEach((row) => {
      row.addToTable();
    });
  }
}

module.exports = RowManager;
