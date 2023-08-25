from tree_node import TreeNode


class Tree:
    """
    Tree DS. Any num of children allowed.
    Attributes:
        self.root (TreeNode): the root node in the tree.
    """

    def __init__(self, initialNodeValue) -> None:
        self.root = TreeNode(initialNodeValue)

    def breadthFirstTraverse(self):
        """
        Implement complete breadth first traversal of the tree.
        """
        Tree._breadthFirstTraverse_helper(self.root)

    @staticmethod
    def _breadthFirstTraverse_helper(node, level=1):
        """
        Recursive helper method for BFT.
        """
        print(f'Level {level}: {node}')
        if node.children != {}:
            for childNode in node.children.values():
                Tree._breadthFirstTraverse_helper(childNode, level + 1)

    def depthFirstTraverse(self):
        """
        Implement complete depth first traversal of the tree.
        """
        pass


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(1, 5):
        tree.root.addChild(i)
        for j in range(i, 5):
            tree.root.children[i].addChild(j)
    tree.breadthFirstTraverse()
