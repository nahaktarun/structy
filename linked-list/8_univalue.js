class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(2);
const c = new Node(2);

a.next = b;
b.next = c;

const uniValue = (head) => {
  let current = head;

  while (current !== null) {
    if (current.value !== head.value) {
      return false;
    }
    current = current.next;
  }
  return true;
};

const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const recursive = (head, prevValue = null) => {
  if (head === null) return true;
  if (prevValue && head.value !== prevValue) {
    return false;
  }
  return recursive(head.next, head.value);
};

const result = recursive(a);
console.log(result);
