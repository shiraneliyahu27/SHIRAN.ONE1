const SUPABASE_URL = "https://agsemnxqnaofuvbtvacc.supabase.co";
const SUPABASE_KEY = "כאן_להדביק_את_ה_publishable_key_שלך";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const form = document.getElementById("productForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  message.textContent = "מעלה מוצר...";

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const imageFile = document.getElementById("image").files[0];

  const fileName = Date.now() + "-" + imageFile.name;

  const { error: uploadError } = await supabaseClient.storage
    .from("products")
    .