# جلسه‌ی ۱۵ نوامبر ۲۰۲۶ — Cloning و shallow copy (هفته ۲، روز ۲، بخش دوم)

منبع: javascript.info ← Object references and copying (بخش Cloning and merging)

## یادآوری اول جلسه
- `const copy = drill` فقط رفرنس را کپی می‌کند.
- فقط **یک** آبجکت وجود دارد؛ `drill` و `copy` دو متغیرند که هر دو رفرنس همان آبجکت را دارند.
- دو آبجکت با محتوای یکسان برابر نیستند، چون در دو مکان جدا هستند.

## تمرین ساختنی — `clone.js`
ساختن کپی مستقل با `for...in`:

```js
const saleDrill = {};
for (let key in bushDrill) {
  saleDrill[key] = bushDrill[key];
}
```
خودم نوشتم و درست کار کرد: قیمت اصلی 2500000 ماند، قیمت حراج 2000000 شد.

نکته‌ها:
- شروع از `{}` یعنی یک آبجکت جدید در مکان جدید.
- جهت کپی: از اصلی می‌خوانیم، در کپی می‌نویسیم.

## نسخه‌های کوتاه‌تر (همان کار حلقه)
```js
const saleDrill = Object.assign({}, bushDrill);
const saleDrill = { ...bushDrill };   // spread، رایج در React
```

## سؤال حدس‌زدنی — آبجکت تودرتو
```js
const bushDrill = { name: "دریل بوش", specs: { power: 750 } };
const saleDrill = { ...bushDrill };
saleDrill.specs.power = 900;
console.log(bushDrill.specs.power); // 900
```
حدس من: 900 ✅
دلیل: `specs` خودش آبجکت است، پس در خانه‌ی `specs` رفرنس نگه داشته می‌شود و همان رفرنس کپی شده.

## قانون‌های امروز
1. حلقه، `Object.assign` و spread فقط **یک لایه** را کپی می‌کنند. اسمش: **shallow copy** (کپی سطحی).
2. مقدارهای ساده (عدد، رشته، boolean) واقعاً کپی می‌شوند.
3. آبجکت‌های داخلی کپی نمی‌شوند؛ فقط رفرنسشان کپی می‌شود و بین اصلی و کپی مشترک می‌مانند.

## قدم بعدی
کپی کامل با `structuredClone` (deep copy)، بعد فصل **Object methods, "this"**.
