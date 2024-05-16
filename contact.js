(function () {
    "use strict";

    document
    .querySelector("#contact-form-button")
    .addEventListener("click", submitMail);

    function submitMail() {
        console.log("You clicked the submit button.");
        // console.log(document.querySeleector("#name").value)
        let name = document.querySeleector("#name").value;
        let email = document.querySeleector("#email").value;
        let message = document.querySeleector("#message").value;
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + msg);
           
    }
})();