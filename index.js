const category = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (element) => `
      <div class="accessories">
    <a href="produktliste.html?category=${element.category}">${element.category}</a>
    </div>
    `
    )
    .join("");
  console.log(markup);
  category.innerHTML = markup;
}
