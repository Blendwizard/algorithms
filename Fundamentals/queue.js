class Queue {
  constructor() {
    this.currentSize = 0;
    this.collection = {};
  }

  enqueue(value) {
    this.collection[this.currentSize] = value;
    this.currentSize++;
  }

  dequeue() {
    // Get "first-in" key
    let firstKey = Object.keys(this.collection)[0];
    // Preserve "first-in" value
    let temp = this.collection[firstKey];
    // Remove "first-in"
    delete this.collection[firstKey];
    // Change queue currentSize
    this.currentSize--;
    // Return dequeue'd value
    return temp;
  }

  size() {
    return this.currentSize;
  }

  isEmpty() {
    return this.currentSize === 0;
  }

}