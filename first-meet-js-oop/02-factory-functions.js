function createProduct(id, name, price) {
  return {
    id,
    name,
    price,
    render() {
      return `${this.name} costs ฿${this.price}`;
    },
  };
}

const product1 = createProduct(1, "Coffee Mug", 250);
const product2 = createProduct(2, "Tea Cup", 200);

console.log(product1.render()); // "Coffee Mug costs ฿250"
console.log(product2.render()); // "Tea Cup costs ฿200"
