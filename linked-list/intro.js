class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.next = b;
b.next = c;

const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const printLinkedListRecusive = (head) => {
  if (head === null) return;
  console.log(head.value);
  printLinkedListRecusive(head.next);
};

printLinkedListRecusive(a);

printLinkedlist(a);
