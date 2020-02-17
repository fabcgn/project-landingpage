/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll ("section")
const menu = document.querySelector ("#navbar__list")
const newDiv = document.createElement('div')
const menuLinks = document.getElementsByClassName("menu__link")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

inViewport = (e) => {
    let yPos = e.getBoundingClientRect().y
    let clientHeight = document.documentElement.clientHeight
    return yPos > -200 && yPos < clientHeight - 300
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

buildMenu = () => { for (section of sections) {
    const a = document.createElement("a")
    const menuItem = document.createElement('li')
    a.textContent = section.dataset.nav
    a.setAttribute("href","#"+section.id)
    menuItem.setAttribute("id","linkTo#"+section.id)
    menuItem.appendChild(a)
    menuItem.classList.add("menu__link")
    menu.appendChild(menuItem)
    } ;
}


// Add class 'active' to section when near top of viewport

toggleActive = (section) => {
    section.classList.toggle("focussed")
}

// Scroll to anchor ID using scrollTO event
softScroll = (y) => {
    window.scrollTo({
        top: y,
        left: 0,
        behavior: "smooth"
    })
}

elementLocation = (e) => {
    return window.scrollY + e.getBoundingClientRect().y
}

anchorTarget = (anch) => {
    return document.getElementById(anch)
}

scrollToElement = (e) => {
    softScroll(
        elementLocation(
            anchorTarget(e)))
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener("DOMContentLoaded", () => {
    buildMenu();

    document.getElementById("linkTo#section1").addEventListener("click", function(evt) { 
        scrollToElement("section1");
        event.preventDefault();
    });
    
    document.getElementById("linkTo#section2").addEventListener("click", function(evt) { 
        scrollToElement("section2");
        event.preventDefault();
    });
    
    document.getElementById("linkTo#section3").addEventListener("click", function(evt) { 
        scrollToElement("section3");
        event.preventDefault();
    });

});

// Scroll to section on link click
document.getElementById("testlink").addEventListener("click", function(evt) { 
    scrollToElement("section2");
    event.preventDefault();
});







// Set sections as active
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (inViewport(section) == true) {
            section.classList.add("focussed")
        } else {
            section.classList.remove("focussed")
        }
    });    
});