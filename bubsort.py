def bubble_sort(arr):
    n = len(arr)

    for i in range (n):
        for j in range (0, n-i-1):
            if arr[j] > arr [j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

arr = [10, 4, 60, 49, 88, 90, 55]
sorted_arr = bubble_sort(arr)
print(sorted_arr)