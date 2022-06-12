//New Year Countdown:
const newYears = "1 Jan 2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

  // console.log(days);
}

//NHS Bill Countdown:
const nhsbill = "14 July 2022";

const daysElnhs = document.getElementById("daysnhs");
const hoursElnhs = document.getElementById("hoursnhs");
const minsElnhs = document.getElementById("minsnhs");
const secondsElnhs = document.getElementById("secondsnhs");

function countdownnhs() {
  const newYearDatenhs = new Date(nhsbill);
  const currentDate = new Date();

  const totalSeconds = (newYearDatenhs - currentDate) / 1000;

  const days2 = Math.floor(totalSeconds / 3600 / 24);
  const hours2 = Math.floor(totalSeconds / 3600) % 24;
  const mins2 = Math.floor(totalSeconds / 60) % 60;
  const seconds2 = Math.floor(totalSeconds) % 60;
  console.log("The minute is ", mins2);
  daysElnhs.innerHTML = days2;
  hoursElnhs.innerHTML = hours2;
  minsElnhs.innerHTML = mins2;
  secondsElnhs.innerHTML = seconds2;

  // console.log(days);
}

function formatTime(time) {
  return time < 10 ? "0${time}" : timenhs;
}

function formatTime(time) {
  return time < 10 ? "0${time}" : time;
}

countdown();
setInterval(countdown, 1000);

countdownnhs();
setInterval(countdownnhs, 1000);

//Javascript Starter:

console.log("Hello world!");

// Variables
const myName = "William Tong";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);

// Create event when clicking:
h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});

//
//Get Auto Current Year on webpage:
//
//El stands for Event Listener
const yearEl = document.querySelector(".year");
//yearEl.textContent = 3000;
const currentYear = new Date().getFullYear() + 5;
console.log(currentYear);
yearEl.textContent = currentYear;

//
//Make mobile navigation work
//
//Think about what reactions are based on:
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
//Function below will add the (".nav-open") to .header in html so creating the open and close events
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//
//Make scrolling smooth with all browsers including Safari
//
//So create smooth scrolling animation:

//Declare all hyperlinks
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    //TURN OFF THE DEFAULT - OFF THE HYPERLINK
    e.preventDefault();
    //GET THE HYPERLINK SUPPOSED DESTINATION LINK
    const href = link.getAttribute("href");
    // console.log(href);
    //SCROLL BACK TO TOP IF DEFAULT LINK/ NO DESTINATION LINK
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    //SCROLL TO DESTINATION
    if (href !== "#" && href.startsWith("#")) {
      // console.log(href);
      //GET DETAILS SUCH AS ID OF THE LOCATION
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      //SCROLL TO AREA BASED ON THE INFO ACCQUIRED
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    // CLOSE MOBILE NAV
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//
//MAKE NAVIGATION STICKY using css sticky
//
// FIND .section-hero AS WE ONLY WANT NAVIGATION TO BE STICKY AFTER THIS SECTION
const sectionHeroEl = document.querySelector(".section-hero");

// SAVE THE FUNCTION FIRST
// const observer = new IntersectionObserver(function () {}, {});

// SAVE THE FUNCTION FIRST
const observer = new IntersectionObserver(
  function (entries) {
    //Create an interactive var holder for the threshold so the value will change whenever user move on/off the hero section.
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      //document.querySelector(".header").classList.add("sticky");
      // Need to add to body instead:
      document.body.classList.add("sticky");
    }

    if (!ent.isIntersecting === false) {
      //if (ent.isIntersecting === true) {
      //document.querySelector(".header").classList.add("sticky");
      // Need to add to body instead:
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    // 1/0 to determine if the target section aka section-hero is still in-view
    threshold: 0,
    rootMargin: "-80px",
  }
);
// OBSERVING WHERE THE USER IS LOOK AT
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
