/* A stylesheet specifically the Media Query for to use on my website
   !* Author: Thannaree Charoenpokkasap
   !* Website: bow.meys.tel, thannaree.github.io, bow.meystel.com
*/

// A function for typing effect
function mobileNav() {
    let theLink = document.getElementById("side-nav");

    if (theLink.style.display === "block") {
        theLink.style.display = "none";
    }
    else {
        theLink.style.display = "block";
    }
}

/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

// Get the header
var topNav = document.getElementById("top-nav");

// Get the offset position of the navbar
var sticky = topNav.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        topNav.classList.add("sticky");
    } else {
        topNav.classList.remove("sticky");
    }
}*/
