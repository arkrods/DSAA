class Node:
    """A class representing a node in a singly linked list."""
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    """A class representing the singly linked list."""
    def __init__(self):
        self.head = None

    def append(self, data):
        """Add a new node with the given data to the end of the list."""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node 

    def display(self):
        """Display the linked list."""
        current_node = self.head
        while current_node:
            print(current_node.data, end=" -> ")
            current_node = current_node.next
        print("None")

    def delete(self, key):
        """Delete the first node with the given key (data)."""
        current_node = self.head

        if current_node and current_node.data == key:
            self.head = current_node.next
            current_node = None 
            return

        prev_node = None
        while current_node and current_node.data != key:
            prev_node = current_node
            current_node = current_node.next

        if current_node is None:
            print(f"Node with data {key} not found.")
            return

        prev_node.next = current_node.next
        current_node = None

if __name__ == "__main__":
    linked_list = SinglyLinkedList()
    linked_list.append(1)
    linked_list.append(2)
    linked_list.append(3)
    linked_list.append(4)

    print("Linked List:")
    linked_list.display()

    linked_list.delete(3)
    print("Linked List after deleting 3:")
    linked_list.display()

    linked_list.delete(5)