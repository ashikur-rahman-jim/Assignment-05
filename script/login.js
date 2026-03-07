document.getElementById('signin-btn').addEventListener('click', function () {
    // console.log('Sign-in button clicked');

    // Get input-username value
    const userName = document.getElementById('input-username');
    const userNameValue = userName.value;
    // console.log(userNameValue);

    // Get input-password value
    const userPassword = document.getElementById('input-password');
    const passwordValue = userPassword.value;
    console.log(passwordValue);

    // if username and password is currect sign-in successfull else sign-in faild
    if(userNameValue === "admin" && passwordValue === "admin123") {
        alert('Sign in Successful');
        window.location.assign('home.html');
    } else {
        alert('Sign in Failed');
    }
    
})