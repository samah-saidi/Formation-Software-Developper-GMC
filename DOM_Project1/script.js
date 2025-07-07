// Récupérer tous les éléments nécessaires
let plusBtns = document.querySelectorAll(".plus-btn");
let minusBtns = document.querySelectorAll(".minus-btn");
let deleteBtns = document.querySelectorAll(".delete-btn");
let likeBtns = document.querySelectorAll(".like-btn");
let totalPriceElement = document.getElementById("total-price");

// Calcul du total au chargement de la page
updateTotal();

// Ajouter les events sur les boutons +
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantityElement = btn.previousElementSibling;
    quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
    updateTotal();
  });
});

// Ajouter les events sur les boutons -
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quantityElement = btn.nextElementSibling;
    if (parseInt(quantityElement.innerText) > 0) {
      quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
      updateTotal();
    }
  });
});

// Ajouter les events sur les boutons delete
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".item").remove();
    updateTotal();
  });
});

// Ajouter les events sur les boutons like
likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// Fonction de mise à jour du total
function updateTotal() {
  let items = document.querySelectorAll(".item");
  let total = 0;

  items.forEach((item) => {
    let price = parseFloat(item.querySelector(".price").innerText);
    let quantity = parseInt(item.querySelector(".quantity").innerText);
    total += price * quantity;
  });

  totalPriceElement.innerText = total.toFixed(2) ;
}
