
class Stack:
    def __init__(self) -> None:
        self.stack = []

    def push(self, input):
        """
        Push the new item onto the stack.
        Param:
        input (int): an item of integer.
        """
        self.stack.insert(0, input)

    def pop(self):
        """
        Return the first item and remove it from the stack.
        """
        self.stack.pop(0)

    def __repr__(self):
        """
        Print the queue for debugging.
        """
        return str(self.stack)


if __name__ == '__main__':
    pass
