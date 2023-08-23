from stack import Stack


class Queue:
    def __init__(self):
        self.stack = Stack()

    def add(self, input):
        """
        Add input to start of self queue.
        Param:
        input (int): the integer to be added.
        """
        self.stack.push(input)

    def remove(self):
        """
        Remove the last item from the queue.
        """
        temp_stack = Stack()
        current_stack_item = self.stack.pop()
        while current_stack_item:
            temp_stack.push(current_stack_item)
            current_stack_item = self.stack.pop()

        return_item = temp_stack.pop()

        current_stack_item = temp_stack.pop()
        while current_stack_item:
            self.stack.push(current_stack_item)
            current_stack_item = temp_stack.pop()

        return return_item

    def weave(self, queue2):
        """
        Weave the other queue's items into self queue.
        Param:
        queue2 (Queue): extract and add all items into self queue, 
        alternating between self queue item and other queue item.
        """
        new_queue = Queue()
        item1 = self.remove()
        item2 = queue2.remove()
        while item1 or item2:
            if item1:
                new_queue.add(item1)
                item1 = self.remove()
            if item2:
                new_queue.add(item2)
                item2 = queue2.remove()
        self.stack = new_queue

    def __repr__(self):
        """
        Print the queue for debugging.
        """
        return str(self.stack)


if __name__ == '__main__':
    q1 = Queue()
    q2 = Queue()
    for item in range(1, 20):
        if item % 2 == 0:
            q2.add(item)
        else:
            q1.add(item)
    q1.weave(q2)
    print(q1)
