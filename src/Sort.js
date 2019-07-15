class BoardState {
  constructor(rows, indexA, indexB) {
    this.rows = rows.slice();
    this.indexA = indexA;
    this.indexB = indexB;
  }
}

class SomeKindOfSort {
  constructor(array, evalFunc) {
    if (!evalFunc) evalFunc = (val) => val;

    this.boardStates = [];

    this.evalFunc = evalFunc;
    this.array = array;
  }

  _takeSnapshot(rows, i, j) {
    this.boardStates.push(new BoardState(rows, i, j));
  }

  //swap array values in this.array
  _swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  sort() {
    this.boardStates = [];
    this._takeSnapshot(this.array.map((row) => row.units), 0, 0);
    //sort with selection sort
    for (let i = 0; i < this.array.length; i++) {
      let minIndex = i;
      for (let j = i; j < this.array.length; j++) {
        if (this.evalFunc(this.array[j]) < this.evalFunc(this.array[minIndex]))
          minIndex = j;
      }
      if (i !== minIndex) {
        this._swap(i, minIndex);
        this._takeSnapshot(this.array.map((row) => row.units), i, minIndex);
      }
    }

    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
