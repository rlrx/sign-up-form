// write function to check if password fields match
function checkPasswordMatch() {
    // get values of the password field
    let password1 = document.querySelector(".password1").value;
    let password2 = document.querySelector(".password2").value;

    if(password1 == password2) {
        let pw1 = document.querySelector(".password1");
        let pw2 = document.querySelector(".password2");

        // remove the error class from both password input fields
        pw1.classList.remove("error");
        pw2.classList.remove("error");
    }
}

