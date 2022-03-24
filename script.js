/*const hatchways(url) = {
    method: 'GET',
    url : 'https://api.hatchways.io/assessment/students'
}; */

async function getData() {
    const response = await fetch('url', {
        method: 'GET',
        url : 'https://api.hatchways.io/assessment/students'
    })
};
