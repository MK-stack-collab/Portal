const studentName = document.getElementById("studentName");
const course = document.getElementById("course");
const score = document.getElementById("score");
const status = document.getElementById("status");

let currentStudent = JSON.parse(localStorage.getItem("currentStudent"));

if (currentStudent) {

    studentName.textContent = currentStudent.name;
    course.textContent = currentStudent.course;
    score.textContent = currentStudent.score;
    status.textContent = currentStudent.status;
    
    if(currentStudent.status === "Admitted") {
        status.style.color = "green";
    } else if (currentStudent.status === "Rejected") {
        status.style.color = "red";
    } else {
        status.style.color = "orange";
    }
} else {
    alert("No active session found. Please log in.");
    window.location.href = "student-login.html";
}