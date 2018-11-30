const bSearch = (arr, target) => {
  if (arr.length < 1 || (arr.length === 1 && arr[0] !== target)) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? left = mid + 1 : right = mid - 1;
  }
  return -1;
};
