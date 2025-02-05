class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  i: number = -1
  constructFromArray(nodes: number[]) {
    this.i++
    if (nodes[this.i] === -1) return
    const newNode = new TreeNode(nodes[this.i])
    newNode.left = this.constructFromArray(nodes)
    newNode.right = this.constructFromArray(nodes)
    return newNode
  }
}

const tree = new BinaryTree()

tree.constructFromArray([1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1])
