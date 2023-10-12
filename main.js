let productSlide = document.querySelectorAll(".slide img");
let productShoes = document.querySelectorAll(".shoes img");

productSlide.forEach((ele) => {
  ele.addEventListener("click", (el) => {
    productSlide.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.currentTarget.classList.add("active");
    productShoes.forEach((img) => {
      img.classList.remove("active");
    });
    document
      .querySelector(el.currentTarget.dataset.cont)
      .classList.add("active");
  });
});
