const myCategory = new URLSearchParams(window.location.search).get("category");
const listContainer = document.querySelector("#liste");
const overskrift = document.querySelector("category_headline");

console.log("Henter data for kategori:", myCategory);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  //   // Opretter en tom markup-streng udenfor map()
  const markup = products
    .map(
      (product) => `
    <div class="billede_1">
        <a href="produkt.html?productId=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.basecolour}" />
        </a>
    <a href="produkt.html?productId=${product.id}">
        <h4>${product.productdisplayname}</h4></a>
        <p>${product.articletype}</p>
        <p>DKK ${product.price},-</p>
        <p class="tilbud ${product.discount && "isOnSale"}">-${product.discount}%</p>
        <p class="udsolgt ${product.soldout && "soldOut"}">Udsolgt</p>
      </div>
      `
    )
    .join("");
  listContainer.innerHTML = markup;
}
