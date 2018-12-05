const largestRectangleArea = (heights) => {
    if (!heights) return null;
    else if (heights.length === 1) return heights[0];

    let stackH = [],
        stackP = [];
    let height = null,
        position = null;
    let tempH = null,
        tempP = null;
    let tempSize = null,
        maxSize = null;

    const calcMaxHeight = () => {
        tempH = stackH.pop();
        tempP = stackP.pop();
        tempSize = tempH * (position - tempP);
        maxSize = Math.max(tempSize, maxSize);
    };

    for (position = 0; position < heights.length; position++) {
        height = heights[position];
        if (stackH.length === 0 || height > stackH[stackH.length - 1]) {
            stackH.push(height);
            stackP.push(position);
        } else if (height < stackH[stackH.length - 1]) {
            while (height < stackH[stackH.length - 1]) {
                calcMaxHeight();
            }
            stackH.push(height);
            stackP.push(tempP);
        }
    }
    while (stackH.length > 0) {
        calcMaxHeight();
    }
    return maxSize;
};
