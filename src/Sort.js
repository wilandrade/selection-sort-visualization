class SomeKindOfSort {
  constructor(array, evalFunc) {
    if (!evalFunc) evalFunc = (val) => val;

    this.evalFunc = evalFunc;
    this.array = array;
  }

  //swap array values in this.array
  _swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  sort() {
    //start at beginning of the array
    for (let i = 0; i < this.array.length; i++) {
      let minIndex = i;
      for (let j = i; j < this.array.length; j++) {
        if (this.evalFunc(this.array[j]) < this.evalFunc(this.array[i]))
          minIndex = j;
      }
      if (i !== minIndex) this._swap(i, minIndex);
    }

    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
