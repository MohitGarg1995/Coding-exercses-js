// Dynamic Class Name Builder
const isActive = true;
const isError = false;

const className = `btn ${isActive ? "btn-active" : ""} ${isError ? "btn-error" : ""}`;

console.log(className);


// Inline Style Generator
const theme = { color: "blue", padding: 10 };

const styleString = `color: ${theme.color}; padding: ${theme.padding}px;`;

console.log(styleString);


// Component Debug Logger
const componentName = "Navbar";
const timestamp = Date.now();

console.log(`Component ${componentName} mounted at ${timestamp}`);

// Dynamic Greeting Component
function Greeting(props) {
  return <h2>{`Hello ${props.name}, you have ${props.notifications} new messages.`}</h2>;
}
// Usage
<Greeting name="Mohit" notifications={5} />



// API Endpoint with User ID
const BASE_URL = "https://api.example.com";
const userId = 101;

const endpoint = `${BASE_URL}/users/${userId}/profile`;

console.log(endpoint);
