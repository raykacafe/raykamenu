// داده‌های منو (در صورت وجود، از localStorage بارگذاری می‌شود)
let menuData = JSON.parse(localStorage.getItem('menuData')) || [
    {
        category: 'بر پایه قهوه',
        items: [
            { name: 'اسپرسو دبل 100 روبستا', description: '60 میلی لیتر عصاره', price: '90,000', image: "images/Espresso.png" },
            { name: 'اسپرسو دبل 100 عربیکا', description: '60 میلی لیتر عصاره', price: '115,000' },
            { name: 'آمریکانو (عربیکا)', description: '120 میلی لیتر', price: '120,000', image: "images/Americano.png" },
            { name: 'کاپوچینو', description: 'اسپرسو، شیر کف دار', price: '115,000' },
            { name: 'لاته', description: 'اسپرسو، شیر بخار داده', price: '115,000' },
            { name: 'موکا', description: 'اسپرسو، شیر، شکلات', price: '130,000' },
            { name: 'ماکیاتو', description: 'اسپرسو با کف شیر', price: '130,000' },
            { name: 'نسکافه', description: 'اسپرسو، شیر، خامه', price: '115,000' },
            { name: 'قهوه ترک', description: 'قهوه ترک سنتی', price: '90,000' },
            { name: 'لاته وانیل', description: 'اسپرسو، شیر، وانیل سیروپ', price: '130,000' },
            { name: 'لاته کارامل', description: 'اسپرسو، شیر، کارامل سیروپ', price: '130,000' },
            { name: 'لاته زعفران', description: 'اسپرسو، شیر،  زعفران', price: '150,000' },


        ]
    },
    {
        category: 'قهوه نسل سوم',
        items: [
        
            { name: 'کمکس', description: 'قهوه 100 عربیکا تازه رست', price: '215,000' }
        ]
    },
    {
        category: 'سرد بر پایه قهوه',
        items: [
            { name: 'آفوگاتو', description: 'دبل اسپرسو و اسکوپ بستنی وانیل', price: '120,000' },
            { name: 'آیس آمریکانو (عربیکا)', description: 'آمریکانو، یخ', price: '120,000' },
            { name: 'کلد برو', description: ' 100 میلی لیتر', price: '110,000' },
            { name: 'آیس لاته', description: 'اسپرسو، شیر، یخ', price: '115,000' },
            { name: 'آیس موکا', description: 'اسپرسو، شیر، شکلات، یخ', price: '130,000' },
            { name: 'آیس  کارامل ماکیاتو', description: 'اسپرسو، شیر، کارامل سیروپ، یخ', price: '130,000' },
            { name: 'آیس وانیل ماکیاتو', description: 'اسپرسو، شیر، وانیل سیروپ، یخ', price: '130,000' },
            { name: 'ماکتیل‌ها', description: 'بدون الکل', price: '110,000' }

            
        ]
    },
    {
        category: 'گرم نوش',
        items: [
            { name: 'پینک چاکلت', description: 'شیر و شکلات', price: '125,000' },
            { name: 'شیر بیسکوییت کارامل', description: 'خوشمزه', price: '125,000' },
            { name: 'شیر پسته زعفران', description: 'طعم خاص', price: '135,000' },
            { name: 'شیر شکلات', description: 'کلاسیک', price: '125,000' }
        ]
    },
    {
        category: 'چای و دمنوش',
        items: [
            { name: 'چای سیاه', description: 'چای سیاه خوش طعم', price: '80,000' },
            { name: 'آویشن آبلیمو عسل', description: 'دمنوش طبیعی', price: '100,000' },
            { name: 'بهلیمو', description: 'دمنوش بهلیمو و نبات', price: '90,000' },
            { name: 'چای بهار نارنج', description: 'چای سیاه خوشمزه', price: '95,000' }
        ]
    },
    {
        category: 'بستنی و شیک',
        items: [
            { name: 'شیک شکلاتی', description: 'بستنی شکلات ، شیر' , price: '170,000' },
            { name: 'شیک توت فرنگی', description: 'بستنی توت فرنگی ', price: '150,000' },
            { name: 'شیک وانیل', description: ' بستنی وانیل', price: '145,000' },
        ]
    },
    {
        category: 'آبمیوه و اسموتی',
        items: [
            { name: 'آب انار', description: 'آب انار طبیعی', price: '120,000' },
            { name: 'آب پرتغال انار', description: 'میکس طبیعی', price: '125,000' },
            { name: 'آب طالبی', description: 'میوه تازه', price: '120,000' }
        ]
    },
    {
        category: 'ماکتل',
        items: [
            { name: 'اقیانوس آبی', description: 'حاوی کربن فعال', price: '145,000' },
            { name: 'پرتغال خونی', description: 'شیرین و خوشمزه', price: '145,000' },
            { name: 'لیموناد', description: 'حاوی عسل', price: '120,000' }
        ]
    },
    {
        category: 'کیک‌ها',
        items: [
            { name: 'براونی بستنی', description: 'کیک نرم', price: '215,000' },
            { name: 'برونی', description: 'شکلات تلخ', price: '135,000' },
            { name: 'سنسباستین', description: 'کیک فرانسوی', price: '160,000' },
            { name: 'کوکی دبل چاکلت', description: 'تازه', price: '45,000' }
        ]
    },
    {
        category: 'صبحانه',
        items: [
            { name: 'املت', description: '2 تخم مرغ و رب گوجه', price: '125,000' },
            { name: 'سوسیس تخم مرغ', description: 'فقط تا 13:30', price: '150,000' },
            { name: 'نیمرو', description: 'تخم مرغ نیمرو', price: '140,000' }
        ]
    },
    {
        category: 'خوشمزگی',
        items: [
            { name: 'اسنک ژامبون', description: '4 تکه اسنک و سس', price: '225,000' },
            { name: 'بمب سیب', description: '800 گرم سیب', price: '365,000' },
            { name: 'پاستا آلفردو', description: 'کریمی', price: '355,000' }
        ]
    },
    {
        category: 'افزودنی',
        items: [
            { name: 'آب', description: 'آب معدنی', price: '15,000' },
            { name: 'افزودنی', description: 'سیروپ‌های مختلف', price: '80,000' },
            { name: 'سیروپ', description: 'انواع سیروپ', price: '20,000' }
        ]
    },
    {
        category: 'سرد نوش',
        items: [
            { name: 'شیر موز', description: 'بستنی و شیر', price: '120,000' },
            { name: 'شیر موز بستنی', description: 'خوشمزه', price: '145,000' },
            { name: 'شیر موز رژیمی', description: 'بدون شکر', price: '140,000' },
            { name: 'موهیتو', description: 'نعناع و لیمو', price: '130,000' }
        ]
    }
];

// اگر admin هنوز menuData را در localStorage ننوشته، می‌ماند از آرایهٔ بالا استفاده شود

// گوش دادن به تغییرات storage از تب/پنجره دیگر (پنل مدیریت)
window.addEventListener('storage', (e) => {
    if (e.key === 'menuData') {
        try {
            menuData = JSON.parse(e.newValue) || [];
        } catch (err) {
            console.warn('Failed to parse menuData from storage event', err);
            menuData = [];
        }
        renderMenu();
    }
});

// متغیر سبد خرید
let cart = [];

// تابع برای تبدیل قیمت از رشته به عدد
function parsePrice(priceStr) {
    return parseInt(priceStr.replace(/,/g, ''));
}

// تابع برای تبدیل عدد به قالب فارسی
function toPersianNum(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, d => persianDigits[d]);
}

// تابع برای فرمت کردن قیمت
function formatPrice(num) {
    return toPersianNum(num.toLocaleString('en-US'));
}

// تابع برای اضافه کردن آیتم به سبد
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: item.name,
            price: parsePrice(item.price),
            quantity: 1
        });
    }
    
    updateCartDisplay();
}

// تابع برای حذف آیتم از سبد
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
}

// تابع برای کاهش تعداد آیتم
function decreaseQuantity(itemName) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(itemName);
        }
        updateCartDisplay();
    }
}

// تابع برای افزایش تعداد آیتم
function increaseQuantity(itemName) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity += 1;
        updateCartDisplay();
    }
}

// تابع برای خالی کردن سبد
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// تابع برای محاسبه جمع کل
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// تابع برای به‌روزرسانی نمایش سبد
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li class="empty-cart-msg">سبد خرید خالی است</li>';
        cartTotalPrice.textContent = '۰';
        return;
    }
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="cart-item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-total">${formatPrice(item.price * item.quantity)}</span>
            </div>
            <div class="cart-item-controls">
                <button class="btn-qty" onclick="decreaseQuantity('${item.name}')">-</button>
                <span class="qty">${toPersianNum(item.quantity)}</span>
                <button class="btn-qty" onclick="increaseQuantity('${item.name}')">+</button>
                <button class="btn-remove" onclick="removeFromCart('${item.name}')">حذف</button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });
    
    const total = calculateTotal();
    cartTotalPrice.textContent = formatPrice(total) + ' تومان';
}

// تابع رندر کردن منو
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    const categoryNav = document.getElementById('category-tabs');
    
    menuContainer.innerHTML = '';
    categoryNav.innerHTML = '';

    // ایجاد تب‌های دسته‌بندی
    menuData.forEach((categoryData, index) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'category-tab' + (index === 0 ? ' active' : '');
        tabBtn.textContent = categoryData.category;
        tabBtn.dataset.index = index;
        
        tabBtn.addEventListener('click', () => {
            // حذف کلاس active از تمام تب‌ها
            document.querySelectorAll('.category-tab').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            
            // حذف کلاس active از تمام دسته‌بندی‌ها
            document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
            // اضافه کردن کلاس active به دسته‌بندی مورد نظر
            document.querySelector(`.category[data-index="${index}"]`).classList.add('active');
        });
        
        categoryNav.appendChild(tabBtn);
    });

    // ایجاد دسته‌بندی‌ها
    menuData.forEach((categoryData, categoryIndex) => {
        const categoryDiv = document.createElement('section');
        categoryDiv.className = 'category' + (categoryIndex === 0 ? ' active' : '');
        categoryDiv.dataset.index = categoryIndex;

        // سطح آیتم‌ها
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        // رندر کردن هر آیتم
        categoryData.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.style.cursor = 'pointer';

            card.innerHTML = `
                <div class="placeholder-img">🍰</div>
                <div class="item-info">
                    <span class="item-name">${item.name}</span>
                    <span class="item-description">${item.description}</span>
                    <span class="item-price">${item.price}</span>
                </div>
            `;
            
            // اضافه کردن رویداد کلیک
            card.addEventListener('click', () => {
                addToCart(item);
            });

            itemsGrid.appendChild(card);
        });

        categoryDiv.appendChild(itemsGrid);
        menuContainer.appendChild(categoryDiv);
    });
}

// تابع برای بستن سبد خالی
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// فراخوانی هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    
    // رویداد دکمه خالی کردن سبد
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    // رویداد دکمه ثبت سفارش
    const submitOrderBtn = document.getElementById('submit-order-btn');
    if (submitOrderBtn) {
        submitOrderBtn.addEventListener('click', submitOrder);
    }
    
    // شروع با نمایش سبد خالی
    updateCartDisplay();
});

// تابع برای ثبت سفارش
function submitOrder() {
    const tableNumber = document.getElementById('table-number').value;
    
    // بررسی اینکه سبد خالی نیست
    if (cart.length === 0) {
        alert('سبد خرید خالی است. لطفا آیتم اضافه کنید.');
        return;
    }
    
    // بررسی شماره میز
    if (!tableNumber || tableNumber.trim() === '') {
        alert('لطفا شماره میز را وارد کنید.');
        return;
    }
    
    // تشکیل پیام سفارش
    let orderMessage = `سفارش جدید:\n\nشماره میز: ${tableNumber}\n\n`;
    orderMessage += 'آیتم‌های سفارش:\n';
    
    cart.forEach(item => {
        orderMessage += `- ${item.name} (${item.quantity}x ${formatPrice(item.price)})\n`;
    });
    
    const total = calculateTotal();
    orderMessage += `\nجمع کل: ${formatPrice(total)} تومان`;
    
    // ذخیره سفارش در localStorage برای پنل مدیریت
    const cartOrders = JSON.parse(localStorage.getItem('cartOrders')) || [];
    const nextOrderId = parseInt(localStorage.getItem('nextOrderId')) || 1;
    
    const newOrder = {
        id: nextOrderId,
        tableNumber: tableNumber,
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    cartOrders.push(newOrder);
    localStorage.setItem('cartOrders', JSON.stringify(cartOrders));
    localStorage.setItem('nextOrderId', (nextOrderId + 1).toString());
    
    // نمایش پیام تأیید
    console.log(orderMessage);
    alert('سفارش با موفقیت ثبت شد!');
    
    // پاک کردن سبد و شماره میز بعد از ثبت
    clearCart();
    document.getElementById('table-number').value = '';
}