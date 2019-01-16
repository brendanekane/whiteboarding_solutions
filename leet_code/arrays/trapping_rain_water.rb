def trap(arr)
  left, left_h, result, right, right_h = 0, 0, 0, arr.length - 1, 0

  while left <= right
    if left_h <= right_h
      left_h = [left_h, arr[left]].max
      result += (left_h - arr[left])
      left += 1
    else
      right_h = [right_h, arr[right]].max
      result += (right_h - arr[right])
      right -= 1
    end
  end
  result
end
