// hamberger menu

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});


// form to google sheet
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form"),)
    }).then(
        response => response.json()
    ).then(
        msg.innerHTML = "Message sent successfully!"
    )
});