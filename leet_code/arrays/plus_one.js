const plusOne = arr => {
    if (arr[arr.length - 1] < 9) {
        arr[arr.length - 1] += 1;
        return arr;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === 0 && arr[i] === 9) {
            arr[i] = 0;
            arr.unshift(1);
        } else if ( arr[i] === 9) {
            arr[i] = 0;
        } else {
            arr[i] += 1;
            return arr;
        }
    }
    return arr;
};
