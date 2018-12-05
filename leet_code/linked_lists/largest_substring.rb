def largest_substring(string)
  return nil if !string
  return 1 if string.length == 1

  longest, left, right = 0, 0, 0
  count = Hash.new

  while left < string.length
    if right >= string.length || count[string[right]]
      longest = (right - left) if (right - left) > longest
      left += 1
      right = left
      count = Hash.new
    else
      count[string[right]] = 1
      right += 1
    end
  end
  longest
end
