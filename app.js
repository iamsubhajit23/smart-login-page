const container = document.querySelector("#container");
const registerBtn = document.querySelector("#register");
const logInBtn = document.querySelector("#log-in");

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

logInBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});