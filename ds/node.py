
class Node:
    """
    Parent class, represents a single node in a list, network, etc.

    Attributes:
        value (any): the integer value this node contains.

    Methods:
        set(value): set the value of this node.
    """

    def __init__(self, value) -> None:
        self.value = value

    def set(self, value):
        self.value = value

    def __repr__(self) -> str:
        return f'[{self.value}]'
