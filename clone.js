const bushDrill = {
  name: "دریل بوش",
  price: 2500000,
  inStock: true,
  specs: { power: 750 }
};

// const saleDrill = {};            // از چه چیزی شروع کنیم؟

// for (let key in bushDrill) {
//   saleDrill[key] = bushDrill[key];
// }
let saleDrill = structuredClone(bushDrill)

saleDrill.specs.power = 900;

// console.log(bushDrill.specs.power);
// console.log(saleDrill.specs.power);


const drill = {
  name: "Bosch Drill",
  info() {
    return this.name;
  },
};

const saw = { name: "Makita Saw" };

saw.info = drill.info;

console.log(saw.info());

console.log(drill.info());   // ؟
console.log(saw.info());     // Makita Saw