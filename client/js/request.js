const btn = document.getElementById("btn-submit");
const reqBody = document.getElementById("window-hidden");
const requestForm = document.getElementById("window-block")
const answer = `
<p id="response-text">Cообщение было отправлено и спасибо что выбрали нас! <br>C вами свяжется наш менеджер. </p>
<img id="response-logo" src="img/logo.svg" alt="logo">
`

btn.addEventListener("click", function() {
    requestForm.style.display = "none";
    reqBody.insertAdjacentHTML("beforeend", answer);

    setTimeout(() => {
        window.location.href = "index.html"
    }, 3000)
})

console.log(requestForm)


// const responseForm = document.getElementById("")