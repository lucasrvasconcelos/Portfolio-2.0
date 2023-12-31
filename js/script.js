const no_js = document.querySelector("#nojs").removeAttribute("id")

window.onload = function() {
    const load = document.querySelector(".load")

    setTimeout(() => {
        load.style.display = "none"
    }, 10);
    
};


document.addEventListener("click", (e) => {
    openMenu(e)
})

function openMenu(e){

    const element = e.target.id
    let contacts = document.querySelector("body header .top-header nav .contacts .contacts-info")
    const arrow = document.querySelector(".ph-caret-up")
    
    if(element == "active-contacts"){
        ready()
    } else {
        if(element == "active-contacts-icon"){
           ready()
        } else {
            arrow.style.transform = "rotateX(0deg)"
            contacts.style.display = "none"
        }
    }

    function ready(){

        if(contacts.style.display == "flex"){
            arrow.style.transform = "rotateX(0deg)"
            contacts.style.display = "none"
        } else {
            arrow.style.transform = "rotateX(180deg)"
            contacts.style.display = "flex"
        }

    }
}


const technologies = document.querySelectorAll(".img-technologies")


technologies.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        const span = element.querySelector("span")
        span.classList.add("show-tecnologies")
    })
})


const openmenu = document.querySelector(".openmenu-mobile")
const backmenu = document.querySelector(".backmenu-mobile")
const links_mobile = document.querySelectorAll(".mobile-menu li a")

openmenu.addEventListener("click", toggle_menu)
backmenu.addEventListener("click", toggle_menu)

links_mobile.forEach((element) => {
    element.addEventListener("click", toggle_menu)
})

function toggle_menu(){
    const menu = document.querySelector(".mobile-menu")
    menu.classList.toggle("open")
}