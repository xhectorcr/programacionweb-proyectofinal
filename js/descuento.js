// Obtener referencias a los elementos
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeButton = document.querySelector('.close-button');
const buyButton = document.getElementById('buy-button'); // Referencia al botón de compra

// Seleccionar todos los productos
const productCards = document.querySelectorAll('.product-card');

// Abrir el modal
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('.product-image img').src;
        const title = card.querySelector('h2').textContent;
        const description = card.querySelector('.product-description').textContent;
        const price = card.querySelector('.price').textContent;

        //contenido del modal
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

// Eevento del boton
buyButton.addEventListener('click', () => {
    //logica carrito
    alert(`¡Gracias por comprar el producto ${modalTitle.textContent}!`);
    
    // Cierre de modal
    modal.style.display = 'none';
});


