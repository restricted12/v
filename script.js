// const navs = document.querySelectorAll('.nav-list li');
// const resumeLists = document.querySelectorAll('.resume-list');
// const cube = document.querySelector('.box')
// const resumeBoxes = document.querySelectorAll('.resume-box');
// const portfolioLists = document.querySelectorAll('.portfolio-list');
// const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// // Event for main navigation
// navs.forEach((nav, idx) => {
//     nav.addEventListener('click', () => {
//         const currentActiveNav = document.querySelector('.nav-list li.active');
//         const currentActiveBox = document.querySelector('.resume-box.active');

//         if (currentActiveNav) {
//             currentActiveNav.classList.remove('active');
//         }

//         if (currentActiveBox) {
//             currentActiveBox.classList.remove('active');
//         }

//         nav.classList.add('active');
//         cube.Style.transform = `rotateY(${idx * -90}deg)`
//     });
// });

// // Event for resume items
// resumeLists.forEach((list, idx) => {
//     list.addEventListener('click', () => {
//         const currentActiveResumeList = document.querySelector('.resume-list.active');
//         const currentActiveResumeBox = document.querySelector('.resume-box.active');

//         if (currentActiveResumeList) {
//             currentActiveResumeList.classList.remove('active');
//         }

//         if (currentActiveResumeBox) {
//             currentActiveResumeBox.classList.remove('active');
//         }

//         list.classList.add('active');
//         resumeBoxes[idx].classList.add('active');
//     });
// });

// // Event for portfolio items
// portfolioLists.forEach((list, idx) => {
//     list.addEventListener('click', () => {
//         const currentActivePortfolioList = document.querySelector('.portfolio-list.active');
//         const currentActivePortfolioBox = document.querySelector('.portfolio-box.active');

//         if (currentActivePortfolioList) {
//             currentActivePortfolioList.classList.remove('active');
//         }

//         if (currentActivePortfolioBox) {
//             currentActivePortfolioBox.classList.remove('active');
//         }

//         list.classList.add('active');
//         portfolioBoxes[idx].classList.add('active');
//     });
// });


// const navs = document.querySelectorAll('.nav-list li');
// const resumeLists = document.querySelectorAll('.resume-list');
// const cube = document.querySelector('.box');  // Corrected element selection
// const resumeBoxes = document.querySelectorAll('.resume-box');
// const portfolioLists = document.querySelectorAll('.portfolio-list');
// const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// // Event for main navigation
// navs.forEach((nav, idx) => {
//     nav.addEventListener('click', () => {
//         // Remove 'active' class from the currently active nav item and box
//         const currentActiveNav = document.querySelector('.nav-list li.active');
//         const currentActiveBox = document.querySelector('.resume-box.active');
        
//         if (currentActiveNav) {
//             currentActiveNav.classList.remove('active');
//         }
        
//         if (currentActiveBox) {
//             currentActiveBox.classList.remove('active');
//         }

//         // Add 'active' class to the clicked nav item
//         nav.classList.add('active');

//         // Apply the rotateY transformation to the cube
//         if (cube) { // Ensure the cube element exists
//             cube.style.transform = `rotateY(${idx * -90}deg)`;  // Fixed: use 'style' and 'transform'
//         }
//     });
// });

// // Event for resume items
// resumeLists.forEach((list, idx) => {
//     list.addEventListener('click', () => {
//         const currentActiveResumeList = document.querySelector('.resume-list.active');
//         const currentActiveResumeBox = document.querySelector('.resume-box.active');

//         if (currentActiveResumeList) {
//             currentActiveResumeList.classList.remove('active');
//         }

//         if (currentActiveResumeBox) {
//             currentActiveResumeBox.classList.remove('active');
//         }

//         // Add 'active' class to the clicked resume list and box
//         list.classList.add('active');
//         resumeBoxes[idx].classList.add('active');
//     });
// });

// // Event for portfolio items
// portfolioLists.forEach((list, idx) => {
//     list.addEventListener('click', () => {
//         const currentActivePortfolioList = document.querySelector('.portfolio-list.active');
//         const currentActivePortfolioBox = document.querySelector('.portfolio-box.active');

//         if (currentActivePortfolioList) {
//             currentActivePortfolioList.classList.remove('active');
//         }

//         if (currentActivePortfolioBox) {
//             currentActivePortfolioBox.classList.remove('active');
//         }

//         // Add 'active' class to the clicked portfolio list and box
//         list.classList.add('active');
//         portfolioBoxes[idx].classList.add('active');
//     });
// });

const typed = new Typed(".te", {
    strings: ["Frontend Developer", "Back-End Developer", "Web Scraper","Data-VIsualizer By Python","E-commerce Web-Developer"], // Texts to type
    typeSpeed: 100,        // Typing speed in milliseconds
    backSpeed: 100,        // Backspace speed in milliseconds
    backDelay: 1000,       // Delay before backspacing in milliseconds
    loop: true,            // Repeat the typing effect
});

const navs = document.querySelectorAll('.nav-list li');
const resumeLists = document.querySelectorAll('.resume-list');
const cube = document.querySelector('.box');
const resumeBoxes = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const sections =  document.querySelectorAll('.section');

// Event for main navigation
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        // Remove active class from the currently active nav and section
        const currentActiveNav = document.querySelector('.nav-list li.active');
        const currentActiveBox = document.querySelector('.resume-box.active');
        const currentActiveSection = document.querySelector('.section.active');

        if (currentActiveNav) {
            currentActiveNav.classList.remove('active');
        }

        if (currentActiveBox) {
            currentActiveBox.classList.remove('active');
        }

        if (currentActiveSection) {
            currentActiveSection.classList.remove('active');
        }

        // Mark the clicked nav as active
        nav.classList.add('active');

        // Apply the cube rotation based on the nav clicked
        if (cube) {
            cube.style.transform = `rotateY(${idx * -90}deg)`;
        }

        // Set the corresponding section as active
        sections[idx].classList.add('active');

        // Show the appropriate box (resume or portfolio)
        if (resumeBoxes[idx]) {
            resumeBoxes[idx].classList.add('active');
        } else if (portfolioBoxes[idx]) {
            portfolioBoxes[idx].classList.add('active');
        };
        const array =Array.from(sections);
        const arrsecs=array.slice(1 ,-1);
        arrsecs.forEach(arrsec =>{
            if (arrsec.classList.contains('active')){
                sections[4].classList.add('action-contact')
            }
        });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});


// Event for resume items
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        const currentActiveResumeList = document.querySelector('.resume-list.active');
        const currentActiveResumeBox = document.querySelector('.resume-box.active');

        if (currentActiveResumeList) {
            currentActiveResumeList.classList.remove('active');
        }

        if (currentActiveResumeBox) {
            currentActiveResumeBox.classList.remove('active');
        }

        // Mark the clicked resume item as active
        list.classList.add('active');
        resumeBoxes[idx].classList.add('active');
    });
});

// Event for portfolio items
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        const currentActivePortfolioList = document.querySelector('.portfolio-list.active');
        const currentActivePortfolioBox = document.querySelector('.portfolio-box.active');

        if (currentActivePortfolioList) {
            currentActivePortfolioList.classList.remove('active');
        }

        if (currentActivePortfolioBox) {
            currentActivePortfolioBox.classList.remove('active');
        }

        // Mark the clicked portfolio item as active
        list.classList.add('active');
        portfolioBoxes[idx].classList.add('active');
    });
});

// On page load, set the active class for the current section
document.addEventListener('DOMContentLoaded', () => {
    // You can check the window's location (hash or id) to set the active nav item
    const currentSection = window.location.hash || '#home';  // Default to #home if no section is active

    // Match the corresponding nav item with the section
    navs.forEach((nav) => {
        const sectionId = nav.getAttribute('data-section');  // Assuming each nav has a 'data-section' attribute
        
        if (sectionId === currentSection) {
            nav.classList.add('active');
            // Apply the cube transformation if needed
            const idx = [...navs].indexOf(nav);
            if (cube) {
                cube.style.transform = `rotateY(${idx * -90}deg)`;
            }
        }
    });
});
setTimeout(()=>{
    sections[4].classList.remove('active')
},1500);