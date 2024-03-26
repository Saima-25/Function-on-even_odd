#! /usr/bin/env node
function value(num) {
    if (num % 2 === 0) {
        console.log("number is even");
    }
    else if (num % 2 !== 0) {
        console.log("number is odd");
    }
    else {
        console.log("invalid");
    }
}
value(6.3);
export {};
