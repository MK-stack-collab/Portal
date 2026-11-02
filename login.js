const loginBtn = document.getElementById("loginbtn");
const emailBox = document.getElementById("email");
const passwordBox = document.getElementById("password"); 
const studentemail = document.getElementById ("email")


function login(event) {
    event.preventDefault();

    let enteredEmail = emailBox.value;
    let enteredPassword = passwordBox.value;

    let enteredEmail2 = studentemail.value
   
    if (enteredEmail === "admin@gmail.com" && enteredPassword === "1234") {
        window.location.href = "admin.html";
    } 

    else if (enteredEmail2 === "student@gmail.com" && enteredPassword === "1234") {
        
        let savedStudents = JSON.parse(localStorage.getItem("savesStudents")) || [];

        if (savedStudents.length > 0) {

            let currentStudent = savedStudents[savedStudents.length - 1];
            localStorage.setItem("currentStudent", JSON.stringify(currentStudent));
            window.location.href = "student.html";
        } else {
            alert("No student found! Ask the admin to book you first.");
        }
    }
    else {
        alert("Wrong Email or Password! Check your details.");
    }
}

if (loginBtn !== null) {
    loginBtn.addEventListener("click", login);
}