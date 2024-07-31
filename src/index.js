module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    const strNumber = String(number);
    const arrNumber = strNumber.split("");
    const numberOfDigits = arrNumber.length;
    let currentDigit = numberOfDigits;
    const oneDigit = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
    ]);
    const twoDigit = new Map([
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
    ]);
    const tenDigit = new Map([
        [2, "twenty"],
        [3, "thirty"],
        [4, "forty"],
        [5, "fifty"],
        [6, "sixty"],
        [7, "seventy"],
        [8, "eighty"],
        [9, "ninety"],
    ]);
    let result = "";
    while (currentDigit > 0) {
        let key = +arrNumber[numberOfDigits - currentDigit];
        if (currentDigit === 4 && numberOfDigits === 4) {
            result += `${oneDigit.get(key)} thousand `;
        } else if (
            currentDigit === 3 &&
            +arrNumber[numberOfDigits - currentDigit] !== 0
        ) {
            result += `${oneDigit.get(key)} hundred `;
        } else if (
            currentDigit === 2 &&
            +arrNumber[numberOfDigits - currentDigit] > 1
        ) {
            result += `${tenDigit.get(key)} `;
        } else if (
            currentDigit === 2 &&
            +arrNumber[numberOfDigits - currentDigit] === 1
        ) {
            let key = Number(strNumber.slice(strNumber.length - 2));
            result += `${twoDigit.get(key)} `;
        } else if (
            currentDigit === 1 &&
            +arrNumber[numberOfDigits - currentDigit] !== 0 &&
            +arrNumber[numberOfDigits - currentDigit - 1] !== 1
        ) {
            result += `${oneDigit.get(key)}`;
        }
        currentDigit--;
    }

    return result.trim();
};
