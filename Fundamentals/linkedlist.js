class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}


class LinkedList {
  constructor(value) {
    // New head and tail should point to first node initially
    this.head = new Node(value);
    this.tail = this.head;
  }

  // Inserts a node to the beginning of the list
  insert(value) {
    // Store head node
    let temp = this.head;
    // Reassign head to newly created node
    this.head = new Node(value);
    // Make sure to point new head to the old head (which is now the second node)
    this.head.next = temp;
  }

  // Removes a node from the begining of the list
  remove() {
    this.head = this.head.next;
  }

  insertAtEnd(value) {
    // Store a reference to the last node
    let temp = this.tail;
    // Reassign the tail to the newly created node
    this.tail = new Node(value);
    // Set the old tail node to point to the new tail
    temp.next = this.tail;
    // Set the new tail to point to nothing
    this.tail.next = null;
  }

  contains(target) {
    // Iterate through linked list
    let pointer = this.head;
    while (pointer.next !== null) {
      if (pointer.value === target) {
        return true;
      }
      // Move pointer to next node
      pointer = pointer.next;

      // Check last node before so we don't return early
      if (pointer.next === null) {
        return pointer.value === target;
      }
    }
  }
}

// Reversing List

const reverse = (head) => {
  // First will start as the first node in a list
  let first = head;
  // Set our reversed list to point to null
  let reverse = null;

  while (first !== null) {
    // Access the next node down
    let second = first.next;
    // Detaches the ordered node next to point at the reversed node
    first.next = reverse;
    // Reassign reverse to be the next node to be pointed towards
    reverse = first;
    // Move down to the next node to be reversed
    first = second;
  }
  return reverse;
