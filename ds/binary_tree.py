from ds.tree import Tree
from ds.bst_tree_node import BSTTreeNode


class BinarySearchTree(Tree):
    """
    BST.
    """

    def __init__(self, initialNodeValue) -> None:
        self.root = BSTTreeNode(initialNodeValue)


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(1, 5):
        tree.root.addChild(i)
        for j in range(i, 5):
            tree.root.children[i].addChild(j)
    tree.breadthFirstTraverse()
