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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav upon DOM loaded 




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener("DOMContentLoaded", () => {
    for (section of sections) {
        const a = document.createElement("a")
        const menuItem = document.createElement('li')
        a.textContent = section.dataset.nav
        a.setAttribute("href","#"+section.id)
        menuItem.appendChild(a)
        menuItem.classList.add("menu__link")
        menu.appendChild(menuItem)
    } ;
  });

// Scroll to section on link click



function menuClickResponse (event) {
    alert("Hello World" + event.target.id);
    scrollTo(500, 0);
}

// menu.addEventListener ("click", menuClickResponse);

// Set sections as active


