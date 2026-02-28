// main.js — Shared logic for Topdik.uz
// Handles: product data, localStorage, language, currency, search, cart, saved

// ─── PRODUCT DATA ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1,  title:"iPhone 15 Pro Max 256GB",           desc:"Natural titanium, excellent condition, full kit",   category:"Electronics",   price:12500000, usd:990,   user:"alisher_tash", img:"https://picsum.photos/seed/iphone15/400/300" },
  { id:2,  title:"Samsung Galaxy S24 Ultra",           desc:"Phantom black, 512GB, S-Pen included",             category:"Electronics",   price:10800000, usd:850,   user:"bekzod_uy",   img:"https://picsum.photos/seed/samsung24/400/300" },
  { id:3,  title:"MacBook Air M2 13\"",               desc:"Starlight, 8GB RAM, 256GB SSD, barely used",       category:"Electronics",   price:14200000, usd:1120,  user:"dilnoza_farg",img:"https://picsum.photos/seed/macbook/400/300" },
  { id:4,  title:"Nike Air Max 270 — size 42",        desc:"Black/white colorway, brand new in box",           category:"Fashion",       price:890000,   usd:70,    user:"jasur_sam",   img:"https://picsum.photos/seed/nikemax/400/300" },
  { id:5,  title:"Leather Sofa Set 3+2+1",            desc:"Brown genuine leather, Italian design, 2022",      category:"Furniture",     price:8500000,  usd:670,   user:"nodira_bux",  img:"https://picsum.photos/seed/sofa/400/300" },
  { id:6,  title:"Toyota Camry 2020 2.5L",            desc:"White, 45000km, full options, accident-free",      category:"Cars",          price:285000000,usd:22500, user:"jamshid_and", img:"https://picsum.photos/seed/camry/400/300" },
  { id:7,  title:"Xiaomi Robot Vacuum Gen 4",         desc:"LiDAR navigation, 3000Pa suction, like new",       category:"Electronics",   price:3200000,  usd:252,   user:"malika_nav",  img:"https://picsum.photos/seed/vacuum/400/300" },
  { id:8,  title:"Adidas Ultraboost 23 — size 43",   desc:"Core black, worn twice, size EU43",                category:"Fashion",       price:780000,   usd:61,    user:"sardor_qash", img:"https://picsum.photos/seed/adidas/400/300" },
  { id:9,  title:"IKEA KALLAX Bookshelf 4x4",         desc:"White, good condition, self-assembly hardware",    category:"Furniture",     price:1200000,  usd:95,    user:"zulfiya_xor", img:"https://picsum.photos/seed/kallax/400/300" },
  { id:10, title:"Canon EOS R50 + 18-45mm Kit",       desc:"24.2MP, IBIS, perfect for content creators",      category:"Electronics",   price:7800000,  usd:615,   user:"alisher_tash",img:"https://picsum.photos/seed/canonr50/400/300" },
  { id:11, title:"Hyundai Tucson 2021",               desc:"Silver, 38000km, full leather, panoramic roof",   category:"Cars",          price:320000000,usd:25200, user:"bekzod_uy",   img:"https://picsum.photos/seed/tucson/400/300" },
  { id:12, title:"Dell XPS 15 9530 i7 RTX",           desc:"16GB RAM, 512GB NVMe, OLED touch display",        category:"Electronics",   price:16500000, usd:1300,  user:"timur_chi",   img:"https://picsum.photos/seed/dellxps/400/300" },
  { id:13, title:"PlayStation 5 + 2 Controllers",     desc:"Disc edition, 2 DualSense, 3 games included",     category:"Electronics",   price:5900000,  usd:465,   user:"dilnoza_farg",img:"https://picsum.photos/seed/ps5/400/300" },
  { id:14, title:"Women's Winter Coat — size M",      desc:"Wool blend, camel color, Zara, excellent cond.",  category:"Fashion",       price:650000,   usd:51,    user:"kamola_osh",  img:"https://picsum.photos/seed/coat/400/300" },
  { id:15, title:"DeLonghi Magnifica Evo",            desc:"Bean-to-cup espresso machine, WiFi, 2023 model",  category:"Home & Garden", price:4100000,  usd:323,   user:"jasur_sam",   img:"https://picsum.photos/seed/delonghi/400/300" },
  { id:16, title:"Trek Marlin 6 Mountain Bike",       desc:"Blue, 29\" wheels, 21-speed Shimano, 2022",       category:"Sports",        price:3800000,  usd:300,   user:"sardor_qash", img:"https://picsum.photos/seed/trek/400/300" },
  { id:17, title:"2BR Apartment — Yunusabad, Tashkent",desc:"65m², 4th floor, renovated, 5 min to metro",    category:"Real Estate",   price:145000000,usd:11420, user:"nodira_bux",  img:"https://picsum.photos/seed/apart/400/300" },
  { id:18, title:"Bosch Washing Machine 7kg",         desc:"Front-load, 1200rpm, A+++ energy class",          category:"Home & Garden", price:2900000,  usd:229,   user:"malika_nav",  img:"https://picsum.photos/seed/bosch/400/300" },
  { id:19, title:"Golden Retriever Puppies (3 left)", desc:"8 weeks, vaccinated, with passport, champion line",category:"Animals",       price:2500000,  usd:197,   user:"zulfiya_xor", img:"https://picsum.photos/seed/goldenr/400/300" },
  { id:20, title:"iPad Pro 12.9\" M2 + Apple Pencil", desc:"256GB WiFi+Cellular, Space Grey, 2022",           category:"Electronics",   price:9200000,  usd:725,   user:"jamshid_and", img:"https://picsum.photos/seed/ipadpro/400/300" },
  { id:21, title:"Chevrolet Tracker 2023",            desc:"Red, 12000km, turbo, full package, warranty",     category:"Cars",          price:198000000,usd:15600, user:"timur_chi",   img:"https://picsum.photos/seed/tracker/400/300" },
  { id:22, title:"Sony WH-1000XM5 Headphones",       desc:"Black, ANC, 30h battery, mint condition",         category:"Electronics",   price:2100000,  usd:165,   user:"kamola_osh",  img:"https://picsum.photos/seed/sony/400/300" },
  { id:23, title:"Dining Table + 6 Chairs",           desc:"Oak veneer, extendable 140-180cm, 2023 model",   category:"Furniture",     price:4500000,  usd:355,   user:"alisher_tash",img:"https://picsum.photos/seed/diningtable/400/300" },
  { id:24, title:"Hugo Boss Men's Suit — size 50",   desc:"Dark navy, slim fit, perfect for business",       category:"Fashion",       price:1800000,  usd:142,   user:"bekzod_uy",   img:"https://picsum.photos/seed/hugoboss/400/300" },
];

const CATEGORIES = [
  { name:"Electronics",   icon:"💻", slug:"Electronics" },
  { name:"Cars",          icon:"🚗", slug:"Cars" },
  { name:"Real Estate",   icon:"🏠", slug:"Real Estate" },
  { name:"Fashion",       icon:"👗", slug:"Fashion" },
  { name:"Furniture",     icon:"🛋️", slug:"Furniture" },
  { name:"Home & Garden", icon:"🌿", slug:"Home & Garden" },
  { name:"Sports",        icon:"⚽", slug:"Sports" },
  { name:"Animals",       icon:"🐾", slug:"Animals" },
];

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  uz: {
    search_placeholder:"Qidirish...", categories:"Kategoriyalar", latest:"Yangi e'lonlar",
    saved:"Saqlangan", cart:"Savat", post_ad:"E'lon berish", login:"Kirish",
    add_to_cart:"Savatga", save:"Saqlash", uzs:"so'm", usd:"$",
    all_categories:"Barcha kategoriyalar", search_results:"Qidiruv natijalari",
    no_results:"Natija topilmadi", footer_contact:"Aloqa", footer_about:"Biz haqimizda",
    footer_help:"Yordam", footer_terms:"Shartlar", currency:"Valyuta", language:"Til",
    username_placeholder:"Ismingizni kiriting", login_btn:"Kirish", logout:"Chiqish",
    cart_empty:"Savat bo'sh", saved_empty:"Saqlangan e'lonlar yo'q", total:"Jami",
    remove:"O'chirish", checkout:"Buyurtma berish", form_title:"Sarlavha",
    form_desc:"Tavsif", form_cat:"Kategoriya", form_price:"Narx", form_image:"Rasm",
    form_submit:"E'lon joylashtirish", form_preview:"Ko'rinish", ad_posted:"E'lon joylashtirildi!",
    see_all:"Barchasini ko'rish", select_cat:"Kategoriyani tanlang",
    form_currency:"Valyuta", welcome:"Xush kelibsiz",
  },
  uz_cyr: {
    search_placeholder:"Қидириш...", categories:"Категориялар", latest:"Янги эълонлар",
    saved:"Сақланган", cart:"Сават", post_ad:"Эълон бериш", login:"Кириш",
    add_to_cart:"Саватга", save:"Сақлаш", uzs:"сўм", usd:"$",
    all_categories:"Барча категориялар", search_results:"Қидирув натижалари",
    no_results:"Натижа топилмади", footer_contact:"Алоқа", footer_about:"Биз ҳақимизда",
    footer_help:"Ёрдам", footer_terms:"Шартлар", currency:"Валюта", language:"Тил",
    username_placeholder:"Исмингизни киритинг", login_btn:"Кириш", logout:"Чиқиш",
    cart_empty:"Сават бўш", saved_empty:"Сақланган эълонлар йўқ", total:"Жами",
    remove:"Ўчириш", checkout:"Буюртма бериш", form_title:"Сарлавҳа",
    form_desc:"Тавсиф", form_cat:"Категория", form_price:"Нарх", form_image:"Расм",
    form_submit:"Эълон жойлаштириш", form_preview:"Кўриниш", ad_posted:"Эълон жойлаштирилди!",
    see_all:"Барчасини кўриш", select_cat:"Категорияни танланг",
    form_currency:"Валюта", welcome:"Хуш келибсиз",
  },
  ru: {
    search_placeholder:"Поиск...", categories:"Категории", latest:"Новые объявления",
    saved:"Сохранённые", cart:"Корзина", post_ad:"Подать объявление", login:"Войти",
    add_to_cart:"В корзину", save:"Сохранить", uzs:"сум", usd:"$",
    all_categories:"Все категории", search_results:"Результаты поиска",
    no_results:"Ничего не найдено", footer_contact:"Контакты", footer_about:"О нас",
    footer_help:"Помощь", footer_terms:"Условия", currency:"Валюта", language:"Язык",
    username_placeholder:"Введите ваше имя", login_btn:"Войти", logout:"Выйти",
    cart_empty:"Корзина пуста", saved_empty:"Нет сохранённых объявлений", total:"Итого",
    remove:"Удалить", checkout:"Оформить заказ", form_title:"Заголовок",
    form_desc:"Описание", form_cat:"Категория", form_price:"Цена", form_image:"Фото",
    form_submit:"Разместить объявление", form_preview:"Предпросмотр", ad_posted:"Объявление размещено!",
    see_all:"Смотреть все", select_cat:"Выберите категорию",
    form_currency:"Валюта", welcome:"Добро пожаловать",
  },
};

// ─── STATE HELPERS ────────────────────────────────────────────────────────────
const getLang     = () => localStorage.getItem("td_lang")     || "uz";
const getCurrency = () => localStorage.getItem("td_currency") || "uzs";
const getUser     = () => localStorage.getItem("td_user")     || null;
const getSaved    = () => JSON.parse(localStorage.getItem("td_saved") || "[]");
const getCart     = () => JSON.parse(localStorage.getItem("td_cart")  || "[]");
const getExtra    = () => JSON.parse(localStorage.getItem("td_extra")  || "[]");
const getAllProducts = () => [...PRODUCTS, ...getExtra()];

function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang]?.[key]) ?? (TRANSLATIONS["uz"]?.[key]) ?? key;
}

function formatPrice(product) {
  if (getCurrency() === "usd") return `$${product.usd.toLocaleString()}`;
  return `${product.price.toLocaleString()} ${t("uzs")}`;
}

// ─── SAVED ────────────────────────────────────────────────────────────────────
function toggleSaved(id) {
  const saved = getSaved();
  const idx = saved.indexOf(id);
  if (idx === -1) saved.push(id); else saved.splice(idx, 1);
  localStorage.setItem("td_saved", JSON.stringify(saved));
  return idx === -1;
}
const isSaved = id => getSaved().includes(id);

// ─── CART ─────────────────────────────────────────────────────────────────────
function addToCart(id) {
  const cart = getCart();
  if (!cart.includes(id)) { cart.push(id); localStorage.setItem("td_cart", JSON.stringify(cart)); }
}
function removeFromCart(id) {
  localStorage.setItem("td_cart", JSON.stringify(getCart().filter(x => x !== id)));
}
const isInCart = id => getCart().includes(id);

// ─── SHUFFLE (no consecutive same-user) ──────────────────────────────────────
function shuffleProducts(products) {
  const arr = [...products];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].user === arr[i-1].user) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j].user !== arr[i-1].user) { [arr[i], arr[j]] = [arr[j], arr[i]]; break; }
      }
    }
  }
  return arr;
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function productCardHTML(p) {
  const sv = isSaved(p.id), ic = isInCart(p.id);
  return `<article class="product-card" data-id="${p.id}">
    <a href="product.html?id=${p.id}" class="product-card__img-wrap">
      <img src="${p.img}" alt="${p.title}" class="product-card__img" loading="lazy">
      <button class="product-card__save${sv?' saved':''}" aria-label="${t('save')}" onclick="handleSave(event,${p.id})">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="${sv?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </a>
    <div class="product-card__body">
      <span class="product-card__cat">${p.category}</span>
      <a href="product.html?id=${p.id}" class="product-card__title">${p.title}</a>
      <div class="product-card__footer">
        <strong class="product-card__price">${formatPrice(p)}</strong>
        <button class="btn btn--sm${ic?' btn--success':' btn--primary'}" onclick="handleCart(event,${p.id})">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          ${ic?'✓':t('add_to_cart')}
        </button>
      </div>
    </div>
  </article>`;
}

function handleSave(e, id) {
  e.preventDefault();
  const added = toggleSaved(id);
  const btn = e.currentTarget;
  btn.classList.toggle("saved", added);
  btn.querySelector("svg").setAttribute("fill", added ? "currentColor" : "none");
  updateBadges();
}
function handleCart(e, id) {
  e.preventDefault();
  if (!isInCart(id)) {
    addToCart(id);
    const btn = e.currentTarget;
    btn.className = btn.className.replace("btn--primary","btn--success");
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> ✓`;
    updateBadges();
  }
}

// ─── BADGES ───────────────────────────────────────────────────────────────────
function updateBadges() {
  const sv = getSaved().length, ca = getCart().length;
  document.querySelectorAll(".badge-saved").forEach(el=>{el.textContent=sv;el.style.display=sv?"flex":"none"});
  document.querySelectorAll(".badge-cart").forEach(el=>{el.textContent=ca;el.style.display=ca?"flex":"none"});
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function renderHeader(activePage) {
  const container = document.getElementById("header-container");
  if (!container) return;
  container.innerHTML = `
<header class="site-header" role="banner">
  <div class="header-inner container">
    <a href="index.html" class="logo" aria-label="Topdik.uz home">
      <span class="logo-top">TOP</span><span class="logo-dik">DIK</span><span class="logo-uz">.uz</span>
    </a>
    <form id="header-search-form" class="header-search" role="search">
      <input id="header-search-input" type="search" placeholder="${t('search_placeholder')}" aria-label="${t('search_placeholder')}" class="header-search__input" autocomplete="off">
      <button type="submit" class="header-search__btn" aria-label="Search">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
    </form>
    <nav class="header-nav" aria-label="Main navigation">
      <div class="switcher lang-switcher">
        <button class="switcher__btn${getLang()==='uz'?' active':''}" data-lang="uz">UZ</button>
        <button class="switcher__btn${getLang()==='uz_cyr'?' active':''}" data-lang="uz_cyr">УЗ</button>
        <button class="switcher__btn${getLang()==='ru'?' active':''}" data-lang="ru">RU</button>
      </div>
      <div class="switcher cur-switcher">
        <button class="switcher__btn${getCurrency()==='uzs'?' active':''}" data-cur="uzs">UZS</button>
        <button class="switcher__btn${getCurrency()==='usd'?' active':''}" data-cur="usd">USD</button>
      </div>
      <a href="saved.html" class="icon-btn${activePage==='saved'?' active':''}" aria-label="${t('saved')}">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span class="badge badge-saved" style="display:none">0</span>
        <span class="icon-label">${t('saved')}</span>
      </a>
      <a href="cart.html" class="icon-btn${activePage==='cart'?' active':''}" aria-label="${t('cart')}">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span class="badge badge-cart" style="display:none">0</span>
        <span class="icon-label">${t('cart')}</span>
      </a>
      <a href="login.html" id="header-login" class="btn btn--outline">${t('login')}</a>
      <div id="header-user" class="user-chip" style="display:none">
        <span class="user-chip__name"></span>
        <button class="user-chip__logout" aria-label="${t('logout')}">✕</button>
      </div>
      <a href="create-ad.html" class="btn btn--primary">${t('post_ad')}</a>
    </nav>
    <button id="menu-toggle" class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
    <div class="mobile-menu__body">
      <form id="mobile-search-form" class="header-search" role="search">
        <input type="search" placeholder="${t('search_placeholder')}" aria-label="${t('search_placeholder')}" class="header-search__input" id="mobile-search-input">
        <button type="submit" class="header-search__btn" aria-label="Search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
      </form>
      <div class="mobile-switchers">
        <div class="switcher">
          <button class="switcher__btn${getLang()==='uz'?' active':''}" data-lang="uz">UZ</button>
          <button class="switcher__btn${getLang()==='uz_cyr'?' active':''}" data-lang="uz_cyr">УЗ</button>
          <button class="switcher__btn${getLang()==='ru'?' active':''}" data-lang="ru">RU</button>
        </div>
        <div class="switcher">
          <button class="switcher__btn${getCurrency()==='uzs'?' active':''}" data-cur="uzs">UZS</button>
          <button class="switcher__btn${getCurrency()==='usd'?' active':''}" data-cur="usd">USD</button>
        </div>
      </div>
      <nav class="mobile-nav">
        <a href="saved.html">${t('saved')}</a>
        <a href="cart.html">${t('cart')}</a>
        <a href="login.html">${t('login')}</a>
        <a href="create-ad.html" class="btn btn--primary btn--full">${t('post_ad')}</a>
      </nav>
    </div>
  </div>
</header>`;
}

function renderFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;
  container.innerHTML = `
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner container">
    <div class="footer-brand">
      <a href="index.html" class="logo logo--sm"><span class="logo-top">TOP</span><span class="logo-dik">DIK</span><span class="logo-uz">.uz</span></a>
      <p class="footer-copy">© ${new Date().getFullYear()} Topdik.uz. Barcha huquqlar himoyalangan.</p>
    </div>
    <nav class="footer-links" aria-label="Footer links">
      <a href="#">${t('footer_about')}</a>
      <a href="#">${t('footer_help')}</a>
      <a href="#">${t('footer_terms')}</a>
      <a href="#">${t('footer_contact')}</a>
    </nav>
    <address class="footer-contact">
      <p>📞 +998 71 200 00 00</p>
      <p>✉️ info@topdik.uz</p>
      <p>📍 Toshkent, O'zbekiston</p>
    </address>
  </div>
</footer>`;
}

function initHeader() {
  updateBadges();

  document.querySelectorAll("[data-lang]").forEach(btn =>
    btn.addEventListener("click", () => { localStorage.setItem("td_lang", btn.dataset.lang); location.reload(); })
  );
  document.querySelectorAll("[data-cur]").forEach(btn =>
    btn.addEventListener("click", () => { localStorage.setItem("td_currency", btn.dataset.cur); location.reload(); })
  );

  const user = getUser();
  const loginEl = document.getElementById("header-login");
  const userEl  = document.getElementById("header-user");
  if (loginEl && userEl) {
    if (user) {
      loginEl.style.display = "none";
      userEl.style.display = "flex";
      userEl.querySelector(".user-chip__name").textContent = user;
      userEl.querySelector(".user-chip__logout").addEventListener("click", () => {
        localStorage.removeItem("td_user"); location.reload();
      });
    } else {
      userEl.style.display = "none";
    }
  }

  const burger = document.getElementById("menu-toggle");
  const mMenu  = document.getElementById("mobile-menu");
  if (burger && mMenu) {
    burger.addEventListener("click", () => {
      const open = mMenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open);
      mMenu.setAttribute("aria-hidden", !open);
    });
  }

  const searchForm = document.getElementById("header-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const q = document.getElementById("header-search-input").value.trim();
      if (q) window.location.href = `categories.html?q=${encodeURIComponent(q)}`;
    });
  }
  const mSearchForm = document.getElementById("mobile-search-form");
  if (mSearchForm) {
    mSearchForm.addEventListener("submit", e => {
      e.preventDefault();
      const q = document.getElementById("mobile-search-input").value.trim();
      if (q) window.location.href = `categories.html?q=${encodeURIComponent(q)}`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(document.body.dataset.page || "");
  renderFooter();
  initHeader();
  if (typeof pageInit === "function") pageInit();
});
