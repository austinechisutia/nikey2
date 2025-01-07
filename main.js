import { products } from "./products.js";

let productsHTML = "";
products.forEach((product)=>{
  productsHTML += `
    <div class="one" data-product-id="${product.id}">
          <img src="${product.image}" alt="">
        </div>
  `
  console.log(productsHTML)
})
const sneakers = document.querySelector(".js-part4-images");
sneakers.innerHTML = productsHTML;

document.querySelectorAll(".js-part4-images").forEach((sneaker)=>{
  sneaker.addEventListener("click", ()=>{
    const productId = sneaker.dataset.productId;
    console.log(productId);
  })
})



