/* A stylesheet specifically the Media Query for to use on my website
   !* Author: Thannaree Charoenpokkasap
   !* Website: bow.meys.tel, thannaree.github.io, bow.meystel.com
*/

// A function to switch between full navigation bar (large screen devices) and
// mobile navigation (small screen devices) by clicking the hamburger icon

var mobileNav = document.getElementById("mobile-nav");
var overlay = document.getElementById("overlay");
var hamburger = document.getElementById("bar-icon");
var goToTopButton = document.getElementById("goToTop");

// var theIcon = document.getElementById("bar-icon").hasAttribute("class");

// A function for mobile navigation -- when click or touch the one of the mobile link,
// the navigation menu will be hidden
function closeMobileNav() {
    mobileNav.style.display = "none";
    overlay.style.display = "none";
}

// To display the mobile navigation when a user click/touch the hamburger bar
function openMobileNav() {
    mobileNav.style.display = "block";
    overlay.style.display = "block";
    // goToTopButton.style.display = "none";
}

window.onscroll = function() {
  displayGoToTopButton()
};

// A function to display the "goToTopButton" when a user scroll down more than 20px
function displayGoToTopButton() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    goToTopButton.style.display = "block";
  }
  else {
    goToTopButton.style.display = "none";
  }
}

// A function to scroll back to the top of the page
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*function toggleMobileNav() {
    if (theIcon.hasAttribute("class")) {
        theIcon.setAttribute("class", "fas fa-times");
    }
}*/


// document.querySelector("#toggle-icon").addEventListener("click", function () {
//    this.classList.toggle("active");
// });

/*
function toggleIcon(theIcon) {
    theIcon.classList.toggle("fas fa-times");
}
function toggleIcon() {
    var changeIcon = document.getElementById("bar-icon");
    changeIcon.classList.toggle("fas fa-times");
}*/

// A function to switch between icon bar and x bar for the mobile menu
/*function switchIcon(theIcon) {
    if (document.getElementById(theIcon).className === "fas fa-bars bar-icon") {
        document.getElementById(theIcon).className = "fas fa-times";
    }

    else {
        document.getElementById(theIcon).className = "fas fa-bars bar-icon";
    }
}*/

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
