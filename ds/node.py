
class Node:
    """
    Parent class, represents a single node in a list, network, etc.

    Attributes:
        value (any): the integer value this node contains.

    Methods:
        set(value): set the value of this node.
    """

    def __init__(self, value) -> None:
        self._value = value

    @property
    def value(self, value):
        self._value = value

    @value.getter
    def value(self):
        return self._value

    def __repr__(self) -> str:
        return f'[{self.value}]'
