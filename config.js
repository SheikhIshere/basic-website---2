function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    // Toggle menu visibility
    mobileMenu.classList.toggle("translate-x-full");

    // Ensure only one icon is visible at a time
    if (mobileMenu.classList.contains("translate-x-full")) {
        menuIcon.style.display = "inline";  // Show menu icon
        closeIcon.style.display = "none";   // Hide close icon
    } else {
        menuIcon.style.display = "none";    // Hide menu icon
        closeIcon.style.display = "inline"; // Show close icon
    }    
}
document.addEventListener("DOMContentLoaded", function () {
    const text = "Skilled at";
    let index = 1; // Start from index 1, because 'S' is always shown
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (!isDeleting) {
            // Display typed text
            typingElement.innerHTML = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeText, 1000); // Pause before deleting
                return;
            }
        } else {
            // Keep the first character constant
            typingElement.innerHTML = text.substring(0, index);
            index--;
            if (index < 2) { // Ensure the first character ('S') remains
                isDeleting = false;
                setTimeout(typeText, 500); // Pause before retyping
                return;
            }
        }
        setTimeout(typeText, isDeleting ? 100 : 150); // Typing speed
    }

    typeText(); // Start animation
});