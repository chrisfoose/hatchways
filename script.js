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
  

  //get the student data
  const students = pageData.students;

  const div = document.createElement("div");
  div.innerHTML = 'Name: ' + pageData.firstName + ' ' + pageData.lastName;
  // div.appendChild(pageData);
  } 
  async function displayData(pageData) {
      const students = pageData.students[0];
      const studentList = document.getElementById('students');
      students.appendChild(studentList);
  };