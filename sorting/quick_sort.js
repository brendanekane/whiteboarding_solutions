const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const sort = (x,y) => {return (x<y ? -1 : 1)};

  let left = [],
      right = [],
      pivot = arr[0];

  arr.slice(1).forEach(el => sort(pivot, el) === 1 ? left.push(el) : right.push(el));

  return quickSort(left).concat([pivot]).concat(quickSort(right));
};
