import Items from "./items";

const itemsGrid = document.querySelector(".items-grid");

window.addEventListener("load", () => {
  Items.vegetables.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item.name;
    itemsGrid.childNodes = div;
  });
});
