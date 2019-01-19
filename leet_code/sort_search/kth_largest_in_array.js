// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Example 1:
//
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

const quicksort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0],
        left = [],
        right = [];

  arr.slice(1).forEach((el) => {
    el < pivot ? left.push(el) : right.push(el);
  });

  return quicksort(left).concat([pivot]).concat(quicksort(right));
};

const findKthLargest = (nums, k) => {
    return quicksort(nums)[nums.length - k];
};
