const product1 = {
  id: 1,
  name: "Coffee Mug",
  price: 250,
  render: function () {
    return `${this.name} costs ฿${this.price}`;
  },
};

console.log(product1.render()); // "Coffee Mug costs ฿250"

const product2 = {
  id: 2,
  name: "Tea Cup",
  price: 200,
  render: function () {
    return `${this.name} costs ฿${this.price}`;
  },
};

console.log(product2.render()); // "Tea Cup costs ฿200"
