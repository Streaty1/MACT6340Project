(function () {
    "use strict";

    let form = document.querySelector('#contact-form');

    document.querySelector("#contact-form-button").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let formValid = true;
        if (!form.checkValidity()) {
        formValid = false;
        }
        form.classList.add("was-validated");
        if (formValid) {
        sendTheEmail();
        }  
    });

    // function submitMail() {
    //     console.log("You clicked the submit button.");
    //     // console.log(document.querySeleector("#name").value);
    //     let name = document.querySeleector("#name").value;
    //     let email = document.querySeleector("#email").value;
    //     let message = document.querySeleector("#message").value;
    //     console.log("Name: " + name);
    //     console.log("Email: " + email);
    //     console.log("Message: " + msg);
           
    // }

    function sendTheEmail() {
        let obj = {
          sub: "Someone submitted a contact form!",
          txt: `${document.querySelector("#contact-first")} ${document.querySelector("#contact-last")} sent you a message that reads ${document.querySelector("#contact-question")}. They're email address is ${document.querySelector("#contact-email-addr")
          }`,
        };
    
        fetch("/mail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((r) => r.json())
          .then((response) => {
            document.querySelector("#contact-button-response").innerHTML =
              response.result;
          })
          .then(() => {
            setTimeout(() => {
              document.querySelector("#contact-button-response").innerHTML = "";
            }, "5000");
          });
      }
})();

