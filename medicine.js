function showQR() {
    const addressInput = document.getElementById("address").value.trim();
    if (addressInput === '') {
      alert("Please enter your address.");
      return;
    }
    document.getElementById("qr-section").style.display = "block";
  }
  
  function showTracking() {
    document.getElementById("map-section").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  