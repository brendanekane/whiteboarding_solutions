def max_area(height)
    return nil if !height
    return height[0] if height.length == 1

    left, result = 0, 0
    right = height.length - 1
    while left < right
        temp = [height[left], height[right]].min * (right - left)
        result = temp if temp > result
        height[left] < height[right] ? left += 1 : right -= 1
    end
    result
end
