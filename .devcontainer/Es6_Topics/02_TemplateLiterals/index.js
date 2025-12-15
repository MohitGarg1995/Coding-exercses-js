// function buildURL(baseURL, endpoint, params) {
//     const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
//     return `${baseURL}/${endpoint}?${queryString}`;
// }

// const baseURL = "https://api.example.com";
// const endpoint = "products";
// const params = { page: 2, limit: 10, search: "laptop" };

// // console.log(`${baseURL}/${endpoint}${params}`)
// console.log("This is the complete URL:-",buildURL(baseURL, endpoint, params));


// function buildURL(para1, para2, para3) {
//   const mergeThirdPara = Object.entries(para3)
// }


// Explanation:--
// Dynamic API URL Builder
// Create a function that takes:

// baseURL
// endpoint
// an object of query parameters

// And returns a complete API URL using template literals.

function dynamicURL(base, endpoint, queryparam) {
  // convert third para to an array so i can map over it
  const convertQuery = Object.entries(queryparam).map(([key, value]) => `${key}=${value}`).join("&");
  return `${base}/${endpoint}?${convertQuery}`
}

const baseURL = "https://api.example.com";
const endpoint = "products";
const params = { page: 2, limit: 10, search: "laptop" };

console.log("The Dynamic url is:-", dynamicURL(baseURL, endpoint, params));