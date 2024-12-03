def quicksort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quicksort(left) + middle + quicksort(right)

if __name__ == "__main__":
    sample_array = [3, 6, 8, 10, 1, 2, 1]
    sorted_array = quicksort(sample_array)
    print( sorted_array)