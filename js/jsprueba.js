// Funcionalidad para cambiar la imagen principal
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
        mainImage.src = this.src;
        mainImage.alt = this.alt;
    });
});

// Funcionalidad para mostrar imagen en grande
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

mainImage.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}
function activateButton(button) {
    const buttons = document.querySelectorAll('.color-button');
    buttons.forEach(btn => btn.classList.remove('active')); // Remover la clase de todos los botones
    button.classList.add('active'); // Agregar la clase al botón clicado
}
function addToCart() {
    const selectedButton = document.querySelector('.color-button.active');
    if (!selectedButton) {
        alert('Por favor, selecciona una talla antes de agregar al carrito.');
        return;
    }

    const confirmation = confirm('¿Seguro que quieres agregar al carrito?');
    if (confirmation) {
        let quantity = prompt('¿Cuántas unidades quieres agregar? (Máximo 10)', '1');
        quantity = parseInt(quantity);

        if (isNaN(quantity) || quantity < 1 || quantity > 10) {
            alert('Cantidad no válida. Por favor, ingresa un número entre 1 y 10.');
        } else {
            alert(`Has agregado ${quantity} unidades al carrito.`);
            
        }
    }
}
function addToFavorites(button) {
    const confirmation = confirm('¿Quieres agregar este producto a favoritos?');
    if (confirmation) {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        button.style.bordercolor = 'red';
        alert('Producto agregado a favoritos.');
    } else {
        alert('Producto no agregado a favoritos.');
    }
}
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

