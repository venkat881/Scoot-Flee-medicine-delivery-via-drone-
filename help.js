document.getElementById("helpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("query").value.trim();
    const response = document.getElementById("helpResponse");
  
    if (!query) {
      response.innerHTML = "<p style='color:red;'>Please enter a query.</p>";
    } else {
      response.innerHTML = `<p>Thanks for your query! We’ll respond soon.<br>You asked: <strong>${query}</strong></p>`;
    }
  });
  