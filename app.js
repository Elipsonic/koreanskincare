const products = [
  {
    id: "biodance-collagen-mask",
    name: "Biodance Bio-Collagen Real Deep Mask",
    goal: "viral",
    label: "Mask",
    description: "Viral overnight hydrogel mask for plump, glass-skin glow before events.",
    price: 18,
    compare: 32,
    image: "images/product-images/biodance-bio-collagen-real-deep-mask.svg",
    bg: "linear-gradient(135deg, #ffe0ea, #ffffff)",
    bottle: "linear-gradient(160deg, #ffd4e4, #f6a8c8)"
  },
  {
    id: "medicube-zero-pore-pads",
    name: "Medicube Zero Pore Pad 2.0",
    goal: "toner",
    label: "Pads",
    description: "Smoothing toner pads for visible pores, texture, and quick skin prep.",
    price: 22,
    compare: 38,
    image: "images/product-images/medicube-zero-pore-pad-2.svg",
    bg: "linear-gradient(135deg, #f2e6ff, #ffffff)",
    bottle: "linear-gradient(160deg, #e4d5ff, #9d83ff)"
  },
  {
    id: "medicube-collagen-jelly",
    name: "Medicube Collagen Jelly Cream",
    goal: "viral",
    label: "Glow",
    description: "Glass-skin gel cream with a bouncy finish and makeup-friendly shine.",
    price: 24,
    compare: 42,
    image: "images/product-images/medicube-collagen-jelly-cream.svg",
    bg: "linear-gradient(135deg, #ffdbe8, #fff8fb)",
    bottle: "linear-gradient(160deg, #ffc1d8, #ff7aa7)"
  },
  {
    id: "anua-pdrn-serum",
    name: "Anua PDRN Hyaluronic Acid Capsule 100 Serum",
    goal: "pdrn",
    label: "PDRN",
    description: "Trending PDRN capsule serum for hydrated, firm-looking, dewy skin.",
    price: 28,
    compare: 48,
    image: "images/product-images/anua-pdrn-hyaluronic-acid-capsule-100-serum.svg",
    bg: "linear-gradient(135deg, #ffe6f1, #ffffff)",
    bottle: "linear-gradient(160deg, #ffc8df, #f58ab6)"
  },
  {
    id: "anua-heartleaf-toner",
    name: "Anua Heartleaf 77 Soothing Toner",
    goal: "toner",
    label: "77",
    description: "Light calming toner for redness-prone, oily, or sensitive routines.",
    price: 20,
    compare: 34,
    image: "images/product-images/anua-heartleaf-77-soothing-toner.svg",
    bg: "linear-gradient(135deg, #dff3df, #ffffff)",
    bottle: "linear-gradient(160deg, #d3f2d3, #8ecba1)"
  },
  {
    id: "vt-reedle-shot-100",
    name: "VT Reedle Shot 100",
    goal: "viral",
    label: "VT",
    description: "Spicule-style skin-refining treatment for a smoother, polished feel.",
    price: 30,
    compare: 52,
    image: "images/product-images/vt-reedle-shot-100.svg",
    bg: "linear-gradient(135deg, #e4ddff, #ffffff)",
    bottle: "linear-gradient(160deg, #d8ceff, #8f7cff)"
  },
  {
    id: "im-from-rice-toner",
    name: "I’m From Rice Toner",
    goal: "toner",
    label: "Rice",
    description: "Milky rice toner for brighter-looking, soft, hydrated skin.",
    price: 25,
    compare: 42,
    image: "images/product-images/im-from-rice-toner.svg",
    bg: "linear-gradient(135deg, #fff4cf, #ffffff)",
    bottle: "linear-gradient(160deg, #fff7db, #eecb86)"
  },
  {
    id: "aestura-atobarrier-365",
    name: "Aestura Atobarrier 365 Cream",
    goal: "barrier",
    label: "365",
    description: "Barrier-support cream for dry, sensitive, or over-exfoliated skin.",
    price: 32,
    compare: 54,
    image: "images/product-images/aestura-atobarrier-365-cream.svg",
    bg: "linear-gradient(135deg, #dff3ff, #ffffff)",
    bottle: "linear-gradient(160deg, #cfefff, #8ab8ff)"
  },
  {
    id: "manyo-cleansing-oil",
    name: "Ma:nyo Pure Cleansing Oil",
    goal: "cleanse",
    label: "Oil",
    description: "Beloved first cleanse for sunscreen, makeup, and daily buildup.",
    price: 23,
    compare: 39,
    image: "images/product-images/manyo-pure-cleansing-oil.svg",
    bg: "linear-gradient(135deg, #ffe7b8, #ffffff)",
    bottle: "linear-gradient(160deg, #ffe1a6, #ffb55e)"
  },
  {
    id: "round-lab-birch-sun",
    name: "Round Lab Birch Juice Moisturizing Sun Cream",
    goal: "spf",
    label: "SPF",
    description: "Korean-market lightweight sunscreen texture shoppers often hunt for.",
    price: 24,
    compare: 42,
    image: "images/product-images/round-lab-birch-juice-moisturizing-sun-cream.svg",
    bg: "linear-gradient(135deg, #e0f5ff, #ffffff)",
    bottle: "linear-gradient(160deg, #cfefff, #85ccff)"
  },
  {
    id: "beauty-joseon-relief-sun",
    name: "Beauty of Joseon Relief Sun: Rice + Probiotics",
    goal: "spf",
    label: "Sun",
    description: "Cult daily SPF-style finish with rice, probiotics, and no heavy feel.",
    price: 22,
    compare: 38,
    image: "images/product-images/beauty-of-joseon-relief-sun-rice-probiotics.svg",
    bg: "linear-gradient(135deg, #fff1c9, #ffffff)",
    bottle: "linear-gradient(160deg, #fff5cc, #d7be76)"
  },
  {
    id: "skin1004-centella-ampoule",
    name: "Skin1004 Madagascar Centella Ampoule",
    goal: "barrier",
    label: "Cica",
    description: "Minimal centella ampoule for lightweight calming and skin balance.",
    price: 19,
    compare: 33,
    image: "images/product-images/skin1004-madagascar-centella-ampoule.svg",
    bg: "linear-gradient(135deg, #d9f2df, #ffffff)",
    bottle: "linear-gradient(160deg, #c2edcb, #62bc82)"
  }
];

const trackingSteps = [
  { title: "Order placed", body: "We received your order and reserved it for the next Korea pickup window.", time: "Day 0" },
  { title: "Supplier pickup scheduled", body: "Your items are queued for collection from Korean supplier partners.", time: "Day 1–3" },
  { title: "Picked up in Korea", body: "Products were collected and scanned into the SeoulShelf Korea flow.", time: "Day 3–5" },
  { title: "Packed at Seoul hub", body: "Your bundle is being checked, packed, and prepared for export.", time: "Day 5–8" },
  { title: "International shipment", body: "Package is moving from Korea to the United States.", time: "Day 8–13" },
  { title: "U.S. carrier handoff", body: "Final-mile tracking activates after the package reaches a U.S. carrier.", time: "Day 13–18" }
];

const state = {
  filter: "all",
  search: "",
  cart: JSON.parse(localStorage.getItem("seoulshelf-cart") || "{}"),
  trackingIndex: 2
};

const productGrid = document.querySelector("#productGrid");
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotal = document.querySelector("#subtotal");
const total = document.querySelector("#total");
const checkoutButton = document.querySelector("#checkoutButton");
const toast = document.querySelector("#toast");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const timeline = document.querySelector("#timeline");
const advanceTracking = document.querySelector("#advanceTracking");
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterMessage = document.querySelector("#newsletterMessage");

function money(value) {
  return `$${value.toFixed(0)}`;
}

function saveCart() {
  localStorage.setItem("seoulshelf-cart", JSON.stringify(state.cart));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderProductMedia(product) {
  if (product.image) {
    return `<img src="${product.image}" alt="${product.name} mockup product image" loading="lazy" style="width:100%; height:100%; min-height:260px; object-fit:cover; display:block;">`;
  }

  return `<div class="product-bottle" data-label="${product.label}"></div>`;
}

function renderProducts() {
  const normalizedSearch = state.search.trim().toLowerCase();

  const visible = products.filter(product => {
    const matchesFilter = state.filter === "all" || product.goal === state.filter;
    const matchesSearch = !normalizedSearch ||
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.goal.toLowerCase().includes(normalizedSearch) ||
      product.description.toLowerCase().includes(normalizedSearch);

    return matchesFilter && matchesSearch;
  });

  productGrid.innerHTML = visible.map(product => {
    const savings = Math.round((1 - product.price / product.compare) * 100);

    return `
      <article class="product-card">
        <div class="product-media" style="--product-bg: ${product.bg}; --product-bottle: ${product.bottle}; padding: 0; overflow: hidden;">
          ${renderProductMedia(product)}
        </div>
        <div class="product-info">
          <span class="product-tag">${product.goal}</span>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-meta">
            <span class="price">${money(product.price)}</span>
            <span class="compare">${money(product.compare)}</span>
            <span class="save">Save ${savings}%</span>
          </div>
          <button class="button primary full" data-add="${product.id}">Add to bundle</button>
        </div>
      </article>
    `;
  }).join("");

  if (visible.length === 0) {
    productGrid.innerHTML = `<p class="empty-cart">No products found. Try a different skin goal or search term.</p>`;
  }

  document.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  saveCart();
  renderCart();
  const product = products.find(item => item.id === productId);
  showToast(`${product.name} added to your bundle`);
}

function updateQty(productId, direction) {
  const current = state.cart[productId] || 0;
  const next = current + direction;

  if (next <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = next;
  }

  saveCart();
  renderCart();
}

function renderCart() {
  const entries = Object.entries(state.cart);
  const count = entries.reduce((sum, [, qty]) => sum + qty, 0);
  const amount = entries.reduce((sum, [productId, qty]) => {
    const product = products.find(item => item.id === productId);
    return sum + (product ? product.price * qty : 0);
  }, 0);

  cartCount.textContent = count;
  subtotal.textContent = money(amount);
  total.textContent = money(amount);

  if (entries.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart">Your bundle is empty. Add a few Korean skincare favorites.</div>`;
    return;
  }

  cartItems.innerHTML = entries.map(([productId, qty]) => {
    const product = products.find(item => item.id === productId);
    if (!product) return "";

    return `
      <div class="cart-item">
        <div class="cart-thumb" style="--product-bg: ${product.bg}; background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
        <div>
          <strong>${product.name}</strong>
          <small>${money(product.price)} • free U.S. shipping</small>
        </div>
        <div class="qty-controls" aria-label="Quantity controls for ${product.name}">
          <button aria-label="Decrease ${product.name}" data-dec="${product.id}">−</button>
          <strong>${qty}</strong>
          <button aria-label="Increase ${product.name}" data-inc="${product.id}">+</button>
        </div>
      </div>
    `;
  }).join("");

  document.querySelectorAll("[data-dec]").forEach(button => {
    button.addEventListener("click", () => updateQty(button.dataset.dec, -1));
  });

  document.querySelectorAll("[data-inc]").forEach(button => {
    button.addEventListener("click", () => updateQty(button.dataset.inc, 1));
  });
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function renderTimeline() {
  timeline.innerHTML = trackingSteps.map((step, index) => {
    const statusClass = index < state.trackingIndex ? "done" : index === state.trackingIndex ? "current" : "";

    return `
      <li class="${statusClass}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div>
          <strong>${step.title}</strong>
          <p>${step.body}</p>
        </div>
        <time>${step.time}</time>
      </li>
    `;
  }).join("");
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  state.filter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProducts();
});

searchInput.addEventListener("input", event => {
  state.search = event.target.value;
  renderProducts();
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);

cartDrawer.addEventListener("click", event => {
  if (event.target === cartDrawer) closeCartDrawer();
});

checkoutButton.addEventListener("click", () => {
  const entries = Object.entries(state.cart);
  if (!entries.length) {
    showToast("Add products before checkout.");
    return;
  }

  showToast("Checkout preview: connect Stripe or Shopify to launch.");
});

advanceTracking.addEventListener("click", () => {
  state.trackingIndex = (state.trackingIndex + 1) % trackingSteps.length;
  renderTimeline();
});

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.querySelector("#emailInput").value;
  newsletterMessage.textContent = `You're on the Korea drop list, ${email}.`;
  newsletterForm.reset();
});

renderProducts();
renderCart();
renderTimeline();
