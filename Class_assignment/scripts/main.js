function calcLarg(a, b) {
    return a > b ? a : b;
}

function maxOfThree(a, b, c) {
    let max = 0;
    if (a > b && a > c) {
        max = a;
    }
    else if (b > a && b > c) {
        max = b;
    }

    else if (c > a && c > b) {
        max = c;
    }
    return max;
}

function isVowel(a) {
    let vowel = "aeiou"
    return vowel.contains(a);
}
function sum(arr) {
    let sum = 0;
    for (let iterator of arr) {
        sum += iterator
    }
    return sum;
}

function mult(arr) {
    let mul = 0;
    for (let iterator of arr) {
        mul *= iterator
    }
    return mul;
}

function reverse(str) {
    return str.reverse();
}

function findLongestWord(wordArr) {
    let max;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > wordArr[i + 1].length) {
            max = wordArr[i];
        }
    }
    return max;
}


function removeApple(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "apple") {
            newArray.push(arr[i]);
        }
    }
console.log(newArray);
    return newArray;
}

let arr = ["apple ", "cake", "orange", "cider "]
removeApple(arr)
