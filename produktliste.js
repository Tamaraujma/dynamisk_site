const listContainer = document.querySelector("#liste");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="billede_1">
        <a href="produkt.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.basecolour}" />
        </a>
        <h4>${product.productdisplayname}</h4>
        <p>${product.articletype}</p>
        <p>DKK ${product.price}-</p>
      </div>
      `;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
