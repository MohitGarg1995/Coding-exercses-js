// Deeply Nested API Response
// Advance Problem 1 --------------------------------------------------------
// Handling complex API responses (common in fetch/axios).

const response = {
  status: "ok",
  data: {
    user: {
      id: 101,
      profile: {
        username: "Mohit",
        contact: { email: "mohit@example.com", phone: "9999999999" },
      },
    },
  },
};

const {
  data: {
    user: {
      profile: {
        username,
        contact: { email, phone },
      },
    },
  },
} = response;
console.log(
  "Extracted value from API",
  `${username} email :- ${email},phone :- ${phone}`
);


// Advance Problem 2  --------------------------------------------------------------
// Array of Objects
// Rendering lists with .map() in React.

const products = [
  { id: 1, title: "Laptop", price: 45000 },
  { id: 2, title: "Phone", price: 25000 },
  { id: 3, title: "sim", price: 200 },
];

const productsList = products
  .map((key) => {
    // console.log("key & value pair", key.price, key.title);
    // `${key.title} ${value.title}`
    console.log(`Product: ${key.title}, Price: ${key.price}`);
  })
console.log(productsList);
 
// Another way to solve this one. bY using For Of loop
// for (const { title, price } of products) {
//   console.log(`Product: ${title}, Price: ${price}`);
// }




// Advance problem 3   --------------------------------------------------------
// Cleaner function signatures (used in hooks/components)
// React components often use destructuring in props:
// function Profile({ name, age, city }) {
//   return <h2>{`Name: ${name}, Age: ${age}, City: ${city}`}</h2>;
// }
// Usage
{/* <Profile name="Riya" age={25} city="Delhi" /> //react code */}


function showUser({name, age, city}) {
    // use destructuring in parameters
    return `Name:${name} Age:${age} City:${city}`
    
}
console.log (showUser({ name: "Riya", age: 25, city: "Delhi" }));


// Advance problem 4   --------------------------------------------------------
// Default props with destructuring (modern React pattern).
function buttonProps({label="Click me", color="Blue"}) {
    return `$Label:${label} Color: ${color}`;
}
console.log(buttonProps({label:"Submit", color:"Green"}));