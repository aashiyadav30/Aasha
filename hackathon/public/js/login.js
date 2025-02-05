const inputs = document.querySelectorAll(".input");

function focusFunx() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

  if (password !== confirmPassword) {
    event.preventDefault(); // Prevent form submission
    alert('Passwords do not match!');
  }
});

//sign-up form validation


document.querySelector("form").addEventListener("submit", function (event) {
  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
  const otp = document.querySelector('input[name="otp"]').value; // OTP field

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

 // OTP validation (hardcoded OTP 74560)
 const correctOtp = "74560";


  // Username must be unique - this requires server-side check, so leave this to the backend

  // Validate email format
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Validate password format
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character."
    );
    event.preventDefault();
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    event.preventDefault();
  }

    // OTP validation
    if (otp !== correctOtp) {
      alert("Incorrect OTP. Please try again.");
      event.preventDefault();
      return;
    }
});



