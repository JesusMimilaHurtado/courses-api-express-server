"use strict"

const dropdown = document.getElementById('dropdown')  
const info = document.getElementById('text')
const fragment = document.createDocumentFragment()

function GrabCourseDataFromAPI() {
fetch('/data/courses.json')
.then((response) => response.json()
.then((data) => generateDropdown(data)))}

function generateDropdown(_data){

    _data.forEach(course => {
        const option = new Option(course.courseName,course.courseName)
        fragment.appendChild(option);
    });
        dropdown.appendChild(fragment);

}

GrabCourseDataFromAPI()
