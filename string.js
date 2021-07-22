const IsBalancedString = (s) => {
    const letters = s.split("");
    let result = 0;
    let letterCount = {};
    for (let letter of letters) {
        letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1;
        result = letterCount[letter]
    }
    return letterCount.a === letterCount.c && letterCount.b === letterCount.d ? true : false;
}
console.log(IsBalancedString("abcd"))
console.log(IsBalancedString("aaabbccdd"))
