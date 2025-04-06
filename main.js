// JavaScript Element

 document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove("active"));

    // Show the first tab by default
    document.getElementById("home").classList.add("active");

    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");

        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove("active"));

        // Show selected tab content
        document.getElementById(targetId).classList.add("active");
      });
    });
  });