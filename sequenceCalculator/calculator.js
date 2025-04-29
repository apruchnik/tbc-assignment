import {Decimal} from 'decimal.js';

function sequenceCalculator(n) {
    // //Initialize loop lengths and variables
    // const firstI = n - 1;
    // const secondI = n - 2;
    // let firstCall = 0;
    // let secondCall = 0;
    //
    // //S_(n - 1)
    // for (let i = 0; i < firstI; i++) {
    //     firstCall++;
    // }
    // //S_(n - 2)
    // for (let i = 0; i < secondI; i++) {
    //     secondCall++;
    // }
    //
    // console.log((3 * firstCall) - secondCall);
    Decimal.config({precision: 20, rounding: 4});
    Decimal.set({maxE: 10000000});
    //Big.RM = Big.roundHalfUp;
    //Big.strict = true;

    // let x = new Big(2);
    // let y = new Big(3);
    // let z = x.div(y);
    //console.log(z.sqrt());

    let five = new Decimal(5);
    let sqt5 = five.sqrt();
    let fiveOverFive = sqt5.div(5);
    let three = new Decimal(3);

    let s1 = (three.add(sqt5)).div(2);
    let s2 = (three.sub(sqt5)).div(2);
    return (fiveOverFive * s1.pow(n)) - (fiveOverFive * s2.pow(n));
}

console.log("Running")
console.log(sequenceCalculator(1000));