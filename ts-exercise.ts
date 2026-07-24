function printProduct(p) {
  console.log("Product: " + p.name.toUpperCase());
  console.log("Price: €" + p.price.toFixed(2));

  if (p.tags && p.tags.length > 0) {
    console.log("Tags: " + p.tags.join(", "));
  }

  if (p.discount) {
    console.log("Discount: " + (p.discount * 100).toFixed(0) + "%");
  }

  console.log("Availability:", p.availability);
  console.log("-".repeat(30));
}

function listAvailableProducts(products) {
  console.log("=== Available Products ===");
  for (const p of products) {
    if (p.availability === "in stock") {
      printProduct(p);
    }
  }
}

const beers = [
  { name: "Beer", price: 2.5, tags: ["alcohol", "cold"], availability: "in stock" },
  { name: "Soda", price: 1.2, availability: "out of stock" },
  { name: "Chips", price: 1.8, tags: "snack", availability: "in stock" },
  { name: "Water", price: 0.99, discount: 0.1, availability: "in stock" },
  { name: "Juice", price: "2.0", discount: 0.05, availability: "maybe" }
];

listAvailableProducts(beers);
