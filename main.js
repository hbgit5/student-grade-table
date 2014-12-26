
// Step 1: Add data to students array
// Step 2: Add TR row to table
// Step 3: Everything else
var students = [
    //{fname: "Joe", lname: "Schmoe", grade: 55}
];

var high_index = 0;
var low_index = 0;

var fname_field, lname_field, grade_field, add_btn, del_btn;

function init() {
    // Assign references to various elements
    firstname_field = $('#fname');
    lastname_field = $('#lname');
    grade_field = $('#grade');
    add_btn = $('#btn-add-student');
    
    // Create click event for add student button
    add_btn.click(addStudent);
    
    $('tbody').on('click', '.btn-del-student', removeStudent);
}

function removeStudent() {
    var row_index = $(this).parent().parent().index();
    $(this).parent().parent().remove();
    
    students.splice(row_index, 1);
    
    updateAverage();
    compareGrades();
}

function addStudent() {
    // Create object with the three values
    var student = {
        fname: firstname_field.val(),
        lname: lastname_field.val(),
        grade: parseFloat(grade_field.val())
    }
    
    // Add the physical rows to our table
    addRow(student);
    
    // Add student object into students array
    students.push(student);
    console.log(students);
    
    // Clear out fields
    firstname_field.val('');
    lastname_field.val('');
    grade_field.val('');
    
    updateAverage();
    compareGrades();
}

function addRow(student) {
    var tr = $('<tr>');
    var td_name = $('<td>').html(student.fname + ' ' + student.lname);
    var td_grade = $('<td>').html(student.grade);
    
    var button = $('<button>').addClass('btn btn-danger btn-del-student').html('X');
    var td_button = $('<td>').append(button);
    
    tr.append(td_name).append(td_grade).append(td_button);
    
    $('#grades-table tbody').append(tr);
  
}
function calculateAverage() {
    var sum = 0;
    for(var i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    
    var avg = sum / students.length;
    return avg;
    
}
function updateAverage() {
    $('#result').html(calculateAverage());
}

function compareGrades() {
    var high = 0;
    var low = 1000;
    var rows = $('tbody tr');
    
    $(rows[high_index]).removeClass('bg-info');
    $(rows[low_index]).removeClass('bg-danger');
    
    for(var i = 0; i < students.length; i++) {
        if(students[i].grade < low) {
            low = students[i].grade;
            low_index = i;
        }
        
        if(students[i].grade > high) {
            high = students[i].grade;
            high_index = i;
        }
    }
    
    $(rows[high_index]).addClass('bg-info');
    if(students.length > 1) {
        $(rows[low_index]).addClass('bg-danger');
    }
}


$(document).ready(init);