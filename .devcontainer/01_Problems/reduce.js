// Total sum odf numbers using reduce
const numbers = [2, 4, 6];
const rewsult = numbers.reduce((totalsum, val)=> totalsum+val,0 )
console.log(rewsult);

// Max value from array using reduce
const values = [3, 5, 1, 8, 2,56,12];
const maxVal = values.reduce((accumalator, maxValue) => {
console.log("accumalator:",accumalator,"maxValue:", maxValue);
    // return Math.max(accumalator, maxValue);
    return maxValue > accumalator ? maxValue : accumalator;
})
console.log(maxVal);


// Solution Max value by using Rest Operator
function findMax(...numbers) {
  // numbers is an array of all arguments passed
  const maxValue = Math.max(...numbers);
  return maxValue;
}

// Example usage:
console.log(findMax(10, 25, 3, 99, 42)); // 99
console.log(findMax(5, 7, 2));           // 7


// Flaten the array
const nested = [[1, 2], [3, 4], [5]];
// const flat = nested.flat();
const flatArray = nested.reduce((acc, values) => {
    return acc.concat(values)
    })
console.log(flatArray);


