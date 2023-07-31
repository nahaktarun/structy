class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//   using queue
const bfs = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode.val);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return result;
};

// recursive solution

const result = bfs(a);
console.log(result);
