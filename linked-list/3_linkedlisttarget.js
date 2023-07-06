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

const findTarget = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

console.log(findTarget(a, 5));

const recursive = (head, target) => {
  if (head === null) return false;

  if (head.value === target) return true;

  return recursive(head.next, target);
};
console.log(recursive(a, 5));
