// Get the input element
var input = document.getElementById("nameInput");

// Add event listener for key press
input.addEventListener("keypress", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Get the value of the input field
        var name = input.value;
        // Navigate to the next page (replace "nextPage.html" with the URL of your next page)
        window.location.href = "page2.html";
    }
});

function saveName() {
    // Get the input value
    var name = document.getElementById("nameInput").value;
    // Store the input value in localStorage
    localStorage.setItem("userName", name);
    // Redirect to Page 2
    window.location.href = "page2.html";
  }

