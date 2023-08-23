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
        Return False if empty stack.
        """
        try:
            return self.stack.pop(0)
        except IndexError:
            return False

    def peek(self):
        """
        Return the top item without removing it.
        Return False if empty stack.
        """
        try:
            return self.stack[0]
        except IndexError:
            return False

    def __repr__(self):
        """
        Print the queue for debugging.
        """
        return str(self.stack)


if __name__ == '__main__':
    s = Stack()
    for i in range(10):
        s.push(i)
    print(s)
    print(s.pop())
    print(s)
