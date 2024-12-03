class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        """Add a node at the end of the list."""
        new_node = Node(data)
        if not self.head: 
            self.head = new_node
            return
        
        last = self.head
        while last.next:
            last = last.next
        
        last.next = new_node 
        new_node.prev = last 

    def display_forward(self):
        """Display the list from head to tail."""
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

    def display_backward(self):
        """Display the list from tail to head."""
        current = self.head
        if not current:
            return
        
        while current.next:
            current = current.next
        
        while current:
            print(current.data, end=' ')
            current = current.prev
        print()

    def delete_node(self, node):
        """Delete a node from the list."""
        if self.head is None or node is None:
            return
        
        if self.head == node:
            self.head = node.next
        
        if node.next:
            node.next.prev = node.prev
        
        if node.prev:
            node.prev.next = node.next



if __name__ == "__main__":
    dll = DoublyLinkedList()
    dll.append(1)
    dll.append(2)
    dll.append(3)
    
    print("Display list forward:")
    dll.display_forward()
    
    print("Display list backward:")
    dll.display_backward() 


    node_to_delete = dll.head.next
    dll.delete_node(node_to_delete)

    print("Display list after deletion:")
    dll.display_forward() 