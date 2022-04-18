console.log('Connected!');
//implement API

fetch('https://api.hatchways.io/assessment/students')
  .then(response => response.json())
  .then(json => console.log(json));

  const mainContainer = document.getElementById("data");
  for (let i = 0; i < data.length; i++ ) {
      //appending each entry onto the page
  }

  const div = document.createElement("div");
  div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
  mainContainer.appendChild(div);