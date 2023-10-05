const fab = document.querySelector(".float");

const icon = document.querySelector(".my-float");

const navigationShop = document.getElementById("shop");

fab.addEventListener("click", function () {
  navigationShop.classList.toggle("visible");
  fab.classList.toggle("otherOrange")
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");
});