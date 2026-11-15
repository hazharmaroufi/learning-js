const bushDrill = { name: "دریل بوش", price: 2500000, inStock: true };

const saleDrill = {};            // از چه چیزی شروع کنیم؟

for (let key in bushDrill) {
  saleDrill[key] = bushDrill[key];
}

saleDrill.price = 2000000;

console.log(bushDrill.price);     // باید 2500000 بماند
console.log(saleDrill.price);     // باید 2000000 باشد