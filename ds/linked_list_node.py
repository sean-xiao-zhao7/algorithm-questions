from node import Node


class LinkedListNode(Node):
    """
    A single node in a linked list.

    Attributes:
        value (any): the value this node contains.
    """

    def __init__(self, value) -> None:
        super().__init__(value)
        self.next = None

    @property
    def next(self):
        return self._next

    @next.setter
    def next(self, node):
        if not self.next:
            self.next = node
        else:
            return False
