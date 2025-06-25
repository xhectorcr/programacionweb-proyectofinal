function searchProducts(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const products = document.querySelectorAll('.product-card');
        products.forEach(function(product) {
            const name = product.querySelector('.product-name').textContent.toLowerCase();
            if (name.includes(query)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }
}

function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    const products = Array.from(document.querySelectorAll('.product-card'));

    products.sort(function(a, b) {
        if (sortValue === 'priceAsc') {
            return getPrice(a) - getPrice(b);
        } else if (sortValue === 'priceDesc') {
            return getPrice(b) - getPrice(a);
        } else if (sortValue === 'nameAsc') {
            return getName(a).localeCompare(getName(b));
        } else if (sortValue === 'nameDesc') {
            return getName(b).localeCompare(getName(a));
        }
    });

    const productGrid = document.querySelector('.product-grid');

    products.forEach(function(product) {
        productGrid.appendChild(product);
    });
}

function getPrice(product) {
    const priceText = product.querySelector('.product-price').textContent.replace('$', '');
    return parseFloat(priceText);
}

function getName(product) {
    return product.querySelector('.product-name').textContent;
}

document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "Compra HOY y recibe MAÑANA⚡ tus compras en la puerta de tu casa en 24hrs",
        "💳Compra hasta en 6 cuotas sin intereses",
        "🔴Cyber Monday: Hasta 40% OFF + ENVÍO GRATIS.",
        
    ];

    function updateText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("randomText").innerHTML = `<strong>${texts[randomIndex]}</strong>`;
    }

    // Cambiar el texto cada 2 segundos
    setInterval(updateText, 1500);
});

