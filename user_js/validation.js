//Function to validate email id
function validateEmail(){
    //Select the input element with id "email"
    var email = document.getElementById("email");
    //Code to perform validations on the email value entered by user
    if (email.value.indexOf("@") !== -1 && email.value.lastIndexOf(".") > email.value.indexOf("@")){
        //Check if the last "." symbol is not too close to the end of the email
        if (email.value.lastIndexOf(".") < email.value.length - 2) {
            document.getElementById("emailValidity").innerHTML = "Valid email address!";
            document.getElementById("emailValidity").style.color="green";
            email.className ="form-control valid";
        }
        else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
        }
    }
    else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
    }
}

//Function to validate username mentioned in task 1.i
function validateUserName(){
    //Select the input element with id "username"
    var username = document.getElementById("uname");
    //Check if username provided is "great"
    if(username == "great") {
        
    else{
        document.getElementById("uname").innerHTML = "Invalid Username!";
        document.getElementById("uname").style.color="red";
        uname.className ="form-control invalid";
        }
    else{
        //Error
    }

    //COMPLETE THE REST OF CODE FOR TASK 1.i
}

//Function to validate password mentioned in task 1.i
function validatePwd(){
    //Select the input element with id "pwd"
    var pwd = document.getElementById("pwd");
    //Select the input element with id "pwd-repeat"
    var repeatPwd = document.getElementById("pwd-repeat");
    //Code to perform validations on the password and repeat password values entered by user
    var pwdValidityPara = document.getElementById("pwdValidity");
    //Check if both the passwords provided are "learn"
    if(pwd && pword-repeat == "learn"){
        (pwd.value {
            document.getElementById("pwdValidity").innerHTML = "Password Match!";
            document.getElementById("pwdValidity").style.color="green";
            pwd.className ="form-control valid";        
            }
        else{
            document.getElementById("pwdValidity").innerHTML = "Invalid Username!";
            document.getElementById("pwdValidity").style.color="red";
            pwd.className ="form-control invalid";
        }
    
    //COMPLETE THE REST OF CODE FOR TASK 1.i
}