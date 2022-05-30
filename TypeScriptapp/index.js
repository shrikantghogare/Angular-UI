var message = 'hellow world ssss';
var employeename = 'ramesh';
var salary = 20000;
// console.log(message);
showemployee();
function showemployee() {
    console.log('employeename:-' + employeename);
    console.log('employee salary:-' + salary);
}
addition();
showmessage();
showGlobalmessage(message);
function addition() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}
function showGlobalmessage(message) {
    console.log(message);
}
function showmessage() {
    console.log('this is show message function');
}
