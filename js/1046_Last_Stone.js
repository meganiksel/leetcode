const swap = (i1, i2, array) => {
  const tmp = array[i1];
  array[i1] = array[i2];
  array[i2] = tmp;
};

class HeapQ {
  constructor(array) {
    for (let item of array) {
      this.push(item);
    }
  }
  heap = [];

  get length() {
    return this.heap.length;
  }

  push(el) {
    this.heap.push(el);
    let current = this.length - 1;
    let parent = Math.floor((current - 1) / 2);
    while (current > 0 && this.heap[current] > this.heap[parent]) {
      swap(current, parent, this.heap);
      current = parent;
      parent = Math.floor((current - 1) / 2);
    }
  }

  pop() {
    const ans = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    let current = 0;
    let right = current * 2 + 2;

    while (right < this.heap.length) {
      let left = current * 2 + 1;
      right = current * 2 + 2;
      let maxChild = this.heap[left] > this.heap[right] ? left : right;

      if (this.heap[current] < this.heap[maxChild]) {
        swap(current, maxChild, this.heap);
        current = maxChild;
      } else break;
    }

    this.heap.pop();
    return ans;
  }
}

const lastStoneWeight = (stones) => {
  const heap = new HeapQ(stones);

  while (heap.length > 1) {
    const diff = heap.pop() - heap.pop();
    if (diff) heap.push(diff);
  }
  return heap.pop() || 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
