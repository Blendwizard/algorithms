class Stack {
  constructor() {
    this.currentSize = 0;
    this.collection = {};
  }

  push(value) {
    this.collection[this.currentSize] = value;
    this.currentSize++;
  }

  pop() {
    // Reduce stack currentSize and get "last-in";
    this.currentSize--;
    let temp = this.collection[this.currentSize];
    // Pop "last-in"
    delete this.collection[this.currentSize];
    // Return "last-in" value
    return temp;
  }

  size() {
    return this.currentSize;
  }

  isEmpty() {
    return this.currentSize === 0;
  }
}
