let score = "33"

console.log(typeof score) // string

let scoreValue = Number(score)

console.log(typeof(scoreValue)) // number

// score => string
// scoreValue => number

// number is datatype
// Number during type conversion

let isTrue = 1
let booleanIsTrue = Boolean(isTrue)

// number to bool
// 0 -> false
// other numbers -> true
// string to bool
// "" -> false        empty string is always false
// "Prabal" -> true   other strings -> true


// string to number

let numInString = "1a"
let num = Number(numInString)

console.log(typeof(numInString))
console.log(typeof(num))
console.log(num)  //  gives NaN -> not a number

// null -> number gives NaN


// ******************* Operations *******************

let value = 3
let negvalue = -value
console.log(negvalue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello "
let str2 = "world"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
console.log(+"");

// increment and decrement operators