"use strict";
exports.__esModule = true;
var userdetails = /** @class */ (function () {
    function userdetails(name, age, mnum) {
        this.username = name;
        this.userage = age;
        this.usermnum = mnum;
    }
    return userdetails;
}());
function login() {
    var str;
    var num;
    num = 1001;
    str = 'c';
    alert("Your Generated userid:" + str + num);
    num++;
    var maindiv = document.getElementById('maindiv');
    var confirm = document.getElementById('confirm');
    maindiv.style.display = "none";
    confirm.style.display = "block";
}
function coursedetails() {
    alert("The userid is accessble to purshace the course!");
    var confirm = document.getElementById('confirm');
    var coursedetails = document.getElementById('coursedetails');
    confirm.style.display = "none";
    coursedetails.style.display = "block";
}
function availablecourses() {
    var coursedetails = document.getElementById('coursedetails');
    var availablecourses = document.getElementById('availablecourses');
    coursedetails.style.display = "none";
    availablecourses.style.display = "block";
}
function enrollementlist() {
    var coursedetails = document.getElementById('coursedetails');
    var enrollementlist = document.getElementById('enrollementlist');
    coursedetails.style.display = "none";
    enrollementlist.style.display = "block";
}
function course() {
    // let courses=document.getElementById("selectbox");
    //  alert(selectbox.value);
    alert("If you want to select another course?choose available course");
    var maindiv = document.getElementById('maindiv');
    maindiv.style.display = "none";
    var coursedetails = document.getElementById('coursedetails');
    coursedetails.style.display = "block";
    var availablecourses = document.getElementById('availablecourses');
    availablecourses.style.display = "none";
}
