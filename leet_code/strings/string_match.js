const repeatedStringMatch = (str1, str2) => {
    if (str1.includes(str2)) return 1;
    let result = 1;
    let newStr = str1;
    while (!newStr.includes(str2)) {
        if (newStr.length >= 10000) return -1;
        newStr += str1;
        result += 1;
    }
    return result;
};
