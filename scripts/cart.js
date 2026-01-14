function createCartProduct(product) {
  // Get the template content
  const templateContent = document.querySelector("#cart-product-template").content;
  // Clone the content to a new fragment
  const productFragment = templateContent.cloneNode(true);

  // Get the actual card element from the fragment
  const cardElement = productFragment.querySelector(".card");

  // Get the interactive parts of the card
  const imageEl = cardElement.querySelector(".card__image");
  const titleEl = cardElement.querySelector(".card__title");
  const removeButton = cardElement.querySelector(".card__remove-button");

  // Populate the card
  imageEl.src = product.link;
  imageEl.alt = product.name;
  titleEl.textContent = product.name;

  // Add the remove listener
  removeButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Return the card element itself, not the fragment
  return cardElement;
}