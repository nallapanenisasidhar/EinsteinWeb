document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle-icon");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    
    function isSmallScreen() {
        return window.innerWidth <= 500; 
    }

    menuToggle.addEventListener("click", () => {
        if (isSmallScreen()) {
            navLinks.classList.toggle("active");
            menuToggle.style.display = navLinks.classList.contains("active") ? "none" : "block";
        }
    });

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (isSmallScreen()) {
                navLinks.classList.remove("active");
                menuToggle.style.display = "block";
            }
        });
    });


    document.addEventListener("click", (event) => {
        if (isSmallScreen()) {
            const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside) {
                navLinks.classList.remove("active");
                menuToggle.style.display = "block";
            }
        }
    });

    const showMoreBtn = document.getElementById("show-more");
    const papersGrid = document.getElementById("papers-grid");

    showMoreBtn.addEventListener("click", () => {
       
        for (let i = 4; i <= 6; i++) {
            const newCard = document.createElement("section");
            newCard.classList.add("paper-card");

            newCard.innerHTML = `
                <img src="images/paper-icon.jpg" alt="Paper Icon" class="paper-image">
                <h3>Paper Title ${i}</h3>
                <p>Brief description of the paper.</p>
                <button class="view-paper" data-paper="paper1.pdf">View Paper</button>
            `;

            papersGrid.appendChild(newCard);
        }
       
        showMoreBtn.style.display = "none";
    });

    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-paper")) {
            const paperFile = event.target.getAttribute("data-paper");
            window.location.href = `research_paper_template.html?file=${paperFile}`;
        }
    });
});
