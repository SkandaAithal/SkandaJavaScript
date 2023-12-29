let products_list = document.getElementById("products_list");

let productsApi = fetch("https://fakestoreapi.com/products");

productsApi
  .then((data) => data.json())
  .then((products) => {
    console.log(products);
    products.map(({ id, title, price, description, image }) => {
      products_list.innerHTML += `     
       <div class="container">
        <div class="heading">
          <h3>${id}</h3>
          <h1>${title}</h1>
        </div>
        <div class="info">
          <img src=${image} alt="" />
          <div class="description">
            <p>${description}</p>
            <a href="">${price} $</a>
          </div>
        </div>
      </div>`;
    });
  })
  .catch((error) => {
    console.log("not found", error);
  });
