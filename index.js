import Items from "./items.js";

console.log(Items)
const itemsGrid = document.querySelector(".items-grid");
const sectionVarButtons= Array.from(document.querySelectorAll(".section-types"));
console.log(sectionVarButtons)

const showItems= (Type)=>{
    Type.forEach((item) => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item.name;
        itemsGrid.appendChild(div);
      });
}

document.addEventListener("DOMContentLoaded", ()=>{
    showItems(Items.vegetables);
});

sectionVarButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const dataType=btn.getAttribute("data-type");
        if(dataType!=='extra'){
            return showItems(Items.dataType);
        }
    })
})