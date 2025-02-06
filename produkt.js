const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("productId");

// const produktContainer = document.querySelector("#produkt_container");
// const productID = 1163;

console.log("productId", productId);

let produktContainer = document.querySelector("#produkt_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    produktContainer.innerHTML = `<div class="produkt_billede">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produkt billede" />
      </div>

      <div class="produkt_info">
        <h2>${data.productdisplayname}</h2>
        <p><strong>Model name</strong><br />${data.articletype}</p>
        <p><strong>Color</strong><br />${data.basecolour}</p>
        <p><strong>Price:</strong><br />${data.price},-</p>
        <p class="tilbud ${data.discount && "isOnSale"}">-${data.discount}%</p>
        <p class="udsolgt ${data.soldout && "soldOut"}">Udsolgt</p>
      </div>

      <div class="produkt_purchase">
        <h3>${data.productdisplayname}</h3>
        <p class= produkt_p>${data.brandname}</p>
        <div class="produkt_info"></div>
        <div class="produkt_purchase">
          <label for="size">Choose a size</label>
          <select id="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <button class="add-to-basket">Add to basket</button>
        </div>
      </div>`;
  });
