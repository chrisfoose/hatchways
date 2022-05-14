console.log('Connected!');
//implement API

const mainContainer = document.getElementById("pageData");

//my reference only
fetch('https://api.hatchways.io/assessment/students')
  .then(response => response.json())
  .then(json => console.log(json));

const pageData = async (event) => {
  try {

    const url = 'https://api.hatchways.io/assessment/students'
    const response = await fetch(url);
      if (response.ok) {
        let jsonResponse = await response.json();
        const students = jsonResponse.students;
        return students;

      }
  } catch (error) {
    console.log(error);
  }
}

const avgGrades = (grades) => {
  let avg = 0;
    //for loop to get average
        for (let i = 0; i < grades.length; i++) {
          avg += Number(grades[i]);
        }
        avg = avg / grades.length;
        return avg;
}

const createDiv = (student) => {
  const gradeAverage = avgGrades(student.grades);
  return `<div class="student">
    
    <h2 class='name'>${student.firstName} ${student.lastName}</h2>
    <p><img src=${student.pic}></p>
    <p>Email: ${student.email} </p>
    <p>Company: ${student.company} </p>
    <p>Skill: ${student.skill} </p>
    
    <p>Average:  ${gradeAverage} </p>
    `
};


pageData().then(studentData => {
  const HTMLArray = [];
  for (let i = 0; i < studentData.length; i++) {
    const student = studentData[i];
    HTMLArray.push(createDiv(student))
  }
  mainContainer.innerHTML = HTMLArray.join('\n');
});

// function filterList() {
//   let input = document.getElementById('input');
//   const filterCase = input.value.toLowerCase();
//   const name = document.getElementById('name');
//   const h2 = getElementByTagName('h2');

//   for (i = 0; i < input.length; i++) {
//     txt = name[i].getElementById('name')[0];
//     if (txt.toLowerCase().indexOf(filterCase) > -1) {
//       name[i].style.display = ""; 
//     } else {
//       name[i].style.display = "none";
//     }
//     }
//   };

//   filterList();

//Putting in code for list.js
var options = {
  valueNames: [ 'name']
};

var studentList = new List('studentList');
studentList.add(
  studentData
);