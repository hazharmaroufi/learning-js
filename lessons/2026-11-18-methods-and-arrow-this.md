# جلسه‌ی ۱۸ نوامبر ۲۰۲۶ — متد با `this` و arrow function (هفته ۲، روز ۲، بخش آخر)

منبع: javascript.info ← Object methods, "this"

## یادآوری اول جلسه
`a.hi()` ← `A` و `b.hi()` ← `B` ✅ (سمت چپ نقطه)

## تمرین ساختنی — `methods.js`
`productInfo` را به متد `info` داخل خودِ محصول تبدیل کردم:

```js
info() {
  return `${this.name}: ${formatPrice(this.price)}, ${this.inStock ? "in stock" : "sold out"}`;
},
```

- همه‌جا `this` نوشتم، نه `bushDrill`. برای همین وقتی متد را به `makita` دادم، اسم و قیمت خودِ ماکیتا چاپ شد.
- `formatPrice` قبلی را دوباره استفاده کردم.
- تست هر دو مسیر: `inStock` ماکیتا را `false` کردم تا بخش `"sold out"` هم اجرا شود.

```
Bosch Drill: 2,500,000 تومان, in stock
Makita Saw: 2,700,000 تومان, sold out
```

درس: کدی که اجرا نشده، تست نشده. هر شاخه‌ی `if` یا `? :` را حداقل یک بار اجرا کن.

## arrow function و `this`
```js
const drill = {
  name: "Bosch Drill",
  info: () => this.name,
};
console.log(drill.info()); // undefined
```

- arrow function **`this` خودش را ندارد**؛ `this` را از بیرون از خودش برمی‌دارد، از جایی که **نوشته** شده.
- این‌جا بیرون از arrow، سطح بالای فایل است، نه `drill`. پس `this.name` چیزی پیدا نمی‌کند.
- قانون سمت چپ نقطه فقط برای تابع معمولی است.

## قانون‌ها
1. متد معمولی ← `this` = سمت چپ نقطه، لحظه‌ی صدا زدن.
2. arrow function ← `this` از بیرون، جایی که نوشته شده.
3. برای متدهای آبجکت از شکل کوتاه `info() { }` استفاده کن، نه arrow.

## مرور از سایت (۱۰ دقیقه)
صفحه‌ی **Object methods, "this"**، بخش **Arrow functions have no "this"** و بعد خودِ تمرین‌های آخر صفحه را فقط بخوان (حل نکن).

## قدم بعدی
روز ۳ برنامه: **Arrays** ← ساختن `products.js` با چند محصول واقعی ابزار.
