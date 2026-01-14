const initialProducts = [
    {
        name: "Laptop",
        image: "https://via.placeholder.com/250",
        price: 1200
    },
    {
        name: "Mouse",
        image: "https://via.placeholder.com/250",
        price: 25
    },
    {
        name: "Keyboard",
        image: "https://via.placeholder.com/250",
        price: 75
    }
];

const productContainer = document.querySelector(".products");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(product) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    card.querySelector(".card__title").textContent = product.name;
    card.querySelector(".card__image").src = product.image;
    card.querySelector(".card__price").textContent = `$${product.price}`;
    return card;
}

function renderProducts() {
    initialProducts.forEach(product => {
        productContainer.append(createCard(product));
    });
}

// BUG: The form does not clear after submitting
document.querySelector(".form").addEventListener("submit", function(evt) {
    evt.preventDefault();
    const name = evt.target.name.value;
    const image = evt.target.image.value;
    const price = evt.target.price.value;
    const newProduct = { name, image, price };
    initialProducts.push(newProduct);
    productContainer.prepend(createCard(newProduct));
});

// BUG: Deleting a product only removes it from the DOM, not from the initialProducts array
productContainer.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("card__delete-button")) {
        evt.target.closest(".card").remove();
    }
});

const cartModal = document.querySelector(".modal");
const cartButton = document.querySelector(".header__cart-button");
const closeCartButton = document.querySelector(".modal__close-button");

// BUG: The cart button does not open the modal
cartButton.addEventListener("click", function() {
    cartModal.classList.add(".modal_is-opened");
});

closeCartButton.addEventListener("click", function() {
    cartModal.classList.remove("modal_is-opened");
});

// BUG: Adding a product to the cart does not work.
productContainer.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("card__add-to-cart-button")) {
        // This should add the product to the cart modal
    }
});

renderProducts();