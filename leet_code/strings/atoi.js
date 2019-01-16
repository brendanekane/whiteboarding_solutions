const atoi = string => {
  let result = 0,
      length = string.length - 1;

  const dict = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
      string = string.slice(0,i).concat(string.slice(i+1));
      length -= 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "+" || string[i] === "-") {
      length -= 1;
      continue;
    }

    result += dict[string[i]] * (10**length);
    length -= 1;
  }
  if (string[0] === "-") result *= -1;
  return result;
};
