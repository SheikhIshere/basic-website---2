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

    // Lock body scroll when menu is open (optional)
    document.body.classList.toggle("overflow-hidden", !mobileMenu.classList.contains("translate-x-full"));
}
