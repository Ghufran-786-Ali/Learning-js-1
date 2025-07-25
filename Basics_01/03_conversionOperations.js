let number = 33;
let numberInString = "33abc"
let numberNull = null;
let numberUndefined = undefined;

let checkNumber = Number(number);
let checknumberInString = Number(numberInString);
let checknumberNull = Number(numberNull);
let checkNumberUndefined = Number(numberUndefined);


console.table([number , numberInString , numberNull , numberUndefined]);
console.table([checkNumber, checknumberInString , checknumberNull , checkNumberUndefined]);

