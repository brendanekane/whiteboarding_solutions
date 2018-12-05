const largest_substring = string => {
  if (!string) return null;
  if (string.length === 1) return 1;

  let longest = 0,
      left = 0,
      right = 0;

  let count = {};

  while (left < string.length) {
    if (right >= string.length || count[string[right]]) {
      if (right - left > longest) longest = right - left;
      left++;
      right = left;
      count = {};
    } else {
      count[string[right]] = 1;
      right++;
    }
  }
  return longest;
};
