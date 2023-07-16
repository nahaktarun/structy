class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(3);
const e = new Node(7);
const f = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const removeLinkedList = (head, target) => {
  let current = head;
  let prevValue = null;
  if (current.value === target) {
    return current.next;
  }

  while (current.next !== null) {
    if (current.value === target) {
      prevValue.next = current.next;
    }
    prevValue = current;
  }
  return head;
};
// added test
const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};
const result = removeLinkedList(a, 3);

printLinkedlist(result);
