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
        alert("Form submitted successfully!")
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitted form");
    });

    formContainer.style.display = "none";
    message.style.display = "block";
    logo.style.display = "block";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});

// btn.addEventListener('click', () => {
//     fetch('http://localhost:3000/api/data')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.message)
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });