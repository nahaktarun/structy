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

const addList = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) {
    return null;
  }

  const val1 = head1 === null ? 0 : head1.value;
  const val2 = head2 === null ? 0 : head2.value;
  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  const resultNode = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;
  resultNode.val = addList(next1, next2, nextCarry);
  return resultNode;
};

const iterative = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;

    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    if (current1 !== null) {
      current1 = current1.next;
    }
    if (current2 !== null) {
      current2 = current2.next;
    }
    tail.next = new Node(digit);

    tail = tail.next;
  }
  return dummyHead.next;
};
