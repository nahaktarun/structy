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

const findElement = (head, pos) => {
  let current = head;
  let count = 0;
  while (current !== null && count !== pos) {
    current = current.next;
    count += 1;
  }
  console.log(current.value);
};

console.log(findElement(a, 0));

const recursive = (head, pos) => {
  if (pos === 0) return head.value;

  return recursive(head.next, pos - 1);
};
console.log(recursive(a, 2));
