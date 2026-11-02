const studentname = document.getElementById("studentname");
const studentcourse = document.getElementById("studentcourse");

const bookbtn = document.getElementById("bookbtn");
const studenttable = document.getElementById ("studenttable");

const totalStudents = document.getElementById ("totalStudents")
const admittedstudents = document.getElementById ("admitted")
const pendingstudents = document.getElementById ("pending")
const rejectedstudents = document.getElementById ("rejected")



let students = [];

function bookstudent (event) {
    event.preventDefault();

    let name = studentname.value;
    let course = studentcourse.value;

       if(studentname.value === "" ||
        studentcourse.value === "" 
    ) {
        alert("Please fill in the fields")
        return
    }


    let student = {
        name : name,
        course : course,
        score :66.15,
        status : "Pending"
    }
    students.push(student)

    localStorage.setItem("savesStudents", JSON.stringify(students));

    studentname.value = ""
    studentcourse.value = ""

    
    displayStudents ()
    updateStats()

}


bookbtn.addEventListener ("click" , bookstudent )


function displayStudents () {

    studenttable.innerHTML = "";

    students.forEach(function (student,index) {
        studenttable.innerHTML += `
        <tr>
        
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>
        <span class ="${student.status.toLowerCase()}">
        ${student.status}
        </span>
        </td>
        
        <td>
        
        <button onclick="admitStudent(${index})"
style="background-color:green;">
    Admit
</button>
        <button onclick = "rejectStudent(${index})"> Reject </button>
        </td>
        
        </tr>`

    }) 
}



function updateStats () {
    totalStudents.textContent=Number(students.length)

    admittedstudents.textContent = 
    students.filter(student => student.status === "Admitted").length;

     pendingstudents.textContent =
        students.filter(student => student.status === "Pending").length;

    rejectedstudents.textContent =
        students.filter(student => student.status === "Rejected").length;

}
function admitStudent (index) {
    students[index].status = "Admitted"

    localStorage.setItem("savesStudents", JSON.stringify(students));
    localStorage.setItem("currentStudent", JSON.stringify(students[index]));

    displayStudents()

    updateStats ()
}

function rejectStudent(index){

    students[index].status = "Rejected";

    localStorage.setItem("savesStudents", JSON.stringify(students));
    localStorage.setItem("currentStudent", JSON.stringify(students[index]));

    displayStudents();

    updateStats();

}

