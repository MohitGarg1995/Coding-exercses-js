// Pollyfills for apply method()
// With the apply() method, you can write a method that can be used on different objects.

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.  [2,8,99,3];

Function.prototype.myApply = function(context = {}, args = []){
 if (typeof this !=="function"){
    throw new Error(this + "it's not callable");
 }
if(!Array.isArray(args)){
    throw new TypeError("create a array list")
}

 context.fn = this;
 context.fn(...args)

}

// Example///////////

let userDetails = {
    name:"Mohit",
    age: 30
}

const userdetails = {
    userss : function(city){
    console.log( `My name is ${this.name} & age is ${this.age} city is ${city}`)
}}

userdetails.userss.myApply(userDetails,["BOM"])



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
