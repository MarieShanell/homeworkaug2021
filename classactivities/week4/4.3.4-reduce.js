// using reduce, sum the numbers from 1 to 200

function arrayOfNumbers(end = 100) {
  const nums = [];
  for (let i = 1; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

//HINT: use the arrayOfNumbers() function above to generate an Array with the correct numbers

// You could first create an array of numbers and then reduce it
//---------------------------------------------------------------
// const numsToSum = arrayOfNumbers(200);
// console.log(numsToSum);
// const theSum = numsToSum.reduce((acc, num) => acc += num, 0);
// console.log(theSum );

// Else go straight at it
//--------------------------
const theSum = arrayOfNumbers(200).reduce((acc, num) => (acc += num), 0);
console.log("The sum of numbers is ... ", theSum);

// The dirty one-liner...
//------------------------
console.log(arrayOfNumbers(200).reduce((acc, num) => (acc += num), 0));
