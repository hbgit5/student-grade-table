// Step 1: Add data to students array

var students = [
    //{fname: "Joe", lname: "Schmoe", grade: 55}
];

var fname_field, lname_field, grade_field, add_btn;

function init() {
    // Assign references to various elements
    fname_field = $('#fname');
    lname_field = $('#lname');
    grade_field = $('#grade');
    add_btn = $('#btn-add-student');
    
    // Create click event for add student button
    add_btn.click(addStudent);
}

function addStudent() {
    // Create object with the three values
    var student = {
        fname: fname_field.val(),
        lname: lname_field.val(),
        grade: parseFloat(grade_field.val())
    }
    
    // Add student object into students array
    students.push(student);
    
    // Clear out fields
    fname_field.val('');
    lname_field.val('');
    grade_field.val('');
    
    console.log(students);
}

$(document).ready(init);