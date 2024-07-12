// Pollyfills for Call

// call() method of Function instances calls this function with a given this value and arguments provided individually.
// With the call() method, you can write a method that can be used on different objects.
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// VIDEO REFERENCE ROADSIDE CODER/////////////

let userDetails = {
    name:"Mohit",
    age: 30
}

const userdetails = {
    userss : function(city){
    console.log( `My name is ${this.name} & age is ${this.age} city is ${city}`)
}}

// userdetails.userss.call(userDetails,"BOM")

 
// Now Pollyfills for the call method.

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "its not callable ")
    }
    context.fn = this;
    context.fn(...args)
};

userdetails.userss.myCall(userDetails,"BOM")






// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call