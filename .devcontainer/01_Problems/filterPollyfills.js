// Pollyfill for filter()

// Syntax:-----    array.filter(callback(currentValue,index,array), thisArg)
// Syntax:-----    Array.filter((num,i,arr) => { })


// The filter() method creates a new array with array elements that pass a test.
// The Array filter() method is used to create a new array from a given array consisting 
//               of only those elements from the given array which satisfy a condition set by the argument function. 
// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//               filtered down to just the elements from the given array that pass the test implemented by the provided function.   



Array.prototype.myFilter = function(callback){
    let emptyArr = []
    for (let i =0; i<this.length; i++){
        if(callback(this[i],i,this)){
            emptyArr.push(this[i]);
        }
    }
    return emptyArr;
}

const values = [8,2,1,9,9,4,1,9,8];
const output = values.myFilter((num) => num > 8);
console.log("Filter Method output:---", output);


//THIS refer to the array which we are gonna iterate  eg:- here this is values array =[4,5,8,9]
// i refer to the index of array


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter