const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header__link-style").forEach(n=> n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");4
}))


