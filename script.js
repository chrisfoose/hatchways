/*const hatchways(url) = {
    method: 'GET',
    url : 'https://api.hatchways.io/assessment/students'
}; */
url = 'https://api.hatchways.io/assessment/students';
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

