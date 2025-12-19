const menuItems = [
  { name:"آمریکانو", description:"قهوه اسپرسو با آب داغ", price:"₩45,000", image:"images/coffee1.jpg", category:"coffee" },
  { name:"کاپوچینو", description:"قهوه با شیر کف‌دار", price:"₩50,000", image:"images/cappuccino.jpg", category:"coffee" },
  { name:"نوشابه", description:"نوشیدنی خنک", price:"₩15,000", image:"images/drink1.jpg", category:"drinks" },
  { name:"براونی", description:"کیک شکلاتی", price:"₩25,000", image:"images/dessert1.jpg", category:"dessert" }
];

const menuContainer = document.getElementById("menuContainer");
const categoryBtns = document.querySelectorAll(".category-btn");

function displayMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p class="description">${item.description}</p>
      <span class="price">${item.price}</span>
    `;
    menuContainer.appendChild(card);
  });
}

// نمایش همه کارت‌ها ابتدا
displayMenu(menuItems);

// فیلتر دسته‌بندی
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    if(category === "all") displayMenu(menuItems);
    else displayMenu(menuItems.filter(i => i.category === category));
  });
});
