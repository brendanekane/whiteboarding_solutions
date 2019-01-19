# Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
#
# Example 1:
#
# Input: [3,2,1,5,6,4] and k = 2
# Output: 5

def quicksort(arr)
  return arr if arr.length <= 1

  pivot, left, right = arr[0], [], []

  arr[1..-1].each do |el|
    el < pivot ? left << el : right << el
  end
  quicksort(left).concat([pivot]).concat(right)
end

def find_kth_largest(nums, k)
  quicksort(nums)[nums.length - k]
end
