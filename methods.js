const formatPrice = (price) => {
  if (!Number.isFinite(price) || price < 0) {
    return "قیمت نامعتبر"
  }
  const localNumber = price.toLocaleString("en-US")
  return `${localNumber} تومان`
}

const bushDrill = {
  name: "Bosch Drill",
  price: 2500000,
  inStock: true,
  info() {
    return `${this.name}: ${formatPrice(this.price)}, ${this.inStock ? "in stock" : "sold out"}`;
  },
};

const makita = {
  name: "Makita Saw",
  price: 2700000,
  inStock: false,
}

makita.info = bushDrill.info;


console.log(bushDrill.info());
console.log(makita.info());

const drill = {
  name: "Bosch Drill",
  info: () => {
    return this.name;
  },
};

console.log(drill.info());