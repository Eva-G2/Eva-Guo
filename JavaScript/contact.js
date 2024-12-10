
let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.getElementById("03")
let form = document.getElementById("form");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");


form.addEventListener("submit",(e)=>{

    let emailCheck = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
    
    //condition for name//
    if(fullName.value === "" || fullName.value == null)
    {
        e.preventDefault();
        nameError.innerHTML = "Please enter your name";
        document.getElementById("name").className = "fram";
    }
    else{
        nameError.innerHTML = " ";
    }

    //condition for email//
    if(!email.value.match(emailCheck))
    {
        e.preventDefault();
        emailError.innerHTML = "Please enter a valid email";
        document.getElementById("email").className = "fram";
    }
    else{
        emailError.innerHTML = "";
    }

    //condition for message//
    if(message.value === "" || message.value == null)
        {
            e.preventDefault();
            messageError.innerHTML = "Please enter a message";
            document.getElementById("03").className = "fram";
        }
        else{
            messageError.innerHTML = " ";
        }

    if(
        nameError.innerHTML === " " && emailError.innerHTML === " " && messageError.innerHTML === " ")
        {
            alert("Sent successfully");
            form.submit();
        }



});