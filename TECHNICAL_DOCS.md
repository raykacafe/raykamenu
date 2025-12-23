# توثیق فنی - پنل مدیریت

## 🏗️ معماری

```
صفحه مشتری (index.html)
    ↓ (submit order)
    ↓
localStorage (cartOrders)
    ↓
پنل مدیریت (admin.html)
    ↓ (process & update)
    ↓
localStorage (orders)
```

## 📊 ساختار localStorage

### 1. cartOrders (سفارش‌های مشتری)
```javascript
{
  id: 1,
  tableNumber: "5",
  items: [
    { name: "کاپوچینو", price: 115000, quantity: 2 },
    { name: "براونی", price: 215000, quantity: 1 }
  ],
  timestamp: "2025-12-21T10:30:00.000Z",
  status: "pending"
}
```

### 2. orders (سفارش‌های پنل مدیریت)
```javascript
{
  id: 1,
  tableNumber: "5",
  items: [ ... ],
  timestamp: "2025-12-21T10:30:00.000Z",
  status: "completed"
}
```

### 3. nextOrderId
```
2 (شماره سفارش بعدی)
```

### 4. adminLoggedIn
```
"true" یا "false"
```

## 🔄 جریان عملیات

### الف: ثبت سفارش
```
مشتری: index.html
├─ انتخاب آیتم‌ها
├─ شماره میز را وارد می‌کند
├─ کلیک "ثبت سفارش"
│
script.js: submitOrder()
├─ بررسی سبد
├─ بررسی شماره میز
├─ ایجاد شیء سفارش
├─ ذخیره در localStorage (cartOrders)
├─ نمایش پیام موفقیت
└─ پاک‌سازی سبد

localStorage: cartOrders ← سفارش جدید اضافه شد
```

### ب: مشاهده سفارش توسط مدیر
```
مدیر: admin.html
├─ ورود (رمزعبور)
│
admin.js: loadOrders()
├─ بارگیری cartOrders
├─ ادغام با orders
├─ ذخیره در localStorage
│
admin.js: displayOrders()
├─ خواندن orders
├─ رندر کارت‌های سفارش
└─ نمایش در صفحه

localStorage:
├─ cartOrders (خوانده شد)
└─ orders (نوشته شد)
```

### ج: تغییر وضعیت سفارش
```
مدیر: دکمه "تکمیل"
│
admin.js: completeOrder(id)
├─ پیدا کردن سفارش در orders
├─ تغییر status به "completed"
├─ ذخیره در localStorage
├─ updateReports()
└─ displayOrders()

localStorage: orders ← status تغییر یافت
```

### د: دانلود گزارش
```
مدیر: دکمه "دانلود CSV"
│
admin.js: exportReport('csv')
├─ محاسبه آمار کلی
├─ خواندن تمام سفارش‌ها
├─ ایجاد متن CSV
├─ تولید Blob
├─ دانلود فایل
└─ حذف Blob

فایل: report.csv ← دانلود شد
```

## 🛠️ توابع کلیدی

### در script.js
```javascript
submitOrder() {
  // مطابقت سفارش با localStorage
  // شماره سفارش +1
  // ذخیره در cartOrders
}
```

### در admin.js
```javascript
showLoginPage()        // نمایش صفحه لاگین
showDashboard()        // نمایش داشبورد
addItemForm submit     // افزودن آیتم
editItem(id, cat)      // ویرایش آیتم
deleteItem(id, cat)    // حذف آیتم
loadOrders()           // بارگیری سفارش‌ها
displayOrders(filter)  // نمایش سفارش‌ها
completeOrder(id)      // تکمیل سفارش
deleteOrder(id)        // حذف سفارش
updateReports()        // محاسبه آمار
exportReport(format)   // دانلود گزارش
```

## 🔐 امنیت

### مسائل فعلی ⚠️
```
1. رمزعبور در کد قابل دیدن است (ADMIN_PASSWORD)
2. هیچ رمزنگاری وجود ندارد
3. localStorage متعلق به هر کاربر است
4. نیاز به سرور برای امنیت بهتر
```

### پیشنهادات بهتر شدن ✅
```
1. رمزعبور را در سرور بررسی کنید
2. از Token یا Session استفاده کنید
3. HTTPS برای انتقال اطلاعات
4. پایگاه داده برای ذخیره‌سازی
5. ورود دو مرحله‌ای (2FA)
6. Log کردن تمام عملیات
```

## 📱 سازگاری

| ویژگی | وضعیت | نکات |
|------|------|------|
| localStorage | ✅ | تمام مرورگرها |
| IndexedDB | ❌ | برای بهتر شدن |
| Service Worker | ❌ | برای آفلاین |
| Sync API | ❌ | برای بک‌گراند |
| PWA | ❌ | برای نصب برنامه |

## 🔍 Debugging

### در Console (F12):
```javascript
// مشاهده سفارش‌ها
JSON.parse(localStorage.getItem('orders'))

// مشاهده cartOrders
JSON.parse(localStorage.getItem('cartOrders'))

// مشاهده وضعیت لاگین
localStorage.getItem('adminLoggedIn')

// پاک کردن همه داده‌ها
localStorage.clear()

// پاک کردن یک آیتم
localStorage.removeItem('orders')
```

## 📈 بهبودهای آتی

- [ ] اتصال به API/سرور
- [ ] پایگاه داده (MongoDB, Firebase, وغیره)
- [ ] توقف خودکار سفارش قدیم
- [ ] اطلاع‌رسانی real-time (Socket.io)
- [ ] تصاویر برای آیتم‌ها
- [ ] سطح‌های دسترسی (Admin, Cashier, Chef)
- [ ] چاپ سفارش برای آشپزخانه
- [ ] پیامک/ایمیل تأیید
- [ ] QR کد برای میز
- [ ] Analytics پیشرفته
- [ ] Mobile App
- [ ] بارکد برای آیتم‌ها

## 🐛 مشکلات شناخته شده

1. اگر localStorage پاک شود، تمام داده‌ها حذف می‌شود
2. نیاز به صفحه جدید برای بروزرسانی صفحه (Refresh)
3. منطقه زمانی مرورگر برای تاریخ/زمان
4. محدودیت فضای localStorage (~5-10MB)

## 📝 نسخه‌گذاری

```
v1.0.0 - نسخه اولیه
├─ لاگین با رمزعبور
├─ مدیریت آیتم‌ها (CRUD)
├─ مدیریت سفارش‌ها
├─ گزارش‌گیری
└─ دانلود CSV
```

---

**آخرین به‌روزرسانی**: 21 دسامبر 2025
