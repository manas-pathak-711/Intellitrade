document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded Successfully!");

    // Navigation Handling
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage;
        });
    });

    // Form Validation for Login Page
    const loginForm = document.querySelector("#login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();

            if (email === "" || password === "") {
                alert("Please fill in all fields");
                return;
            }
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        });
    }

    // Upload Page - File Handling
    const uploadForm = document.querySelector("#upload-form");
    if (uploadForm) {
        uploadForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const fileInput = document.querySelector("#file-upload");

            if (fileInput.files.length === 0) {
                alert("Please select a file to upload");
                return;
            }
            alert("File uploaded successfully!");
        });
    }

    // AI-Powered Price Estimation Simulation
    const estimateBtn = document.querySelector("#estimate-price");
    if (estimateBtn) {
        estimateBtn.addEventListener("click", () => {
            const estimatedPrice = Math.floor(Math.random() * 10000) + 1000; // Simulated AI pricing
            document.querySelector("#price-display").textContent = `Estimated Price: $${estimatedPrice}`;
        });
    }

    // Marketplace Page - Search and Filter
    const searchInput = document.querySelector("#search");
    const categoryFilter = document.querySelector("#category");
    const marketplaceItems = document.querySelectorAll(".marketplace-item");

    function filterListings() {
        const searchValue = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value.toLowerCase();

        marketplaceItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            const category = item.querySelector(".item-type").textContent.toLowerCase();

            const matchesSearch = title.includes(searchValue);
            const matchesCategory = selectedCategory === "all" || category.includes(selectedCategory);

            if (matchesSearch && matchesCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    if (searchInput && categoryFilter) {
        searchInput.addEventListener("keyup", filterListings);
        categoryFilter.addEventListener("change", filterListings);
    }

    // Buy and Sell Actions
    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", function() {
            const itemTitle = this.parentElement.querySelector("h3").textContent;
            alert(`Purchase Successful! You bought: ${itemTitle}`);
        });
    });

    document.querySelectorAll(".sell-button").forEach(button => {
        button.addEventListener("click", function() {
            alert("Item Listed for Sale!");
        });
    });
});
