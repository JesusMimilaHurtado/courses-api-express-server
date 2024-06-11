"use strict"

const dropdown = document.getElementById('dropdown')  
const displayInfo = document.getElementById('text')
const infoButton = document.getElementById('showInfo')
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    GrabCourseDataFromAPI()
    infoButton.addEventListener('click', displayData)

})



function GrabCourseDataFromAPI() {
fetch('/data/courses.json')
.then((response) => response.json()
.then((data) => generateDropdown(data)))}


function generateDropdown(_data){

    _data.forEach(course => {
        const option = new Option(course.courseName,course.id)
        fragment.appendChild(option);
    });
        dropdown.appendChild(fragment);

}

function displayData(){

    const endpoint = dropdown.value

    fetch('http://localhost:8090/api/courses/' + endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const info = `
            <strong> Id </strong>: ${data.id}
            <strong> Department </strong>: ${data.dept}
            <strong> Course Number </strong>: ${data.courseNum}
            <strong> Course Name </strong>: ${data.courseName}
            <strong> Instructor </strong>: ${data.instructor}
            <strong> Start Date </strong>: ${data.startDate}
            <strong> Number of Days </strong>:&nbsp${data.numDays}`
        displayInfo.innerHTML = info
    })
    .catch((error) => console.error(error));

}