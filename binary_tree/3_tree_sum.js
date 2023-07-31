class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// recursive T O(n) | O(n)
const treeSum = (root) => {
  if (root === null) return 0;

  const sumLeft = treeSum(root.left);
  const sumRight = treeSum(root.right);

  return root.val + sumLeft + sumRight;
};

// iterative
const iterative = (root) => {
  if (root === null) return 0;
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return sum;
};
const result = iterative(a);
console.log(result);
