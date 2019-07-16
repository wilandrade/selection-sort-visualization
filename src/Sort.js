class BoardState {
  constructor(rows, indexA, indexB, isSwap = false) {
    this.rows = rows.slice();
    this.indexA = indexA;
    this.indexB = indexB;
    this.isSwap = isSwap;
  }
}

class SomeKindOfSort {
  constructor(array, evalFunc) {
    if (!evalFunc) evalFunc = (val) => val;

    this.boardStates = [];

    this.evalFunc = evalFunc;
    this.array = array;
  }

  _takeSnapshot(rows, i, j, isSwap = false) {
    this.boardStates.push(new BoardState(rows, i, j, isSwap));
  }

  //swap array values in this.array
  _swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  sort() {
    this.boardStates = [];
    //sort with selection sort
    for (let i = 0; i < this.array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length; j++) {
        this._takeSnapshot(this.array.map((row) => row.units), minIndex, j);
        if (this.evalFunc(this.array[j]) < this.evalFunc(this.array[minIndex]))
          minIndex = j;
      }
      if (i !== minIndex) {
        this._takeSnapshot(
          this.array.map((row) => row.units),
          i,
          minIndex,
          true
        );
        this._swap(i, minIndex);
        this._takeSnapshot(
          this.array.map((row) => row.units),
          minIndex,
          i,
          true
        );
      }
    }

    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
