/* =========================================================
   HOME DROPDOWN — TABLET / IPAD / TOUCH
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const homeDropdown = document.querySelector(".home-dropdown");
    const homeLink = homeDropdown?.querySelector(":scope > a");

    if (!homeDropdown || !homeLink) return;

    homeLink.addEventListener("click", function (event) {

        if (window.innerWidth <= 1100) {

            event.preventDefault();

            homeDropdown.classList.toggle("dropdown-open");

        }

    });

    document.addEventListener("click", function (event) {

        if (!homeDropdown.contains(event.target)) {

            homeDropdown.classList.remove("dropdown-open");

        }

    });

});