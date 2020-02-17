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

// build the nav from section's data-nav as title and anchor as href. Apply the menu__link styling.  

buildMenu = () => { for (section of sections) {
    const a = document.createElement("a")
    const menuItem = document.createElement('li')
    a.textContent = section.dataset.nav
    a.setAttribute("href","#"+section.id)
    menuItem.appendChild(a)
    a.classList.add("menu__link")
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

// analalyze an element's y coordinate 
elementLocation = (e) => {
    return window.scrollY + e.getBoundingClientRect().y
}

// Find a element by it's ID (other things would also work)
anchorTarget = (anch) => {
    return document.querySelector(anch)
}

// provide a smooth scrolling to a element by it's ID
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

// Build menu upon DOM Load. Add SoftScrolling funcitionality

document.addEventListener("DOMContentLoaded", () => {
    buildMenu();
    enableSoftScrollAll();
});


// Scroll to section on link click

enableSoftScroll = (elem) => {
    elem.addEventListener("click", function(event) { 
        scrollToElement(elem.getAttribute("href"));
        event.preventDefault();
    });
}

enableSoftScrollAll = () => {
    document.querySelectorAll(".menu__link").forEach( (elem) => {enableSoftScroll(elem)})
}



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
