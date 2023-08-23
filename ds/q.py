class Queue:
    def __init__(self):
        self.queue = []

    def add(self, input):
        """
        Add input to start of self queue.
        Param:
        input (int): the integer to be added.
        """
        self.queue.insert(0, input)

    def remove(self):
        """
        Remove the last item from the queue.                
        """
        self.queue.pop()

    def __repr__(self):
        """
        Print the queue for debugging.
        """
        return str(self.queue)


if __name__ == '__main__':
    q = Queue()
    for item in range(10):
        q.add(item)
    print(q)
