// Pollyfill for map()

// Syntax:-----    array.map(callback(currentValue,index,array), thisArg)
// Syntax:-----    Array.map((num,i,arr) => { })

//  The map() method creates a new array by performing a function on each array element.
//  The map() method does not execute the function for array elements without values.
//  The map() method does not change or mutate the original array.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



Array.prototype.mymap = function(callback) {

    let arr = [];
    for (let i=0; i<this.length; i++){
       arr.push(callback(this[i],i,this));
    }
    return arr;
}

const val = [8,2,1,9,9,4,1,9,8];
const output = val.mymap((num,i,arr) => { return num*2})
console.log("myMap Method answer:--",output);




Array.prototype.myMaps = function(callback){
    let ar=[];
    for(let i=0; i<this.length; i++){
        ar.push(callback(this[i],index,this))
    }
    return ar;
}




