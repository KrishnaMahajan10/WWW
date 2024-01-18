function validateFName(){
    let fName = document.getElementById("fname").value;
    if(fName.length > 0){
        document.getElementById("fnameerr").innerHTML = ""
        return true;
    }
    document.getElementById("fnameerr").innerHTML = "enter name";
}

function validateEmail(){
    let email = document.getElementById("eml").value;
    if(email.length > 0){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            document.getElementById("emlerr").innerHTML = ""
            return true;
        }
        document.getElementById("emlerr").innerHTML = "enter email in pattern"
        return false;
    }
    document.getElementById("emlerr").innerHTML = "enter email"
}

function validatePass(){
    let password = document.getElementById("pass").value;
    if(password.length > 0){
        if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)){
            document.getElementById("passerr").innerHTML = ""
            return true;
        } else{
            document.getElementById("passerr").innerHTML = "enter password in pattern"  
            return false; 
        }
    }
    document.getElementById("passerr").innerHTML = "enter password"   
}

function validateVPass(){
    let vPassword = document.getElementById("vpass").value;
    let password = document.getElementById("pass").value;
    
    if(vPassword.length > 0){
        if(vPassword === password){
            document.getElementById("vpasserr").innerHTML = ""
            return true;
        }
        document.getElementById("vpasserr").innerHTML = "same as password"
        return false;
    }
    document.getElementById("vpasserr").innerHTML = "enter verify password"
}

function validateAge(){
    let age = document.getElementById("age").value;
    if(age.length > 0){
        document.getElementById("ageerr").innerHTML = ""
        return true;
    }
    document.getElementById("ageerr").innerHTML = "Enter Age"
}


function redirect(){
    document.location.href = "http://127.0.0.1:5500/display.html";
}


function verify(){
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let gender = document.getElementsByName("gen").value;
    let email = document.getElementById("eml").value;
    let password = document.getElementById("pass").value;
    let vPassword = document.getElementById("vpass").value;

    console.log(fName);
    console.log(lName);
    console.log(email);
    console.log(password);
    console.log(vPassword);
    console.log(gender);
    console.log("verified the content");

    // validateFName();
    // validateEmail();
    // validatePass();
    // validateVPass();
    // validateAge();

    if(validateFName() && validateAge() && validateEmail() && validatePass() && validateVPass()){
        const useArray = [fName, email, password];
        localStorage.setItem('user', JSON.stringify(useArray));
        console.log(localStorage.getItem('user'));
        redirect();
    }

}