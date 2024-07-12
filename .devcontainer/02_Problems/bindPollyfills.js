// Pollyfills for bind method.

// With the bind() method, an object can borrow a method from another object.

// Syntax :--      let boundFunction = func.bind(thisArg[, arg1[, arg2[, ...]]]);

// func:-- The original function you want to bind.
// thisArg:-- The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator.
// arg1, arg2, ...:--   Arguments to prepend to arguments provided to the bound function when invoking the original function.



Function.prototype.myBind = function(context = {}, ...args){
if(typeof this !== "function"){
    throw new Error(this + "cannot be bound its not callable");
}
 context.fn = this;
 return function (...newArgs){                                   
    return context.fn(...args, ...newArgs);
 };
};

///////////////////////  Example
let userDetails = {
    name:"Mohit",
    age: 30
}

const userdetails = {
    userss : function(city){
    console.log( `My name is ${this.name} & age is ${this.age} city is ${city}`)
}}

// const bindedFunction = userdetails.userss.myBind(userDetails,"BLR");
const bindedFunction = userdetails.userss.myBind(userDetails);

bindedFunction("BLR");