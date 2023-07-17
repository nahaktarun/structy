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

const createLinkedList = (list) => {
  const temp = new Node(null);
  let tail = temp;

  for (let val of list) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return temp.next;
};

// T.C = O(n^2); S.C = O(n)
const recursive = (list) => {
  if (list.length === 0) return null;
  const head = new Node(list[0]);
  head.next = recursive1(list.slice(1));
  return head;
};

// T.C O(n) | S.C O(n)
const recursive1 = (list, index = 0) => {
  if (index === list.length) return null;
  const head = new Node(list[index]);
  head.next = recursive1(list, index + 1);
  return head;
};

const result = recursive1([1, 2, 3, 4]);
printLinkedlist(result);
