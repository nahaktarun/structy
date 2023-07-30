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

//   using stack
const dfs = (root) => {
  if (root === null) {
    return [];
  }

  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

// Recursive solution
const recursive = (root) => {
  if (root === null) return [];

  const leftValues = recursive(root.left); // [b, d, e]
  const rightValues = recursive(root.right); // [c,f]
  return [root.val, ...leftValues, ...rightValues];
};

const result = recursive(a);
console.log(result);
