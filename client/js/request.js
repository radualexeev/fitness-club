const form = document.getElementById("user-form");
const formContainer = document.getElementById("window-block");
const message = document.getElementById("response-text");
const logo = document.getElementById("response-logo");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formContainer.style.display = "none";
    message.style.display = "block";
    logo.style.display = "block";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});