"use strict"

const deleteButton = document.getElementById('deleteButton');

const courseInfo = document.getElementById('courseInfo');

const department = document.getElementById('dept');
const courseNum = document.getElementById('courseNum');
const courseName = document.getElementById('courseName');
const instructor = document.getElementById('instr');
const startDate = document.getElementById('startDate');
const numDays = document.getElementById('numDays');

document.addEventListener('DOMContentLoaded', () => {
    
    postButton.addEventListener('click', getData)

})

function getData(){

    const urlencoded = new URLSearchParams();
    urlencoded.append("dept", department.value);
    urlencoded.append("courseNum", courseNum.value);
    urlencoded.append("courseName", courseName.value);
    urlencoded.append("instructor", instructor.value);
    urlencoded.append("startDate", startDate.value);
    urlencoded.append("numDays", numDays.value);

    const requestOptions = {
        method: "POST",
        body: urlencoded,
        redirect: "follow"
    };

    fetch('http://localhost:8090/api/courses', requestOptions)
    .then(response => response.json())
    .then(data => { `
            Department: ${data.dept}
            Course Number: ${data.courseNum}
            Course Name: ${data.courseName}
            Instructor: ${data.instructor}
            Start Date: ${data.startDate}
            Number of Days: ${data.numDays}`
    })
    .catch((error) => console.error(error));
}