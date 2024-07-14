// script.js
const heartButton = document.getElementById('heart');
const closeButton = document.getElementById('close-btn');
const letterContainer = document.getElementById('letter-container');
let isExpanded = false;

heartButton.addEventListener('click', function() {
    if (!isExpanded) {
        expandLetter();
    }
});

closeButton.addEventListener('click', function() {
    if (isExpanded) {
        collapseLetter();
    }
});

function expandLetter() {
    letterContainer.style.display = 'block';
    setTimeout(() => {
        letterContainer.classList.add('expanded');
    }, 10); // Delay to ensure display change takes effect
    isExpanded = true;
    startScrolling();
}

function collapseLetter() {
    letterContainer.classList.remove('expanded');
    setTimeout(() => {
        letterContainer.style.display = 'none';
    }, 2000); // Delay to match the transition duration
    isExpanded = false;
    stopScrolling();
}

let scrollInterval;

// function startScrolling() {
//     const letterContent = document.getElementById('letter-content');
//     letterContent.scrollTop = 0; // Reset scroll position
//     scrollInterval = setInterval(() => {
//         letterContent.scrollTop += 1;
//         if (letterContent.scrollTop >= letterContent.scrollHeight - letterContent.clientHeight) {
//             clearInterval(scrollInterval);
//         }
//     }, 50); // Adjust the speed of scrolling here
// }

// function stopScrolling() {
//     clearInterval(scrollInterval);
// }
