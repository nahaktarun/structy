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
  const result = [];

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
};

const printLinkedlistrecursive = (head) => {
  const result = [];
  if (head === null) return;
  result.push(head.value);
  printLinkedlistrecursive(head.next);
};
console.log(printLinkedlist(a));

console.log(printLinkedlistrecursive(a));
