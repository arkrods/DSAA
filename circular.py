class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
        else:
            current = self.head
            while current.next != self.head:
                current = current.next
            current.next = new_node
            new_node.next = self.head

    def display(self):
        if not self.head:
            print("List is empty")
            return
        current = self.head
        while True:
            print(current.data, end=" -> ")
            current = current.next
            if current == self.head:
                break
        print("(head)")

    def delete(self, key):
        if not self.head:
            return

        current = self.head
        previous = None
        

        if current.data == key:
            if current.next == self.head:
                self.head = None
            else:
                while current.next != self.head:
                    current = current.next
                current.next = self.head.next
                self.head = self.head.next
            return

        while current.next != self.head:
            if current.data == key:
                break
            previous = current
            current = current.next

        if current == self.head:
            print(f"Node with data {key} not found.")
            return
        previous.next = current.next


if __name__ == "__main__":
    cll = CircularLinkedList()
    cll.append(1)
    cll.append(2)
    cll.append(3)
    cll.append(4)

    print("Circular Linked List:")
    cll.display()

    print("\nDeleting node with data 2:")
    cll.delete(2)
    cll.display()

    print("\nDeleting head node:")
    cll.delete(1)
    cll.display()