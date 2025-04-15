document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Payment Successful! Redirecting to drone tracking...");
    setTimeout(() => {
      window.location.href = "tracking.html";
    }, 1500);
  });
  
  const radioButtons = document.querySelectorAll('input[name="method"]');
  radioButtons.forEach((btn) => {
    btn.addEventListener("change", () => {
      document.querySelector(".upi-section").style.display = btn.value === "UPI" ? "block" : "none";
      document.querySelector(".netbanking-section").style.display = btn.value === "NetBanking" ? "block" : "none";
    });
  });
  