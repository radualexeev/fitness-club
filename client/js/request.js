const form = document.getElementById("user-form");
const formContainer = document.getElementById("window-block");
const message = document.getElementById("response-text");
const logo = document.getElementById("response-logo");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const smsData = new FormData(form);
    const urlEncode = new URLSearchParams(smsData).toString();

    fetch("http://localhost:3000/upload", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlEncode
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        };
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    formContainer.style.display = "none";
    message.style.display = "block";
    logo.style.display = "block";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});