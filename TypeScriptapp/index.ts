let message: string = 'hellow world ssss';
let employeename: string = 'ramesh';
let salary:number = 20000;
// console.log(message);
showemployee();
function showemployee() {
    console.log('employeename:-'+employeename);
    console.log('employee salary:-'+salary);
}
addition();
showmessage();
showGlobalmessage(message);
function addition() {
let a = 10;
let b = 20; 
console.log(a+b);    
}
function showGlobalmessage(message) {
 console.log(message);
}
function showmessage() {
    console.log('this is show message function');
}