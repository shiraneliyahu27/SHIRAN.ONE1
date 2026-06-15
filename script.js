const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchValue) || description.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});