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
const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const insertLinkedList = (head, value, index) => {
  let current = head;
  let count = 0;
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  while (current !== null) {
    if (count === index - 1) {
      const temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }

    count += 1;
    current = current.next;
  }
  return head;
};
const recursive = (head, value, index, count = 0) => {
  if (head === null) return null;
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  if (count === index - 1) {
    const temp = head.next;
    head.next = new Node(value);
    head.next.next = temp;
    return head;
  }

  recursive(head.next, value, index, count + 1);
  return head;
};

const result = recursive(a, 12, 0);
printLinkedlist(result);
