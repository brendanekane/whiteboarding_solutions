var maxArea = function(height) {
    if (!height) return null;
    if (height.length === 1) return height[0];

    let left = 0,
        right = height.length - 1,
        result = 0;
    
    while (left < right) {
        let temp = Math.min(height[left], height[right]) * (right - left);
        if (temp > result) result = temp;
        height[left] < height[right] ? left++ : right--;
    }
    return result;
};
