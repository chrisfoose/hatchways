/*const hatchways(url) = {
    method: 'GET',
    url : 'https://api.hatchways.io/assessment/students'
}; */

const xhr = new XMLHttpRequest();
url = 'https://api.hatchways.io/assessment/students';

//XHR stuff
xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();

//making async function to implement API
try {
async function getData() {
    const response = await fetch('url', {
        method: 'GET',
        url : 'https://api.hatchways.io/assessment/students'
    })
    if (response.ok) {
        const jsonResponse = await response.json();
            renderResponse(jsonResponse);}
    }
} catch(error) {
    console.log(error);
};