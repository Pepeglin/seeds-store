const seeds = {
  "Legendary": ["Манго", "Авокадо", "Арбуз", "Персик", "Лимон"],
  "Mythic": ["Гранат", "Ананас", "Апельсин", "Киви"],
  "Default": ["Яблоко", "Банан", "Клубника", "Огурец"]
};

function generateStock() {
  const stockDiv = document.getElementById('stock');
  stockDiv.innerHTML = '';

  for (const [category, items] of Object.entries(seeds)) {
    const catDiv = document.createElement('div');
    catDiv.classList.add('category');

    const catTitle = document.createElement('h2');
    catTitle.textContent = category;
    catDiv.appendChild(catTitle);

    items.forEach(item => {
      const quantity = Math.floor(Math.random() * 10) + 1;
      const price = (Math.random() * 9 + 1).toFixed(2);
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.textContent = `${item} x${quantity} – $${price} each`;
      catDiv.appendChild(itemDiv);
    });

    stockDiv.appendChild(catDiv);
  }
}

// Generate on load
generateStock();

// Update every minute
setInterval(generateStock, 60000);
