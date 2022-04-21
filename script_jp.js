// get pageData element
const mainContainer = document.getElementById("pageData");
// define async function
const pageData = async () => {
    try {
      const url = 'https://api.hatchways.io/assessment/students'
      // wait for response from server
      const response = await fetch(url);
        if (response.ok) {
          // convert response to json
          const jsonResponse = await response.json();
          // get students object from jsonResponse
          const students = jsonResponse.students;
          // return students object wrapped inside of a promise.
          return students;
        }
    } catch (error) {
      console.log(error);
    }
  }

  // wait for pageData to return a promise, then get studentData
pageData().then(studentData => { 
  // create array for html elements
  const HTMLArray = []
  // for each student in studentData array
   for (let i = 0; i < studentData.length; i++ ) {
      //get student
      const student = studentData[i];
      // push element returned by createDiv function into the array
      HTMLArray.push(createDiv(student))
   }
   // convert the array to a string with a newline ('\n') separating
   // each element and then set the innerHTML of the main 
   // container to the new string.
   mainContainer.innerHTML = HTMLArray.join('\n');
})

const createDiv = (student) => {
    //return the formatted HTML for each student.
    return `<div>
    <p>Name: ${student.firstName} ${student.lastName}</p>
    <p>Average Grades: ${avg} ${student.lastName}</p>
    <p></p>
    </div>`
}

// this can be used if not creating alot of elements to add to a page

// pageData().then(studentData => { 
//    console.log(studentData)
//     for (let i = 0; i < studentData.length; i++ ) {
//        //get student
//        const student = studentData[i];
//        //appending each entry onto the page
//        const div = document.createElement("div");
//        div.innerHTML = 'Name: ' + student.firstName + ' '+ student.lastName;
//        mainContainer.appendChild(div);
//     }
// })