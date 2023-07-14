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

const x = new Node("a");
const y = new Node("b");
const z = new Node("c");

x.next = y;
y.next = z;

const zippedLinkedList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  return head1;
};

const recursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = recursive(next1, next2);

  return head1;
};

const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const result = recursive(a, x);

console.log(printLinkedlist(result));
