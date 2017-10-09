/*jslint es6 */

let pseudonymReg = /#/;
let phoneReg = /\d{3}-\d{3}-\d{3}/;
let emailReg = /@gmail.com$/;
let passwordReg = /^[0-9a-zA-Z]*$/;

const buttonElem = document.getElementById("join");
const pseudonymElem = document.getElementById("pseudonym");
const ageElem = document.getElementById("age");
const telElem = document.getElementById("tel");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");
const repeatElem = document.getElementById("repeat");

buttonElem.onclick = function (e) {
    "use strict";
    e.preventDefault();
    let pseudonym = pseudonymElem.value;
    let age = ageElem.value;
    let tel = telElem.value;
    let email = emailElem.value;
    let password = passwordElem.value;
    let repeat = repeatElem.value;

    let pseudonymTest;
    let ageTest;
    let telTest;
    let emailTest;
    let passwordTest;
    let repeatTest;

    if (pseudonymReg.test(pseudonym)) {
        pseudonymElem.style.borderColor = "hsl(73, 77%, 8%)";
        pseudonymTest = true;
    } else {
        pseudonymElem.style.borderColor = "red";
        pseudonymTest = false;
    }

    if (age > 20 && age <= 99) {
        ageElem.style.borderColor = "hsl(73, 77%, 8%)";
        ageTest = true;
    } else {
        ageElem.style.borderColor = "red";
        ageTest = false;
    }

    if (phoneReg.test(tel)) {
        telElem.style.borderColor = "hsl(73, 77%, 8%)";
        telTest = true;
    } else {
        telElem.style.borderColor = "red";
        telTest = false;
    }

    if (emailReg.test(email)) {
        emailElem.style.borderColor = "hsl(73, 77%, 8%)";
        emailTest = true;
    } else {
        emailElem.style.borderColor = "red";
        emailTest = false;
    }

    if (passwordReg.test(password) && password.length > 6) {
        passwordElem.style.borderColor = "hsl(73, 77%, 8%)";
        passwordTest = true;
    } else {
        passwordElem.style.borderColor = "red";
        passwordTest = false;
    }

    if (passwordReg.test(repeat) && password === repeat && repeat.length > 6) {
        repeatElem.style.borderColor = "hsl(73, 77%, 8%)";
        repeatTest = true;
    } else {
        repeatElem.style.borderColor = "red";
        repeatTest = false;
    }

    if (pseudonymTest && ageTest && telTest && emailTest && passwordTest && repeatTest) {
        alert("Zostałeś masonem, witaj w naszej loży.");
    }
};

