// console.log(23+97);

// let x = 1 + 2 + 3 + 4 + 5 + 6;
// console.log(x);

// let z = (4 + 6 + 9) /77;
// console.log(z);

// let a = 10;
// console.log(a);

// let b = 7 * a;
// console.log(b);

// let max = 57;
// let actual = max - 13;

// let percentage = actual/max;
// console.log(percentage);

function add7(num) {
    num += 7;
    console.log(num);
}
add7(20);

function multiply(num1, num2) {
    let prod = num1 + num2;
    console.log(prod);
}
multiply(3, 4);

function capitalize(string) {
    let upper = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(upper);
}
capitalize("marco");

function lastLetter(letter) {
    let last = letter[letter.length - 1];
    console.log(last);
  }
  
  lastLetter("abcd");
  