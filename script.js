function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Close the modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal(modalId);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    // Remove the click event listener after closing the modal
    window.onclick = null;
}

function showMembers() {
    const members = [
        "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", 
        "Emily Clark", "David Wilson", "Grace Lee", "Michael King", "Sophia Harris"
    ];

    const membersListDiv = document.getElementById('membersList');
    membersListDiv.innerHTML = ''; 

    members.forEach(function(member) {
        const li = document.createElement('li');
        li.textContent = member;
        membersListDiv.appendChild(li);
    });

    openModal('membersModal'); 
}

const membersButton = document.querySelector('.btn.btn-download');
if (membersButton) {
    membersButton.addEventListener('click', showMembers);
}














function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal(modalId);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    window.onclick = null;
}

// DITO EDIT NG SORTALGORITHM
function showAlgorithm(algorithm) {
    const contentDiv = document.getElementById('sortingContent');
    if (algorithm === 'bubble') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Repeat for each element in the array
    Compare adjacent elements
    Swap if needed

            </pre>
            <h4>Python Code:</h4>
            <pre>
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 34, 64, 90]
            </pre>
        `;
    } else if (algorithm === 'insertion') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Start from the second element
    Compare it with previous elements
    Shift elements and place the element in the correct position
            </pre>
            <h4>Python Code:</h4>
            <pre>
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

# Example usage
arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print(arr)  # Output: [5, 6, 11, 12, 13]
</pre>
        `;
    } else if (algorithm === 'selection') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
For each index in the array
    Find the minimum element in the unsorted part
    Swap it with the current index
</pre>
            <h4>Python Code:</h4>
            <pre>
def selection_sort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]

# Example usage
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)  # Output: [11, 12, 22, 25, 64]
</pre>
        `;
    } else if (algorithm === 'merge') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Divide the array into two halves
Sort each half recursively
Merge the two halves
</pre>
            <h4>Python Code:</h4>
            <pre>
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
merge_sort(arr)
print(arr)  # Output: [3, 9, 10, 27, 38, 43, 82]
</pre>
        `;
    } else if (algorithm === 'quick') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Choose a pivot element
Partition the array into elements less than pivot and greater than pivot
Recursively sort the partitions
</pre>
            <h4>Python Code:</h4>
            <pre>
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
arr = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(arr))  # Output: [1, 1, 2, 3, 6, 8, 10]
</pre>
        `;
    }
}

// Linked List types
function showLinkedList(type) {
    const contentDiv = document.getElementById('linkedListContent');
    if (type === 'single') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Create a node with data and next pointer
Add nodes to the list by adjusting the next pointers
</pre>
            <h4>Python Code:</h4>
            <pre>
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SingleLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            last = self.head
            while last.next:
                last = last.next
            last.next = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

# Example usage
ll = SingleLinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.print_list()  # Output: 10 -> 20 -> 30 -> None
</pre>
        `;
    } else if (type === 'double') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Create a node with data, next pointer, and previous pointer
Add nodes to the list by adjusting the next and previous pointers
</pre>
            <h4>Python Code:</h4>
            <pre>
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoubleLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            last = self.head
            while last.next:
                last = last.next
            last.next = new_node
            new_node.prev = last

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" <-> ")
            temp = temp.next
        print("None")

# Example usage
dll = DoubleLinkedList()
dll.append(10)
dll.append(20)
dll.append(30)
dll.print_list()  # Output: 10 <-> 20 <-> 30 <-> None
</pre>
        `;
    } else if (type === 'circular') {
        contentDiv.innerHTML = `
            <h4>Pseudocode:</h4>
            <pre>
Create a node with data and next pointer
Make the last node point to the head node to form a circular structure
</pre>
            <h4>Python Code:</h4>
            <pre>
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
            last = self.head
            while last.next != self.head:
                last = last.next
            last.next = new_node
            new_node.next = self.head

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
            if temp == self.head:
                break
        print("Circular Link to Head")

# Example usage
cll = CircularLinkedList()
cll.append(10)
cll.append(20)
cll.append(30)
cll.print_list()  # Output: 10 -> 20 -> 30 -> Circular Link to Head
.</pre>
        `;
    }
}

//  Stack content (Infix, Prefix, Postfix)
function showStack(type) {
    const contentDiv = document.getElementById('stackContent');
    if (type === 'infix') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
def postfix_to_infix(postfix):
    stack = Stack()

    for char in postfix:
        if char.isalnum():  # If the character is an operand, push to stack
            stack.push(char)
        else:  # If the character is an operator
            operand2 = stack.pop()
            operand1 = stack.pop()
            # Create a new string with operands and operator in infix format
            stack.push(f"({operand1} {char} {operand2})")

    return stack.pop()

# Example usage
postfix = "ab*cd^e-fgh*+^+i-"
print("Infix Expression: ", postfix_to_infix(postfix))  # Output: "((a * b) + ((c ^ d) - e) ^ (f + (g * h))) - i"
</pre>
        `;
    } else if (type === 'prefix') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
def evaluate_prefix(prefix_expr):
    stack = Stack()

    # Reverse the prefix expression to process it from right to left
    prefix_expr = prefix_expr[::-1]

    for char in prefix_expr:
        if char.isdigit():  # If operand, push to stack
            stack.push(int(char))
        else:  # If operator, pop two operands, apply operator, and push result
            val1 = stack.pop()
            val2 = stack.pop()
            if char == '+':
                stack.push(val1 + val2)
            elif char == '-':
                stack.push(val1 - val2)
            elif char == '*':
                stack.push(val1 * val2)
            elif char == '/':
                stack.push(val1 / val2)
            elif char == '^':
                stack.push(val1 ** val2)

    return stack.pop()

# Example usage
prefix_expr = "*+23-45"
print("Evaluated Prefix Expression: ", evaluate_prefix(prefix_expr))  # Output: 21
</pre>
        `;
    } else if (type === 'postfix') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
def evaluate_postfix(postfix_expr):
    stack = Stack()

    for char in postfix_expr:
        if char.isdigit():  # If operand, push to stack
            stack.push(int(char))
        else:  # If operator, pop two operands, apply operator, and push result
            val2 = stack.pop()
            val1 = stack.pop()
            if char == '+':
                stack.push(val1 + val2)
            elif char == '-':
                stack.push(val1 - val2)
            elif char == '*':
                stack.push(val1 * val2)
            elif char == '/':
                stack.push(val1 / val2)
            elif char == '^':
                stack.push(val1 ** val2)

    return stack.pop()

# Example usage
postfix = "ab*cd^e-fgh*+^+i-"
print("Evaluated Postfix Expression: ", evaluate_postfix(postfix))  # Output: 16
</pre>
        `;
    }
}

//  Tree Traversal content (Inorder, Preorder, Postorder)
function showTree(type) {
    const contentDiv = document.getElementById('treeContent');
    if (type === 'inorder') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

def inorder(root):
    if root:
        inorder(root.left)  # Traverse left subtree
        print(root.value, end=" ")  # Visit root
        inorder(root.right)  # Traverse right subtree

# Create a binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Inorder traversal
print("Inorder Traversal: ", end="")
inorder(root)  # Output: 4 2 5 1 6 3 7
</pre>
        `;
    } else if (type === 'preorder') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

def preorder(root):
    if root:
        print(root.value, end=" ")  # Visit root
        preorder(root.left)  # Traverse left subtree
        preorder(root.right)  # Traverse right subtree

# Create a binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Preorder traversal
print("Preorder Traversal: ", end="")
preorder(root)  # Output: 1 2 4 5 3 6 7
</pre>
        `;
    } else if (type === 'postorder') {
        contentDiv.innerHTML = `
            <h4>Python Code:</h4>
            <pre>
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

def postorder(root):
    if root:
        postorder(root.left)  # Traverse left subtree
        postorder(root.right)  # Traverse right subtree
        print(root.value, end=" ")  # Visit root

# Create a binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Postorder traversal
print("Postorder Traversal: ", end="")
postorder(root)  # Output: 4 5 2 6 7 3 1
</pre>
        `;
    }
}
