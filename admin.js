// پسورد مدیریت (در یک پروژه واقعی باید در سرور باشد)
const ADMIN_PASSWORD = '12345';

// داده‌های منو - مشابه script.js
let menuData = [
    {
        category: 'بر پایه قهوه',
        items: [
            { id: 1, name: 'اسپرسو دبل 100 روبستا', description: '60 میلی لیتر عصاره', price: 90000 },
            { id: 2, name: 'اسپرسو دبل 100 عربیکا', description: '60 میلی لیتر عصاره', price: 115000 },
            { id: 3, name: 'آمریکانو (عربیکا)', description: '120 میلی لیتر', price: 120000 },
            { id: 4, name: 'کاپوچینو', description: 'اسپرسو، شیر کف دار', price: 115000 },
            { id: 5, name: 'لاته', description: 'اسپرسو، شیر بخار داده', price: 115000 },
            { id: 6, name: 'موکا', description: 'اسپرسو، شیر، شکلات', price: 130000 },
            { id: 7, name: 'ماکیاتو', description: 'اسپرسو با کف شیر', price: 130000 },
            { id: 8, name: 'نسکافه', description: 'اسپرسو، شیر، خامه', price: 115000 },
            { id: 9, name: 'قهوه ترک', description: 'قهوه ترک سنتی', price: 90000 },
            { id: 10, name: 'لاته وانیل', description: 'اسپرسو، شیر، وانیل سیروپ', price: 130000 },
            { id: 11, name: 'لاته کارامل', description: 'اسپرسو، شیر، کارامل سیروپ', price: 130000 },
            { id: 12, name: 'لاته زعفران', description: 'اسپرسو، شیر، زعفران', price: 150000 }
        ]
    },
    {
        category: 'قهوه نسل سوم',
        items: [
            { id: 13, name: 'کمکس', description: 'قهوه 100 عربیکا تازه رست', price: 215000 }
        ]
    },
    {
        category: 'سرد بر پایه قهوه',
        items: [
            { id: 14, name: 'آفوگاتو', description: 'دبل اسپرسو و اسکوپ بستنی وانیل', price: 120000 },
            { id: 15, name: 'آیس آمریکانو (عربیکا)', description: 'آمریکانو، یخ', price: 120000 },
            { id: 16, name: 'کلد برو', description: '100 میلی لیتر', price: 110000 },
            { id: 17, name: 'آیس لاته', description: 'اسپرسو، شیر، یخ', price: 115000 },
            { id: 18, name: 'آیس موکا', description: 'اسپرسو، شیر، شکلات، یخ', price: 130000 },
            { id: 19, name: 'آیس کارامل ماکیاتو', description: 'اسپرسو، شیر، کارامل سیروپ، یخ', price: 130000 },
            { id: 20, name: 'آیس وانیل ماکیاتو', description: 'اسپرسو، شیر، وانیل سیروپ، یخ', price: 130000 },
            { id: 21, name: 'ماکتیل‌ها', description: 'بدون الکل', price: 110000 }
        ]
    },
    {
        category: 'گرم نوش',
        items: [
            { id: 22, name: 'پینک چاکلت', description: 'شیر و شکلات', price: 125000 },
            { id: 23, name: 'شیر بیسکوییت کارامل', description: 'خوشمزه', price: 125000 },
            { id: 24, name: 'شیر پسته زعفران', description: 'طعم خاص', price: 135000 },
            { id: 25, name: 'شیر شکلات', description: 'کلاسیک', price: 125000 }
        ]
    },
    {
        category: 'چای و دمنوش',
        items: [
            { id: 26, name: 'چای سیاه', description: 'چای سیاه خوش طعم', price: 80000 },
            { id: 27, name: 'آویشن آبلیمو عسل', description: 'دمنوش طبیعی', price: 100000 },
            { id: 28, name: 'بهلیمو', description: 'دمنوش بهلیمو و نبات', price: 90000 },
            { id: 29, name: 'چای بهار نارنج', description: 'چای سیاه خوشمزه', price: 95000 }
        ]
    },
    {
        category: 'بستنی و شیک',
        items: [
            { id: 30, name: 'شیک شکلاتی', description: 'بستنی شکلات ، شیر', price: 170000 },
            { id: 31, name: 'شیک توت فرنگی', description: 'بستنی توت فرنگی', price: 150000 },
            { id: 32, name: 'شیک وانیل', description: 'بستنی وانیل', price: 145000 }
        ]
    },
    {
        category: 'آبمیوه و اسموتی',
        items: [
            { id: 33, name: 'آب انار', description: 'آب انار طبیعی', price: 120000 },
            { id: 34, name: 'آب پرتغال انار', description: 'میکس طبیعی', price: 125000 },
            { id: 35, name: 'آب طالبی', description: 'میوه تازه', price: 120000 }
        ]
    },
    {
        category: 'ماکتل',
        items: [
            { id: 36, name: 'اقیانوس آبی', description: 'حاوی کربن فعال', price: 145000 },
            { id: 37, name: 'پرتغال خونی', description: 'شیرین و خوشمزه', price: 145000 },
            { id: 38, name: 'لیموناد', description: 'حاوی عسل', price: 120000 }
        ]
    },
    {
        category: 'کیک‌ها',
        items: [
            { id: 39, name: 'براونی بستنی', description: 'کیک نرم', price: 215000 },
            { id: 40, name: 'برونی', description: 'شکلات تلخ', price: 135000 },
            { id: 41, name: 'سنسباستین', description: 'کیک فرانسوی', price: 160000 },
            { id: 42, name: 'کوکی دبل چاکلت', description: 'تازه', price: 45000 }
        ]
    },
    {
        category: 'صبحانه',
        items: [
            { id: 43, name: 'املت', description: '2 تخم مرغ و رب گوجه', price: 125000 },
            { id: 44, name: 'سوسیس تخم مرغ', description: 'فقط تا 13:30', price: 150000 },
            { id: 45, name: 'نیمرو', description: 'تخم مرغ نیمرو', price: 140000 }
        ]
    }
];

// Load persisted menu from localStorage if available
try {
    const savedMenu = JSON.parse(localStorage.getItem('menuData'));
    if (savedMenu && Array.isArray(savedMenu) && savedMenu.length) {
        menuData = savedMenu;
    }
} catch (e) {
    console.warn('Failed to parse saved menuData from localStorage', e);
}

// ذخیره داده‌ها در localStorage
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let nextOrderId = parseInt(localStorage.getItem('nextOrderId')) || 1;
let nextItemId = Math.max(...menuData.flatMap(cat => cat.items.map(item => item.id)), 0) + 1;

// عناصر DOM
let loginPage, adminDashboard, loginForm, adminPassword, loginError, logoutBtn;
let adminInitialized = false;

// آماده‌سازی صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('صفحه لود شد');
    
    // یافتن عناصر
    loginPage = document.getElementById('login-page');
    adminDashboard = document.getElementById('admin-dashboard');
    loginForm = document.getElementById('login-form');
    adminPassword = document.getElementById('admin-password');
    loginError = document.getElementById('login-error');
    logoutBtn = document.getElementById('logout-btn');
    
    console.log('تمام عناصر:', { loginForm, adminPassword, logoutBtn });
    
    // اضافه کردن listeners
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            console.log('فرم submit شد');
            e.preventDefault();
            const pwd = adminPassword.value;
            console.log('رمز وارد شده:', pwd);
            console.log('رمز درست:', ADMIN_PASSWORD);
            
            if (pwd === ADMIN_PASSWORD) {
                console.log('رمز درست است!');
                localStorage.setItem('adminLoggedIn', 'true');
                loginPage.classList.remove('show');
                adminDashboard.classList.add('show');
                console.log('بعد از toggle class -> loginPage:', loginPage.className, 'adminDashboard:', adminDashboard.className);
                // force inline visibility in case CSS not applied or overridden
                try {
                    loginPage.style.display = 'none';
                    adminDashboard.style.display = 'block';
                    adminDashboard.style.zIndex = '';
                    console.log('inline styles applied: loginPage.display=', loginPage.style.display, 'adminDashboard.display=', adminDashboard.style.display);
                } catch (e) {
                    console.warn('ناتوان در تنظیم استایل‌های inline:', e);
                }
                loginForm.reset();
                if (loginError) loginError.style.display = 'none';
                // initialize admin UI once after successful login
                initializeAdmin();
            } else {
                console.log('رمز غلط');
                if (loginError) {
                    loginError.textContent = 'رمزعبور نادرست است!';
                    loginError.style.display = 'block';
                }
                adminPassword.value = '';
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.setItem('adminLoggedIn', 'false');
            // show login and hide dashboard
            loginPage.classList.add('show');
            adminDashboard.classList.remove('show');
            // mark admin as un-initialized so next login re-inits
            adminInitialized = false;
            try {
                loginPage.style.display = '';
                adminDashboard.style.display = '';
            } catch (e) {}
        });
    }
    
    // چک کردن اگر قبلاً وارد شده بود
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn && loginPage && adminDashboard) {
        loginPage.classList.remove('show');
        adminDashboard.classList.add('show');
        initializeAdmin();
    } else {
        // show login page
        showLoginPage();
    }
});

// initialize admin UI (run once per session/login)
function initializeAdmin() {
    if (adminInitialized) return;
    adminInitialized = true;
    console.log('initializeAdmin شروع شد — adminInitialized:', adminInitialized);
    try {
        setupMenuManagement();
        setupEditModal();
        setupTabs();
        setupOrdersManagement();
        setupExportButtons();
        loadItemsTable();
        loadOrders();
        displayOrders();
        updateReports();
        // debug: report presence of key elements
        console.log('initializeAdmin پایان — عناصر:' , {
            itemsTableBody: !!document.getElementById('items-table-body'),
            ordersContainer: !!document.getElementById('orders-container'),
            popularItemsBody: !!document.getElementById('popular-items-body'),
            adminDashboardChildren: document.getElementById('admin-dashboard') ? document.getElementById('admin-dashboard').children.length : 0
        });
        // force inline visibility as fallback
        try {
            loginPage.style.display = 'none';
            adminDashboard.style.display = 'block';
        } catch (e) {}
    } catch (err) {
        console.error('خطا در شروع پنل:', err);
    }
}

// نمایش/مخفی کردن صفحات
function showLoginPage() {
    loginPage.classList.add('show');
    adminDashboard.classList.remove('show');
}

function showDashboard() {
    loginPage.classList.remove('show');
    adminDashboard.classList.add('show');
}

// ---- بخش مدیریت منو ----
function setupMenuManagement() {
    const addItemForm = document.getElementById('add-item-form');
    const itemsTableBody = document.getElementById('items-table-body');
    
    if (!addItemForm) {
        console.warn('Add item form not found');
        return;
    }

    addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const category = document.getElementById('item-category').value;
        const name = document.getElementById('item-name').value;
        const description = document.getElementById('item-description').value;
        const price = parseInt(document.getElementById('item-price').value);
        const imageFile = document.getElementById('item-image') ? document.getElementById('item-image').files[0] : null;
        
        // پیدا کردن دسته‌بندی یا ایجاد آن
        let cat = menuData.find(c => c.category === category);
        if (!cat) {
            cat = { category, items: [] };
            menuData.push(cat);
        }
        
        function insertNewItem(imageData) {
            const newItem = {
                id: nextItemId++,
                name,
                description,
                price,
                image: imageData || null
            };
            cat.items.push(newItem);
            // persist menu changes so client index can read them
            try { localStorage.setItem('menuData', JSON.stringify(menuData)); } catch (e) { console.warn('Failed to save menuData', e); }
            // پاکسازی فرم
            addItemForm.reset();
            document.getElementById('item-category').value = '';
            // بروزرسانی جدول
            loadItemsTable();
            alert('آیتم با موفقیت اضافه شد!');
        }
        
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                insertNewItem(reader.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            insertNewItem(null);
        }
    });
}

function loadItemsTable() {
    const itemsTableBody = document.getElementById('items-table-body');
    if (!itemsTableBody) {
        console.warn('Items table body not found');
        return;
    }
    
    itemsTableBody.innerHTML = '';
    
    menuData.forEach(category => {
        category.items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.image ? '<img src="'+item.image+'" style="width:60px;height:auto;border-radius:6px;">' : ''}</td>
                <td>${category.category}</td>
                <td>${item.description}</td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="editItem(${item.id}, '${category.category}')">ویرایش</button>
                        <button class="btn-delete" onclick="deleteItem(${item.id}, '${category.category}')">حذف</button>
                    </div>
                </td>
            `;
            itemsTableBody.appendChild(row);
        });
    });
}

// مودال ویرایش
function setupEditModal() {
    const editModal = document.getElementById('edit-modal');
    const editItemForm = document.getElementById('edit-item-form');
    const closeBtn = document.querySelector('.close-btn');
    
    if (!editModal || !editItemForm || !closeBtn) {
        console.warn('Edit modal elements not found');
        return;
    }

    closeBtn.addEventListener('click', () => {
        editModal.classList.remove('show');
    });

    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) {
            editModal.classList.remove('show');
        }
    });
    
    editItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newCategory = document.getElementById('edit-category').value;
        const newName = document.getElementById('edit-name').value;
        const newDescription = document.getElementById('edit-description').value;
        const newPrice = parseInt(document.getElementById('edit-price').value);
        const imageFile = document.getElementById('edit-image') ? document.getElementById('edit-image').files[0] : null;
        
        // پیدا کردن دسته‌بندی قدیم
        const oldCat = menuData.find(c => c.category === window.editingCategory);
        const oldItem = oldCat ? oldCat.items.find(i => i.id === window.editingItemId) : null;
        const existingImage = oldItem ? oldItem.image : null;
        
        function applyEdit(imageData) {
            const itemIndex = oldCat.items.findIndex(i => i.id === window.editingItemId);
            if (itemIndex !== -1) oldCat.items.splice(itemIndex, 1);
            
            if (newCategory !== window.editingCategory) {
                let newCat = menuData.find(c => c.category === newCategory);
                if (!newCat) {
                    newCat = { category: newCategory, items: [] };
                    menuData.push(newCat);
                }
                newCat.items.push({
                    id: window.editingItemId,
                    name: newName,
                    description: newDescription,
                    price: newPrice,
                    image: imageData || existingImage || null
                });
            } else {
                oldCat.items.push({
                    id: window.editingItemId,
                    name: newName,
                    description: newDescription,
                    price: newPrice,
                    image: imageData || existingImage || null
                });
            }
            
            editModal.classList.remove('show');
            loadItemsTable();
            // persist edits
            try { localStorage.setItem('menuData', JSON.stringify(menuData)); } catch (e) { console.warn('Failed to save menuData', e); }
            alert('آیتم با موفقیت ویرایش شد!');
        }
        
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                applyEdit(reader.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            applyEdit(existingImage);
        }
    });
}

function editItem(itemId, category) {
    const cat = menuData.find(c => c.category === category);
    const item = cat.items.find(i => i.id === itemId);
    
    if (item) {
        document.getElementById('edit-category').value = category;
        document.getElementById('edit-name').value = item.name;
        document.getElementById('edit-description').value = item.description;
        document.getElementById('edit-price').value = item.price;
        const preview = document.getElementById('edit-image-preview');
        if (preview) {
            preview.src = item.image || '';
            preview.style.display = item.image ? 'block' : 'none';
        }
        
        window.editingItemId = itemId;
        window.editingCategory = category;
        const editModal = document.getElementById('edit-modal');
        editModal.classList.add('show');
    }
}

function deleteItem(itemId, category) {
    if (confirm('آیا مطمئن هستید؟')) {
        const cat = menuData.find(c => c.category === category);
        const itemIndex = cat.items.findIndex(i => i.id === itemId);
        cat.items.splice(itemIndex, 1);
        
        // حذف دسته‌بندی اگر خالی باشد
        if (cat.items.length === 0) {
            menuData = menuData.filter(c => c.category !== category);
        }
        // persist deletion
        try { localStorage.setItem('menuData', JSON.stringify(menuData)); } catch (e) { console.warn('Failed to save menuData', e); }
        loadItemsTable();
        alert('آیتم با موفقیت حذف شد!');
    }
}

// ---- بخش تب‌ها ----
function setupTabs() {
    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');

    adminTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            
            // مخفی کردن تمام تب‌ها
            adminTabContents.forEach(content => {
                content.classList.remove('show');
            });
            
            // حذف کلاس فعال از تمام دکمه‌ها
            adminTabBtns.forEach(b => {
                b.classList.remove('active');
            });
            
            // نمایش تب انتخابی و فعال کردن دکمه
            document.getElementById(tabName + '-tab').classList.add('show');
            btn.classList.add('active');
            
            // بروزرسانی داده‌های گزارش
            if (tabName === 'reports') {
                updateReports();
            }
        });
    });
}

// ---- بخش سفارش ها ----
function setupOrdersManagement() {
    const ordersContainer = document.getElementById('orders-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            displayOrders(filter);
        });
    });
}

function loadOrders() {
    // بارگیری سفارش‌ها از صفحه اصلی
    const cartOrders = JSON.parse(localStorage.getItem('cartOrders')) || [];
    
    // افزودن سفارش‌های جدید به لیست سفارش‌های پنل مدیریت
    cartOrders.forEach(cartOrder => {
        if (!orders.find(o => o.id === cartOrder.id)) {
            orders.push({
                ...cartOrder,
                status: 'pending',
                timestamp: cartOrder.timestamp || new Date().toISOString()
            });
        }
    });
    
    // ذخیره در localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('nextOrderId', nextOrderId.toString());
}

function displayOrders(filter = 'all') {
    const ordersContainer = document.getElementById('orders-container');
    if (!ordersContainer) {
        console.warn('Orders container not found');
        return;
    }
    
    ordersContainer.innerHTML = '';
    
    const filteredOrders = filter === 'all' 
        ? orders 
        : orders.filter(o => o.status === filter);
    
    if (filteredOrders.length === 0) {
        ordersContainer.innerHTML = '<div class="empty-message">هیچ سفارشی وجود ندارد</div>';
        return;
    }
    
    filteredOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).forEach(order => {
        const orderCard = createOrderCard(order);
        ordersContainer.appendChild(orderCard);
    });
}

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';
    
    const date = new Date(order.timestamp);
    const dateStr = date.toLocaleDateString('fa-IR');
    const timeStr = date.toLocaleTimeString('fa-IR');
    
    let itemsHTML = '';
    if (order.items && Array.isArray(order.items)) {
        order.items.forEach(item => {
            itemsHTML += `
                <div class="order-item">
                    <span>${formatPrice(item.price || 0)} تومان</span>
                    <span>${item.quantity || 1}x ${item.name}</span>
                </div>
            `;
        });
    }
    
    const total = order.items 
        ? order.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0)
        : 0;
    
    card.innerHTML = `
        <div class="order-header">
            <div class="order-id">سفارش #${order.id}</div>
            <span class="order-status ${order.status}">${order.status === 'pending' ? 'در انتظار' : 'تکمیل شده'}</span>
        </div>
        <div class="order-info">
            <div class="order-info-item">
                <span class="order-info-label">میز:</span>
                <span>${order.tableNumber || '-'}</span>
            </div>
            <div class="order-info-item">
                <span class="order-info-label">تاریخ:</span>
                <span>${dateStr}</span>
            </div>
            <div class="order-info-item">
                <span class="order-info-label">ساعت:</span>
                <span>${timeStr}</span>
            </div>
        </div>
        <div class="order-items">
            ${itemsHTML || '<div class="order-item">اطلاعات موجود نیست</div>'}
        </div>
        <div class="order-info">
            <div class="order-info-item">
                <span class="order-info-label">جمع کل:</span>
                <span>${formatPrice(total)} تومان</span>
            </div>
        </div>
        <div class="order-actions">
            ${order.status === 'pending' 
                ? `<button class="btn-complete" onclick="completeOrder(${order.id})">تکمیل</button>` 
                : ''}
            <button class="btn-delete-order" onclick="deleteOrder(${order.id})">حذف</button>
        </div>
    `;
    
    return card;
}

function completeOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'completed';
        localStorage.setItem('orders', JSON.stringify(orders));
        displayOrders(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        updateReports();
    }
}

function deleteOrder(orderId) {
    if (confirm('آیا مطمئن هستید؟')) {
        orders = orders.filter(o => o.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(orders));
        displayOrders(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        updateReports();
    }
}

// ---- بخش گزارش‌ها ----
function updateReports() {
    // محاسبه آمار کلی
    const totalOrders = orders.length;
    const completedOrders = orders.filter(o => o.status === 'completed').length;
    
    let totalRevenue = 0;
    orders.forEach(order => {
        if (order.items) {
            totalRevenue += order.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
        }
    });
    
    const averageOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    // بروزرسانی کارت‌های گزارش
    document.getElementById('total-orders').textContent = totalOrders;
    document.getElementById('completed-orders').textContent = completedOrders;
    document.getElementById('total-revenue').textContent = formatPrice(totalRevenue) + ' تومان';
    document.getElementById('average-order').textContent = formatPrice(averageOrder) + ' تومان';
    
    // محبوب ترین آیتم‌ها
    const itemStats = {};
    orders.forEach(order => {
        if (order.items) {
            order.items.forEach(item => {
                if (!itemStats[item.name]) {
                    itemStats[item.name] = {
                        name: item.name,
                        count: 0,
                        revenue: 0
                    };
                }
                itemStats[item.name].count += item.quantity || 1;
                itemStats[item.name].revenue += (item.price || 0) * (item.quantity || 1);
            });
        }
    });
    
    const popularItems = Object.values(itemStats)
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    
    const popularItemsBody = document.getElementById('popular-items-body');
    popularItemsBody.innerHTML = '';
    
    if (popularItems.length === 0) {
        popularItemsBody.innerHTML = '<tr><td colspan="3" class="empty-message">سفارشی وجود ندارد</td></tr>';
    } else {
        popularItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.count}</td>
                <td>${formatPrice(item.revenue)} تومان</td>
            `;
            popularItemsBody.appendChild(row);
        });
    }
}

// دانلود گزارش‌ها
function setupExportButtons() {
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    const exportCsvBtn = document.getElementById('export-csv-btn');
    
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', () => {
            exportReport('pdf');
        });
    }
    
    if (exportCsvBtn) {
        exportCsvBtn.addEventListener('click', () => {
            exportReport('csv');
        });
    }
}

function exportReport(format) {
    const totalOrders = orders.length;
    const completedOrders = orders.filter(o => o.status === 'completed').length;
    let totalRevenue = 0;
    orders.forEach(order => {
        if (order.items) {
            totalRevenue += order.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
        }
    });
    const averageOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    if (format === 'csv') {
        let csv = 'گزارش فروش - کافه رایکا\n';
        csv += `تاریخ: ${new Date().toLocaleDateString('fa-IR')}\n\n`;
        csv += 'آمار کلی\n';
        csv += `کل سفارش‌ها,${totalOrders}\n`;
        csv += `سفارش‌های تکمیل شده,${completedOrders}\n`;
        csv += `کل درآمد,${formatPrice(totalRevenue)} تومان\n`;
        csv += `میانگین سفارش,${formatPrice(averageOrder)} تومان\n\n`;
        csv += 'جزئیات سفارش‌ها\n';
        csv += 'شماره سفارش,میز,تاریخ,وضعیت,جمع کل\n';
        
        orders.forEach(order => {
            const date = new Date(order.timestamp).toLocaleDateString('fa-IR');
            const total = order.items 
                ? order.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0)
                : 0;
            csv += `${order.id},${order.tableNumber || '-'},${date},${order.status === 'pending' ? 'در انتظار' : 'تکمیل شده'},${formatPrice(total)} تومان\n`;
        });
        
        downloadFile(csv, 'report.csv', 'text/csv');
    } else {
        // برای PDF، می‌توان از کتابخانه jsPDF استفاده کرد
        alert('برای دانلود PDF، لطفاً از ابزار پرینت مرورگر استفاده کنید.');
    }
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// تابع کمکی برای فرمت کردن قیمت
function formatPrice(price) {
    return price.toLocaleString('fa-IR');
}
