class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    //Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while(queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if(currentNode.left) queue.enqueue(node.left);
      if(currentNode.right) queue.enqueue(node.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

