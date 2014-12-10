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
    
    // Add the physical rows to our table
    addRow(student);
    
    // Add student object into students array
    students.push(student);
    
    // Clear out fields
    fname_field.val('');
    lname_field.val('');
    grade_field.val('');
    
    console.log(students);
}

function addRow(student) {
    var tr = $('<tr>');
    var td_name = $('<td>').html(student.fname + ' ' + student.lname);
    var td_grade = $('<td>').html(student.grade);
    
    var button = $('<button>').addClass('btn btn-danger').html('X');
    var td_button = $('<td>').append(button);
    
    tr.append(td_name).append(td_grade).append(td_button);
    
    $('#grades-table tbody').append(tr);
}

$(document).ready(init);