class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const printLinkedlist = (head) => {
  let current = head;
  const result = [];

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
};

const recursive = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return recursive(next, head);
};

// const result = reverseLinkedList(a);
const result2 = recursive(a);
console.log(printLinkedlist(result2));
