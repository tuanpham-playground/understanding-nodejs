const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async() => {
    try {
        const response = await axios.get(url);
        console.log(response.data[0]);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    } catch (error) {
        console.log(error);
    }
}

fetchData();


// Free online API
// https://jsonplaceholder.typicode.com/
