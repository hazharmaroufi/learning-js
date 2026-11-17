# جلسه‌ی ۱۷ نوامبر ۲۰۲۶ — deep copy و شروع `this` (هفته ۲، روز ۲، بخش سوم)

منبع: javascript.info ← Object references and copying (Nested cloning) و Object methods, "this"

## یادآوری اول جلسه
- `for...in` را یادم بود (خودم ساخته بودمش). دو روش دیگر را با راهنمایی کامل کردم.
- اشتباه نوشتاری: فراخوانی تابع با پرانتز است، نه آکولاد ← `Object.assign({}, obj)`

دسته‌بندی:
- shallow (یک لایه): `for...in`، `Object.assign({}, obj)`، `{ ...obj }`
- deep (همه‌ی لایه‌ها): `structuredClone(obj)`

shallow copy وقتی کم می‌آورد که داخل آبجکت یک آبجکت دیگر باشد.

## تمرین — `structuredClone` در `clone.js`
```js
const saleDrill = structuredClone(bushDrill);
saleDrill.specs.power = 900;
console.log(bushDrill.specs.power); // 750
console.log(saleDrill.specs.power); // 900
```
حدس من: 750 ✅ — آبجکت اصلی دست‌نخورده ماند.

## متد و `this`
متد = تابعی که داخل یک خانه‌ی آبجکت است.

```js
const drill = {
  name: "Bosch Drill",
  info() {
    return this.name;
  },
};

const saw = { name: "Makita Saw" };
saw.info = drill.info;      // رفرنس همان تابع کپی شد

console.log(drill.info());  // Bosch Drill
console.log(saw.info());    // Makita Saw
```
هر دو خروجی را درست حدس زدم ✅

## قانون امروز
`this` یعنی **آبجکتی که سمت چپ نقطه است، در لحظه‌ی صدا زدن متد.**
- `drill.info()` ← `this` همان `drill` است
- `saw.info()` ← `this` همان `saw` است

مهم نیست تابع کجا **نوشته** شده؛ مهم این است که از طریق چه آبجکتی **صدا زده** می‌شود.
هیچ چیزی «آپدیت» نشد: یک تابع است که دو آبجکت رفرنسش را دارند.

## مرور از سایت (۱۰ دقیقه)
صفحه‌ی **Object methods, "this"** از اول تا آخر بخش «"this" is not bound». بخش arrow functions بماند برای بعد.

## قدم بعدی
تبدیل `productInfo` به متد داخل خودِ محصول، بعد `this` در arrow function.
