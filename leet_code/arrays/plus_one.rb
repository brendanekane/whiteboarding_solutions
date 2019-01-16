def plus_one(arr)
  if arr[-1] < 9
    arr[-1] += 1
    return arr
  end

  idx = arr.length - 1
  while idx >= 0
    if arr[idx] == 9 && idx == 0
      arr[idx] = 0
      arr.unshift(1)
      break
    elsif arr[idx] == 9
      arr[idx] = 0
    else
      arr[idx] += 1
      return arr
    end
    idx -= 1
  end
  arr
end
