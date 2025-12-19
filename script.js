// در renderMenu():
category.items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('item-card');

    card.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.name}">` : '<div style="height:250px; background:#eee;"></div>'}
        <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-description">${item.description || ''}</div>
            <div class="item-price">${item.price}</div>
        </div>
    `;
    categoryDiv.appendChild(card);
});