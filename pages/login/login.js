import {restApiUrl} from"../../js/script.js"
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            const username = document.querySelector(".username").value;
            const password = document.querySelector(".password").value;



            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                event.stopPropagation()

                const userData = {
                    username,
                    password,
                };

                axios.post(restApiUrl + "/auth/login",userData)
                .then((response) => {
                    
                    if(response.data) {
                        alert("Successful login:");
                        localStorage.setItem("token",response.data);
                    } else{
                        alert("Successful log in:");
                    }
                    window.location.href = "/index.html";
                })
                .catch((error) => {
                    console.error(error);

                    if(error.response && error.response.data) {
                        alert("Log in error:" + (error.response.data.message || error.response.data));
                    } else if(error.request) {
                        alert("Request error: No response from the server.");
                    }else{
                        alert("Unknown error:" + error.message)
                    }
                })
            }

            form.classList.add('was-validated')
        }, false)
    })
})()