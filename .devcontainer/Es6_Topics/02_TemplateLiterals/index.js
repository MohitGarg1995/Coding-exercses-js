function buildURL(baseURL, endpoint, params) {
    const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
    return `${baseURL}/${endpoint}?${queryString}`;
}

const baseURL = "https://api.example.com";
const endpoint = "products";
const params = { page: 2, limit: 10, search: "laptop" };

// console.log(`${baseURL}/${endpoint}${params}`)
console.log("This is the complete URL:-",buildURL(baseURL, endpoint, params));


function buildURL(para1, para2, para3) {
  const mergeThirdPara = Object.entries(para3)
}
// only for testing purpose