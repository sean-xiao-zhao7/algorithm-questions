from ds.tree_node import TreeNode


class Tree:
    """
    Tree DS. Any num of children allowed.
    Attributes:
        self.root (TreeNode): the root node in the tree.
    """

    def __init__(self, initialNodeValue) -> None:
        self.root = TreeNode(initialNodeValue)
