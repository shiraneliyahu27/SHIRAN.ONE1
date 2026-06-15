const SUPABASE_URL = "https://agsemnxqnaofuvbtvacc.supabase.co";
const SUPABASE_KEY = "ה-KEY שלך";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

let products = [];

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

function displayProducts(productsList) {
  productGrid.innerHTML = "";

  productsList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const whatsappText = encodeURIComponent(
      `שלום שירן, אני מתעניינת במוצר: ${product.name}`
    );

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>₪${product.price}</span>
      <a class="small-btn" href="https://wa.me/972509456209?text=${whatsappText}" target="_blank">
        צור קשר ב-WhatsApp
      </a>
    `;

    productGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value) ||
    product.description.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});