// problem 1: Write a function that takes any number of numeric arguments
// and returns their average using the rest operator.    
function numberargs(...numb) { 
    const sum = numb.reduce((acc, b) => acc + b, 0);
    const avg = sum / numb.length

    console.log("average:-",avg);

}

numberargs(10, 20, 30, 40);

// problem 2: Write a function that takes a variable number of string arguments
// and concatenates them into a single string separated by spaces using the rest operator.
function stringargs(...str) {
    const concatenatedString = str.join(' ');
    console.log("Concatenated String:-", concatenatedString);
}

//problem 3: Write a function that takes a variable number of arguments of any type
// and returns an array containing only the string arguments using the rest operator.
function stringargs(...str) {
    const stringArray = str.filter(item => typeof item === 'string');
    console.log("String Array:-", stringArray);
}   

stringargs("Hello", 42, "World", true, "JavaScript", null);

stringargs("Hello", "World", "from", "Rest", "Operator");           

//problem 4: Write a function that takes a variable number of numeric arguments
// and returns the maximum value among them using the rest operator.
function maxNumber(...numb) {
    const maxValue = Math.max(...numb);
    console.log("Maximum Value:-", maxValue);
}   
maxNumber(10, 20, 5, 40, 15);

//problem 5: Write a function that takes a variable number of arguments
// and returns an object with two properties: 'numbers' (an array of numeric arguments)
// and 'strings' (an array of string arguments) using the rest operator.        
function separateArgs(...args) {
    const result = {
        numbers: args.filter(item => typeof item === 'number'),
        strings: args.filter(item => typeof item === 'string')              
    };
    console.log("Separated Arguments:-", result);
}

separateArgs(10, "Hello", 20, "World", true, 30, "JavaScript");
separateArgs(1, 2, 3, "one", "two", "three");


// problem 6: 
const user = { name: "Mohit", age: 28 };
const newObject = {...user, city:"Dubai"}
console.log(newObject);
console.log(typeof newObject);

// problem 7:
function cards({title, ...rest}) {
    return <div {...rest}>{title}</div>
}

<cards title="Cards name" className="cards" style={{background:"red"}} />

