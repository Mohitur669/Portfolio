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
        response => response.json(),
        msg.textContent = "Message sent successfully!",
        setTimeout(function () {
            msg.textContent = "";
        }, 1000),
        form.reset()
    )
});

// Creating typewriter effect on the name
let title = document.querySelector(".username")
let my_name = "Mohd Mohitur Rahaman"
let index = 1

const typeWriter = () => {
    let new_title = my_name.slice(0, index)
    title.innerText = new_title

    // creating infinite loop
    index > my_name.length ? index = 1 : index++

    setTimeout(() => {
        typeWriter()
    }, 140);
}

typeWriter()