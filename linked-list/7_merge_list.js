class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(6);

a.next = b;
b.next = c;

const x = new Node(4);
const y = new Node(5);
const z = new Node(7);

x.next = y;
y.next = z;

const mergeList = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.value < current2.value) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;
};

const printLinkedlist = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const recursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null;

  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.value < head2.value) {
    const next1 = head1.next;
    head1.next = mergeList(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeList(head1, next2);
    return head2;
  }
};

const result = recursive(a, x);
printLinkedlist(result);
