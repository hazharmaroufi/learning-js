// formatPrice(2500000) ← "2,500,000 تومان"
// formatPrice(-500) ← "قیمت نامعتبر"
// formatPrice("سلام") ← "قیمت نامعتبر"



const formatPrice = (price) => {
  if (!Number.isFinite(price) || price < 0) {
    return "قیمت نامعتبر"
  }
  const localNumber = price.toLocaleString("en-US")
  return `${localNumber} تومان`
}

// تست‌ها: قبل از اجرا، خروجی هر خط را حدس بزن
console.log(formatPrice(2500000));
console.log(formatPrice(0));
console.log(formatPrice(-500));
console.log(formatPrice("سلام"));
console.log(formatPrice("2500"));
console.log(formatPrice(NaN));
console.log(formatPrice(Infinity));