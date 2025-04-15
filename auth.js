// auth.js

// Login form
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("login-username");
    const password = document.getElementById("login-password");
    const errorBox = document.getElementById("login-error");
  
    if (!username.value.trim() || !password.value.trim()) {
      errorBox.textContent = "Please fill in all fields.";
      return;
    }
  
    if (password.value.length < 6) {
      errorBox.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "medicine.html";
  });
  
  // Signup form
  document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("signup-username");
    const password = document.getElementById("signup-password");
    const errorBox = document.getElementById("signup-error");
  
    if (!username.value.trim() || !password.value.trim()) {
      errorBox.textContent = "Please fill in all fields.";
      return;
    }
  
    if (password.value.length < 6) {
      errorBox.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    alert("Account created! You can now log in.");
    window.location.href = "login.html";
  });
  
  // Logout button
  document.getElementById("logout-btn")?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
  });
  
  // Page access restriction
  if (document.body.classList.contains("auth-protected")) {
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "login.html";
    }
  }  
  // Example: Save user details in localStorage
localStorage.setItem("username", enteredUsername);
localStorage.setItem("email", enteredEmail);