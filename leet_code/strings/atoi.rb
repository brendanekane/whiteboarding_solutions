def atoi(string)
  result = 0
  length = string.length - 1
  dict = {"0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9};
  idx = 0
  while idx < string.length
    if string[idx] == ","
      string = string[0...idx].concat(string[idx+1..-1])
      length -= 1
    end
    idx += 1
  end

  string.each_char do |ch|
    if ch == "+" || ch == "-"
      length -= 1
      next
    end
    result += dict[ch] * (10**length)
    length -= 1
  end
  result *= -1 if string[0] == "-"
  result
end
