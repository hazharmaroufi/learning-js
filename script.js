
// let adminInput = prompt("username:  ");
// if (adminInput === "Admin") {
//   let passwordInput = prompt("password: ")
//   if (passwordInput === "TheMaster") {
//     alert("Welcome!")
//   } else if (passwordInput === "" || passwordInput === null) {
//     alert("Canceled")
//   } else {
//     alert("Wrong password")
//   }

// } else if (adminInput === "" || adminInput === null) {
//   alert("Canceled")
// } else {
//   alert("I don't know you")
// }



// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true
// }

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";


// alert(isEmpty(schedule)); // false


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);



// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// console.log(menu);


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

// تمرین: یک محصول را به شکل شیء تعریف کن (اسم، قیمت، موجودی، دسته‌بندی)
// و تابعی بنویس که
//  شیء را بگیرد و جمله‌ای مثل «دریل بوش: ۲,۵۰۰,۰۰۰ تومان، موجود» برگرداند. از
// `formatPrice` خودت استفاده کن

// const formatPrice = (price) => {
//   if (!Number.isFinite(price) || price < 0) {
//     return "قیمت نامعتبر"
//   }
//   const localNumber = price.toLocaleString("en-US")
//   return `${localNumber} تومان`
// }

// const bushDrill = {
//   name: "دریل بوش",
//   price: 2500000,
//   inStock: true,
//   category: "Drills",
// }

// function productInfo({ name, price, inStock }) {
//   return `${name} : ${formatPrice(price)} , ${inStock ? "موجود" : "تمام شده"}`
// }
// console.log(productInfo(bushDrill));


