// 스택을 배열로 할때
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack)

stack.pop();
console.log(stack)

// get Top 값 확인
console.log(stack[stack.length - 1]);

// 스택을 리스트로 할 때

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stack2.pop());
stack2.push(4);
console.log(stack2.pop());
console.log(stack2.pop());