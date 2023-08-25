from ds.node import Node
from errors.ChildExistError import ChildExistError


class TreeNode(Node):
    def __init__(self, value) -> None:
        super().__init__(value)
        self.children = {}

    def addChild(self, value):
        newTreeNode = TreeNode(value)
        if self.children[value]:
            raise ChildExistError(value)
        self.children[value] = newTreeNode

    def removeChild(self, value):
        self.children.pop(value)
