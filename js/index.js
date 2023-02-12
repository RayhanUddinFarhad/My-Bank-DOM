document.getElementById('sign-in').addEventListener ('click', function (e) {

    const email = document.getElementById ('email-field');
    const password = document.getElementById ('pass-field');

    const emailField = email.value;
    const passwordField = password.value;



    if (emailField == 'MyBank@gmail.com' && passwordField == '1234') {



        window.location.href = 'dashboard.html';
    }

    else {


        alert('Please enter a valid field');
    }
    






 })