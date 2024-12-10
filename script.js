// Simulated data
let isAdmin = false; // Set to true for admin
let chatMessages = [];

// Send a message to the chat
function sendMessage() {
    let message = document.getElementById("user-message").value;
    if (message.trim() !== "") {
        chatMessages.push({ user: "User", message });
        displayMessages();
        document.getElementById("user-message").value = "";
    }
}

// Display all messages in the chat box
function displayMessages() {
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = ""; // Clear current messages

    chatMessages.forEach(msg => {
        let messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${msg.user}: </strong>${msg.message}`;
        chatBox.appendChild(messageElement);
    });

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Toggle admin controls based on whether the user is an admin
function toggleAdminControls() {
    if (isAdmin) {
        document.getElementById("admin-controls").style.display = "block";
        document.getElementById("user-controls").style.display = "none";
    } else {
        document.getElementById("admin-controls").style.display = "none";
        document.getElementById("user-controls").style.display = "block";
    }
}

// Ban a user (Simulated)
function banUser() {
    alert("User has been banned.");
    // Clear chat or perform additional actions here.
}

// Timeout a user (Simulated)
function timeoutUser() {
    alert("User has been timed out.");
    // Simulate timeout functionality.
}

// Report a message
function reportMessage() {
    let messageToReport = prompt("Enter the message you want to report:");
    if (messageToReport) {
        alert(`Reported: ${messageToReport}`);
        // Here, you can add logic to log or send the report somewhere.
    }
}

// User Report (for non-admins)
function showReportForm() {
    let messageToReport = prompt("Enter the message you want to report:");
    if (messageToReport) {
        alert(`You reported: ${messageToReport}`);
    }
}

// Simulate admin login (for testing)
function loginAsAdmin() {
    isAdmin = true;
    toggleAdminControls();
}

// Simulate regular user login
function loginAsUser() {
    isAdmin = false;
    toggleAdminControls();
}

// Call loginAsAdmin() or loginAsUser() based on your scenario
loginAsUser(); // You can switch between user and admin using this line.