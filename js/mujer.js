// Obtener referencias a los elementos del DOM
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeButton = document.querySelector('.close-button');

// Seleccionar todos los productos
const productCards = document.querySelectorAll('.product-card');

// Abrir el modal al hacer clic en un producto
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('.product-image img').src;
        const title = card.querySelector('h2').textContent;
        const description = card.querySelector('.product-description').textContent;
        const price = card.querySelector('.price').textContent;

        // Rellenar el contenido del modal
        modalImage.src = image;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalPrice.textContent = price;

        // Mostrar el modal
        modal.style.display = 'flex';
    });
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

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


