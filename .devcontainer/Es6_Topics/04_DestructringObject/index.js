// Normal to access a object data
const user = {
  name: "Mohit",
  age: 28,
  city: "Bangalore"
};

// Normal way
const userName = user.name;
const userAge = user.age;
const userCity = user.city;

console.log(userName, userAge, userCity);


// Destructring way
const userValue = {
    name: "mohit",
    age: 22,
    city: "Dubai",
    Location: {cite:"blr", room:"203"}
}

const { name, age, city, Location:{cite,room} } = userValue;
console.log("age is :-", age, room, cite);


//Problem 1:-
const userInfo = { username: "Mohit", userage: 28, usercity: "Bangalore" };
const { username, usercity } = userInfo;
console.log(usercity);

//Problem 2:-
const settings = { theme: "dark"};
const { theme, language = "English" } = settings;
console.log(`Theme: ${theme} language: ${language}`)

//Problem 3:-
const employee = {
  id: 101,
  details: {
    dept: "IT",
    location: "Dubai"
  }
};

const { details: { dept, location } } = employee;
console.log(dept, location);

//Problem 4  Destructuring in React Props
function profile(name, role) {
    
}

{/* <Profile name="ram" role={role} /> */}


// Problem 5: API Response Handling
const response = {
  status: "success",
  data: {
    product: "Laptop",
    price: 45000,
    rating: 4.5
  }
};

const { data: { product, price } } = response;
console.log(product, price);