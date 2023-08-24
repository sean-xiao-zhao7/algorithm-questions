from node import Node


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def insertFirst(self, value):
        newNode = Node(value)
        if not self.head:
            self.head = newNode


if __name__ == '__main__':
    llist1 = LinkedList()
