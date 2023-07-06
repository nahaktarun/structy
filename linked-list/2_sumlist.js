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

const sumList = (head) => {
  let sum = 0;
  let temp = head;
  while (temp !== null) {
    sum = sum + temp.value;
    temp = temp.next;
  }

  return sum;
};

console.log(sumList(a));

const recursive = (head) => {
  if (head === null) {
    return 0;
  }
  return head.value + recursive(head.next);
};

console.log(recursive(a));
