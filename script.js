console.log('Connected!');
//implement API

fetch('https://api.hatchways.io/assessment/students')
  .then(response => response.json())
  .then(json => console.log(json));

const pageData = async (event) => {
  try {

    const url = 'https://api.hatchways.io/assessment/students'
    const response = await fetch(url);
      if (response.ok) {
        let jsonResponse = await response.json();

      }
  } catch (error) {
    console.log(error);
  }
}

  const mainContainer = document.getElementById("PageData");
  for (let i = 0; i < pageData.length; i++ ) {
      //appending each entry onto the page
  }

  const div = document.createElement("div");
  div.innerHTML = 'Name: ' + pageData[i].firstName + ' ' + pageData[i].lastName;
  mainContainer.appendChild(div);

  function displayData(data) {
      const students = data.students[0];
      const studentDiv = document.getElementById('students');
  };