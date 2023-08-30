const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEL = document.getElementById('date-picker');

// Set date input min width today's date
const today = new Date().toISOString().split('T') [0];
dateEL.setAttribute('min', today);