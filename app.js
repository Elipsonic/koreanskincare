const products = [
  {
    id: "rice-glow-toner",
    name: "Rice Glow Milky Toner",
    goal: "hydration",
    label: "Rice",
    description: "A cushiony daily toner for bouncy, glass-skin prep.",
    price: 13,
    compare: 24,
    bg: "linear-gradient(135deg, #fff4cf, #ffffff)",
    bottle: "linear-gradient(160deg, #fff7db, #eecb86)"
  },
  {
    id: "cica-barrier-cream",
    name: "Cica Barrier Cloud Cream",
    goal: "barrier",
    label: "Cica",
    description: "Soft barrier-support moisturizer for stressed skin days.",
    price: 16,
    compare: 31,
    bg: "linear-gradient(135deg, #dff3df, #ffffff)",
    bottle: "linear-gradient(160deg, #d3f2d3, #8ecba1)"
  },
  {
    id: "yuja-bright-ampoule",
    name: "Yuja Bright Ampoule",
    goal: "brightening",
    label: "Yuja",
    description: "Lightweight glow serum for dullness and uneven tone.",
    price: 18,
    compare: 34,
    bg: "linear-gradient(135deg, #fff0b8, #fffdf7)",
    bottle: "linear-gradient(160deg, #ffe887, #ffb36e)"
  },
  {
    id: "aqua-sun-gel",
    name: "Aqua Relief Sun Gel SPF",
    goal: "spf",
    label: "SPF",
    description: "A dewy, no-white-cast daily sunscreen finish.",
    price: 12,
    compare: 26,
    bg: "linear-gradient(135deg, #dff3ff, #ffffff)",
    bottle: "linear-gradient(160deg, #cfefff, #8ab8ff)"
  },
  {
    id: "snail-repair-essence",
    name: "Snail Repair Essence",
    goal: "barrier",
    label: "Snail",
    description: "Stretchy hydrating essence for a smoother skin feel.",
    price: 15,
    compare: 29,
    bg: "linear-gradient(135deg, #eee9ff, #ffffff)",
    bottle: "linear-gradient(160deg, #ded4ff, #bda8ff)"
  },
  {
    id: "green-tea-cleanser",
    name: "Green Tea Jelly Cleanser",
    goal: "hydration",
    label: "Tea",
    description: "Low-stripping gel cleanser with a soft fresh rinse.",
    price: 9,
    compare: 19,
    bg: "linear-gradient(135deg, #def4e9, #ffffff)",
    bottle: "linear-gradient(160deg, #c9f0d7, #75caa1)"
  },
  {
    id: "peptide-bounce-serum",
    name: "Peptide Bounce Serum",
    goal: "barrier",
    label: "Pep",
    description: "Silky serum for a plump, cushiony nighttime routine.",
    price: 20,
    compare: 38,
    bg: "linear-gradient(135deg, #ffe5ed, #ffffff)",
    bottle: "linear-gradient(160deg, #ffd1df, #ff8fab)"
  },
  {
    id: "berry-vita-mask",
    name: "Berry Vita Sheet Mask Set",
    goal: "brightening",
    label: "Mask",
    description: "Five glow masks for an easy weekly reset.",
    price: 11,
    compare: 22,
    bg: "linear-gradient(135deg, #ffdbe8, #ffffff)",
    bottle: "linear-gradient(160deg, #ffc8da, #e989be)"
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
        <div class="product-media" style="--product-bg: ${product.bg}; --product-bottle: ${product.bottle}">
          <div class="product-bottle" data-label="${product.label}"></div>
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
        <div class="cart-thumb" style="--product-bg: ${product.bg}"></div>
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
