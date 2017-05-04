$(document).ready(function(){
var students=["Julio", "Jeanette", "Ashley", "Brittney"];
var teachers=["Justin", "Zach", "Aaron", "Julia", "Alyxe"];

$("studentButton").click(function()) {
    var randomstudents = Math.floor(Math.random()*students.length);
   $("#studentDisplay").html(students[randomstudents]);
});
$("teacherButton").click(function()) {
    var randomteachers = Math.floor(Math.random()*teachers.length);
   $("#teacherDisplay").html(teachers[randomteachers]);
});
});