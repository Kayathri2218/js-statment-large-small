

let a = Number(prompt("Enter the 1st number"));
let b = Number(prompt("Enter the 2nd number"));
let c = Number(prompt("Enter the 3ed number"));

let largest, smallest;

if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}

if (a < b) {
    if (a < c) {
        smallest = a;
    } else {
        smallest = c;
    }
} else {
    if (b < c) {
        smallest = b;
    } else {
        smallest = c;
    }
}

console.log("Largest number is:", largest);
console.log("Smallest number is:", smallest);

