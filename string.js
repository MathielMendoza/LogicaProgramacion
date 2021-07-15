
function IsBalancedString(s) {
    let result=0;
    let letters = s.split("");
    let countLetter = {};
    for(let letter of letters){
        countLetter[letter] ? countLetter[letter]++ :countLetter[letter] = 1
        result = countLetter[letter]
    }
    console.log(countLetter)
    countLetter['a'] === countLetter['c'] && countLetter['b'] === countLetter['d']  ? console.log("True") : console.log("False")
}

IsBalancedString("abcd")
IsBalancedString("aaabbccdd")