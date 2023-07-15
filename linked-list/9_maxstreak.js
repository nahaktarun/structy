class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const maxStreak = (head) => {
  let current = head;
  let maxStreakValue = null;
  let currentStreak = null;
  let previousValue = null;
  while (current !== null) {
    if (previousValue && current.value === previousValue) {
      currentStreak += 1;
      if (currentStreak > maxStreakValue) {
        maxStreakValue = currentStreak;
      }
    } else {
      previousValue = current.value;
      currentStreak = 1;
    }
    current = current.next;
  }
  return maxStreakValue;
};

const result = maxStreak(a);
console.log(result);
