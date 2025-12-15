// Mock Interview Questions
// 1. Write a function that takes two numbers and returns a string using template literals:

function takesArgs(a, b) {
    return `${a} ${b}`;
}
console.log(takesArgs(4, 7));

// 2. Template Literals — React Class Names
// In React, you have a boolean isActive. 👉 Build a className string using template literals so that:
// If isActive is true → "btn btn-active"
// If false → "btn"


// 3. Rest operator in destructuring (collect remaining properties)
const user = { id: 101, name: "Mohit", age: 28, city: "Dubai", role: "Developer" };
const { id, name, ...rest } = user;
console.log("Rest operatore", `${name}`, rest);

// AI answers:
// const user = { id: 101, name: "Mohit", age: 28, city: "Dubai", role: "Developer" };
// const { name, role, ...rest } = user;
// console.log(`Name: ${name}, Role: ${role}, Rest: ${JSON.stringify(rest)}`);


// 5. Dynamic Property Names
const key = "email";
const userInf = { name: "Riya", email: "riya@example.com" };
const { [key]: email } = userInf;

console.log(`Email: ${email}`);


// 4. Array + Object Destructuring Together
const users = [
  { id: 1, names: "Mohit", city: "Dubai" },
  { id: 2, names: "Riya", city: "Delhi" }
];

for (const { names, city} of users) {
    console.log(`UserName:${names}, City: ${city}`);
}
// const [ , { name: secondUserName, city: secondUserCity } ] = users;
// console.log("Second User Details:-", `${secondUserName} from ${secondUserCity}`);

// const [ { names, city } ] = users;
// console.log("Second User Details:-", `${names} from ${city}`);

// const userLists = users.map(({ id, names, city} ) => {
//   console.log(`User ID: ${id}, Name: ${names}, City: ${city}`);
// }
// )


// 5. React Props with Defaults + Rest
function Card({ title = "Untitled", color = "gray", ...extras }) {
  return (
    <div style={{ backgroundColor: color }}>
      {`Title: ${title}, Color: ${color}, Extras: ${JSON.stringify(extras)}`}
    </div>
  );
}

// Usage
<Card title="Profile" color="blue" border="solid" shadow="md" />


// 6. API Response Transformation
const response = {
  status: "success",
  data: {
    products: [
      { id: 1, title: "Laptop", price: 45000 },
      { id: 2, title: "Phone", price: 25000 }
    ]
  }
};

const { data: { products } } = response;

for (const { title, price } of products) {
  console.log(`Product ${title} costs ${price}`);
}



