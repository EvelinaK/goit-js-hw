class Stack {
  constructor(...elements) {
    this._elements = [...elements];
  }
  push(elem) {
    this._elements.push(elem);
  }

  pop() {
    this._elements.pop();
  }

  get length() {
    return this._elements.length;
  }

  insertAt(index, elem) {
    // this._element.splice(index, elem);
    // фор и перестановка
    //деструктуризация и splice
    //splice
    this._elements = [
      ...this._elements.slice(0, index),
      elem,
      ...this._elements.slice(index),
    ];
  }
  deleteAt(index) {
    // if (index < 0 || index > this.elements.length) {
    //   return;
    // }
    // this._element.splice(index, 1);
    if (index > 0 && index < this._elements.length) {
      this._elements.splice(index, 1);
    }
  }

  has(elem) {
    // for (const element of this._elements) {
    //   if (element === elem) {
    //     return true;
    //   }
    // }
    // return false;

    // return this._elements.indexOf(elem) !== -1;
    return this._elements.includes(elem);
  }

  log() {
    console.log(this._elements);
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);

stack.log(); // [2, 3]

stack.insertAt(0, 100);
stack.push(200);
stack.log(); // [100, 2, 3, 200]

console.log(stack.length); // 4

console.log(stack.has(100)); // true
console.log(stack.has(300)); // false

stack.pop();
stack.log(); // [100, 2, 3]

stack.deleteAt(1);
console.log(stack.has(2)); // false
stack.log(); // [100, 3]
