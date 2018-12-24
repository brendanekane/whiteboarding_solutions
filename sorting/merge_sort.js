const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0,pivot)),
        right = mergeSort(arr.slice(pivot));

  return merge(left, right);
};

const merge = (left, right) => {
  let temp = [];
  const sort = (x,y) => {return (x > y ? 1 : -1);};

  while (left.length > 0 && right.length > 0) {
    sort(left[0], right[0]) === -1 ? temp.push(left.shift()) : temp.push(right.shift());
  }

  return temp.concat(left).concat(right);
};
