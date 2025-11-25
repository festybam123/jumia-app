// Display current date
new Date();
document.getElementById("date").innerHTML = new Date();

// Search function for products
function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const productDivs = document.querySelectorAll('.main_cnt a, .main_cnt1 a, .main_cnt2 a, .main_cnt3 a, .main_cnt4 a, .main_cnt5 a, .main_cnt6 a, .main_cnt7 a, .extral_cnt1 a');
    
    productDivs.forEach(product => {
        const productText = product.textContent.toLowerCase();
        if (productText.includes(searchInput)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Allow Enter key to trigger search
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});
