pwd
cd
ls
--help
mv
cp
rm
mkdir
man ls
ctrl+l
echo hello > hello.txt
cat
cat hello.txt > hello2.txt
tail -n 1
| پایپ
ls il / | tail -n 1
sudo
echo 500 > text.txt
append >>
sudo su
open index.php

---

آبجکتها رفرنس تایپ هستن یعنی مسیر محتوا رو توی خودشون ذخیره میکنن
Object.assign(dest, ...sources)
let clone = structuredClone(use)
---
وقتی یک آبجکت رو کپی میکنی باید حواست باشه اگه داخلش آبجکت دیگه ای بود فقط رفرنسش کپی میشه نه خود آبجکت



----

مهم نیست تابع در کجا نوشته شده است مهم اینه که از طریق چه آبجکتی صدا زده میشه.

---
برای this اگه در تابع معمولی باشه از داخل آبجکت برمیداره اطلاعات رو ولی اگه اروو فانکش باشه از بیرون آبجکت برمیداره.
const obj ={
  info(){}
}

----