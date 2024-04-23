const fetch = require('node-fetch')

const url = 'http://testing-api.com/get-user';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


