function setEventDate() {
  const inputDate = document.getElementById("eventInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (!inputDate) {
    errorMsg.textContent = "Please enter a valid date and time.";
    return;
  }

  const selectedDate = new Date(inputDate).getTime();
  if (isNaN(selectedDate)) {
    errorMsg.textContent = "Invalid date. Please try again.";
    return;
  }

  // Set the date we're counting down to
  countDownDate = selectedDate;
  errorMsg.textContent = "";

  // Restart the countdown
  startCountdown();
}

// Set the initial date
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `
  <p>${days}d</p>
  <p>${hours}h</p>
  <p>${minutes}m</p>
  <p>${seconds}s</p>
`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy New Year!";
  }
}, 1000);

// Function to restart the countdown
function startCountdown() {
  clearInterval(x);
  x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
    <p>${days}d</p>
    <p>${hours}h</p>
    <p>${minutes}m</p>
    <p>${seconds}s</p>
  `;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
  }, 1000);
}
