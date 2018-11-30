def b_search(arr, target)
    return -1 if arr.length < 1 || (arr.length == 1 && arr[0] != target)

    left = 0
    right = arr.length - 1
    mid = (left + right) / 2

    while left <= right
        mid = (left + right) / 2
        return mid if arr[mid] == target
        arr[mid] < target ? left = mid + 1 : right = mid - 1
    end
    -1
end
