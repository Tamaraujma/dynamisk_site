const produktContainer = document.querySelector("#produkt_container");
const productID = 1163;

fetch(`https://kea-alt-del.dk/t7/api/products/${productID}`)
  .then((response) => response.json())
  .then((data) => {
    produktContainer.innerHTML = `<div class="produkt_billede">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produkt billede" />
      </div>

      <div class="produkt_info">
        <h2>${data.productdisplayname}</h2>
        <p><strong>Model name</strong><br />${data.articletype}</p>
        <p><strong>Color</strong><br />${data.basecolour}</p>
        <p><strong>Price:</strong><br />${data.price},-</p>
      </div>

      <div class="produkt_purchase">
        <h3>${data.productdisplayname}/h3>
        <p>${data.brand}</p>
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
