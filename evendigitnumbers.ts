//Problem find the number of digits in the array that have an even number of digits

const numberslist = [1, 2, 345, 678, 9000, 87, 568, 988870, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890, 1234567890]

//RESULTS: 
//String length with forEach is fastest
//Reduced continuous division is second fastest
//Reduced string is third fastest
//Math log reduction is second last
//The first one is the slowest


//Approach 1.
//Logic: If you divide a number by ten, if the result is less than 1, stop.
//The number of times you divided is how many digits there are in that number.
//Strategy: Keep dividing by ten till the resultant value is less than 1.


const continuousdivision = (numberslist: number[]) => {
    //Keep a total count of the number of even digits & initialize to 0
    let evennumbers = 0
    numberslist.forEach((number: number) => {
        if(tendivider(number)%2===0){
            evennumbers++;
        }
    })
    console.log(evennumbers);
}


//Create a function that divides by 10 till the number is less than 1 and returns
//the number of divisions
const tendivider = (number : number):number => {
    let count = 0;
    while(number >= 1){
        number = number/10;
        count++
    }
    return count
}

//Create a test number to test your tendivider function and how long it takes (Takes about 1-2 seconds)
// const startTime = Date.now();
// const testnumber = 66;
// console.log(tendivider(testnumber));
// const endTime = Date.now();
// console.log(endTime - startTime)


//Run the mother function on the dataset and see how long approach 1 takes. Takes about 1.5ms.
console.time('Execution Time')
continuousdivision(numberslist)
console.timeEnd('Execution Time')

//Optimize the function using a reduce and run

const reduceddivision = (numberslist: number[]) => {
    console.log(
        numberslist.reduce((prev: number, curr: number) => {
            let count = 0
            while(curr >= 1){
                curr = curr/10
                count++;
            }
            if(count%2===0){
                prev++
                return prev
            }
            return prev
        }, 0)
    )
}

console.time('Execution time')
reduceddivision(numberslist);
console.timeEnd('Execution time')

//Approach 2. Convert the number to strings and check character length

const stringConversion = (numberslist: number[]) => {
    let evenNumbers = 0
    numberslist.forEach((number: number) => {
        const string = String(number)
        if(string.length%2===0){
            evenNumbers++
        }
    })
    console.log(evenNumbers);
}

console.time('Execution time')
stringConversion(numberslist);
console.timeEnd('Execution time')

//Optimize using a reduce method

const stringReduction = (nubmerslist: number[]) => {
    console.log(
        numberslist.reduce((prev: number, curr: number) => {
            String(curr).length % 2 === 0 ? prev++ : prev;
            return prev
        }, 0)
    )
}

console.time('Execution time')
stringReduction(numberslist);
console.timeEnd('Execution time')

//Solve using Math.log10

const logReduction = (numberslist: number[]) => {
    console.log(
        numberslist.reduce((prev: number, curr: number) => {
            Math.round(Math.log10(curr)+1)%2 === 0 ? prev++ : prev;
            return prev
        }, 0)
    )
}

console.time('Execution time')
logReduction(numberslist);
console.timeEnd('Execution time')


