// Inventory Data
let inventory = [
  { name: "Laptop", category: "Electronics", price: 27000, stock: 6 },
  { name: "Phone", category: "Electronics", price: 6000, stock: 3 },
  { name: "Shirt", category: "Clothing", price: 150, stock: 15 },
  { name: "Pants", category: "Clothing", price: 299, stock: 10 },
  { name: "Book", category: "Education", price: 250, stock: 20 }
];

function calculateTotalValue(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].stock;
  }
  return total;
}

function findHighestPricedProduct(products) {
  let highest = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > highest.price) {
      highest = products[i];
    }
  }
  return highest;
}

function filterLowStock(products) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock < 5) {
      result.push(products[i]);
    }
  }
  return result;
}

function groupByCategory(products) {
  let groups = {};
  for (let i = 0; i < products.length; i++) {
    let category = products[i].category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(products[i]);
  }
  return groups;
}

function showTotalValue() {
  document.getElementById("output").textContent =
    "Total value of all stocks: " + calculateTotalValue(inventory);
}

function showHighestProduct() {
  let product = findHighestPricedProduct(inventory);
  document.getElementById("output").textContent =
    "Highest Priced Product:\n" + JSON.stringify(product, null, 2);
}

function showLowStock() { 
  let lowStock = filterLowStock(inventory);
  document.getElementById("output").textContent =
    "Low Stock Products:\n" + JSON.stringify(lowStock, null, 2);
}

function showGrouped() {
  let grouped = groupByCategory(inventory);
  document.getElementById("output").textContent =
    "Grouped Products by Category:\n" + JSON.stringify(grouped, null, 2);
}