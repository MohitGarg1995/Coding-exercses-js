// Pollyfill for reduce()
// Syntax  arr.reduce((acc,curVal,index,arr) => { }, initialValue)        // it takes callback & initialValue      
                                                                         // inside the callback it take accumalater, currentValue, index, array.



Array.prototype.myReduce = function(callback, initialValue){

    let acc = initialValue;                                          //initialize the accumalter.
   for(let i=0; i<this.length; i++){
    acc = acc ? (callback(acc, this[i],i,this)) : this[i];         //  or u can write   acc = acc ? cBack(acc,this[i],i,this) : this[i]
   }
   return acc;
}

let sum = [8,2,1,9,9,4,1,9,8];
let output = sum.myReduce((acc,curr,i,arr) => {
    return acc+curr },0 );

// let output = sum.reduce((acc,cv)=> acc+cv );
console.log(output);
