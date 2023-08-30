const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEL = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set date input min width today's date
const today = new Date().toISOString().split('T') [0];
dateEL.setAttribute('min', today);

// Take values from input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}
// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);