document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links li a");
    let currentUrl = window.location.pathname;

    // Poista kansiorakenne polusta
    currentUrl = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        // Vertaa pelkkää tiedostonimeä
        if (linkHref === currentUrl) {
            link.classList.add("active");
            link.parentElement.classList.add("active");

            // Jos linkki on osa dropdown-valikkoa, aseta myös dropdown aktiiviseksi
            const dropdown = link.closest(".dropdown");
            if (dropdown) {
                dropdown.classList.add("active");
                dropdown.querySelector('.dropbtn').classList.add("active");
            }
        }
    });
});
