//Iterate w JS Do...While Loops

const myArray = [];
let i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

/* Change the while loop in the code to a do...while loop so the loop will push only the number 10
to myArray, and i will be equal to 11 when your code has finished running. */

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 10);

//i is now equal to 11

//Replace Loops using Recursion 
//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else { 
        return sum(arr, n - 1) + arr[n - 1];
    }
}