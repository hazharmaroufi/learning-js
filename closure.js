// // تمرین الف: دو شمارنده‌ی جدا
// function makeCounter() {
//   let count = 0;
//   return () => ++count;
// }
// const a = makeCounter();
// const b = makeCounter();
// a(); a(); a();
// b();
// console.log(a()); // حدس من: 4
// console.log(b()); // حدس من: 2

// // تمرین ب: سؤال ۶ آزمون اول، یک بار با var و یک بار با let
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var:", i), 0);
// }
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log("let:", j), 0);
// }

// تابعی به اسم
// makeDiscount
// بنویس که درصد تخفیف بگیرد و یک تابع برگرداند؛ تابعی که قیمت بگیرد و قیمت بعد از تخفیف را بدهد:
//  یعنی هر تابع تخفیف، درصد خودش را «به خاطر بسپارد». این دقیقاً
// closure
// است. برای امتیاز اضافه: خروجی را با
// formatPrice
// خودت قالب‌بندی کن.

const makeDiscount = (percent) => {
  return (price) => {
    return (price - (percent * price) / 100)
  }
}

const blackFriday = makeDiscount(30);
const vip = makeDiscount(10);

console.log(blackFriday(1000000)); // 700000
console.log(vip(1000000));         // 900000