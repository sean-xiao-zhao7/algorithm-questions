from ds.node import Node
from ds.errors.ChildExistError import ChildExistError


class TreeNode(Node):
    """
    A single node in a tree DS.
    Attributes:
        self.children (dict of TreeNodes): 
            Children TreeNodes are stored in a dictionary.
            Key is value of the TreeNode, and value is the TreeNode. 
    """

    def __init__(self, value) -> None:
        super().__init__(value)
        self.children = {}

    def addChild(self, value):
        newTreeNode = TreeNode(value)
        if value in self.children:
            raise ChildExistError(value)
        self.children[value] = newTreeNode

    def removeChild(self, value):
        self.children.pop(value)
