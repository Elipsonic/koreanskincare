const products = [
  {
    id: "glass-skin-starter-drop",
    name: "Glass Skin Starter Drop",
    goal: "bundle",
    label: "Drop",
    description: "AOV-friendly starter bundle: toner pads, glow cream, mask night, and a gentle first cleanse.",
    price: 49,
    compare: 76,
    bg: "linear-gradient(135deg, #ffe0ea, #ffffff)",
    bottle: "linear-gradient(160deg, #ffc8df, #f58ab6)"
  },
  {
    id: "barrier-rescue-drop",
    name: "Barrier Rescue Drop",
    goal: "bundle",
    label: "Care",
    description: "A calmer routine bundle for dry, sensitive, or over-exfoliated skin goals.",
    price: 58,
    compare: 88,
    bg: "linear-gradient(135deg, #dff3ff, #ffffff)",
    bottle: "linear-gradient(160deg, #cfefff, #8ab8ff)"
  },
  {
    id: "mask-night-pack",
    name: "Mask Night 10-Pack",
    goal: "mask",
    label: "10x",
    description: "A compact sheet and hydrogel mask pack made for low-friction restocks and gifts.",
    price: 29,
    compare: 48,
    bg: "linear-gradient(135deg, #fff1c9, #ffffff)",
    bottle: "linear-gradient(160deg, #fff5cc, #d7be76)"
  },
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
    goal: "viral",
    label: "PDRN",
    description: "Trending capsule serum for hydrated, firm-looking, dewy skin without medical claims.",
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
    description: "Light calming toner for redness-prone, oily, or sensitive-feeling routines.",
    price: 20,
    compare: 34,
    image: "images/product-images/anua-heartleaf-77-soothing-toner.svg",
    bg: "linear-gradient(135deg, #dff3df, #ffffff)",
    bottle: "linear-gradient(160deg, #d3f2d3, #8ecba1)"
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
    description: "Beloved first cleanse for makeup, sunscreen residue, and daily buildup.",
    price: 23,
    compare: 39,
    image: "images/product-images/manyo-pure-cleansing-oil.svg",
    bg: "linear-gradient(135deg, #ffe7b8, #ffffff)",
    bottle: "linear-gradient(160deg, #ffe1a6, #ffb55e)"
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
  { title: "Drop reserved", body: "We received your order and reserved it for the next Korea pickup window.", time: "Day 0" },
  { title: "Korea sourcing", body: "Your items are queued with verified supplier channels in Korea.", time: "Day 1–3" },
  { title: "Product check", body: "Items are matched against the launch-safe catalog before packing.", time: "Day 3–5" },
  { title: "Consolidated export", body: "Your bundle is packed with other drop orders for the Korea-to-U.S. shipment.", time: "Day 5–10" },
  { title: "Boston handoff", body: "The shipment has reached the U.S. fulfillment step and final-mile prep begins.", time: "Day 10–14" },
  { title: "U.S. delivery", body: "Final carrier tracking activates for doorstep delivery.", time: "Day 14–18" }
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
    return `<img src="${product.image}" alt="${product.name} mockup product image" loading="lazy" class="product-image">`;
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
        <div class="product-media" style="--product-bg: ${product.bg}; --product-bottle: ${product.bottle};">
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
          <button class="button primary full" data-add="${product.id}">Add to drop</button>
        </div>
      </article>
    `;
  }).join("");

  if (visible.length === 0) {
    productGrid.innerHTML = `<p class="empty-cart">No products found. Try a different routine, skin goal, or search term.</p>`;
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
  showToast(`${product.name} added to your Korea drop`);
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
    cartItems.innerHTML = `<div class="empty-cart">Your Korea drop is empty. Add a bundle or a few skincare picks.</div>`;
    return;
  }

  cartItems.innerHTML = entries.map(([productId, qty]) => {
    const product = products.find(item => item.id === productId);
    if (!product) return "";

    const thumbStyle = product.image
      ? `background-image: url('${product.image}'); background-size: cover; background-position: center;`
      : `background: ${product.bg};`;

    return `
      <div class="cart-item">
        <div class="cart-thumb" style="${thumbStyle}"></div>
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
        <span class="timeline-dot"></span>
        <div>
          <strong>${step.title}</strong>
          <p>${step.body}</p>
        </div>
        <time>${step.time}</time>
      </li>
    `;
  }).join("");
}

filters?.addEventListener("click", event => {
  const button = event.target.closest(".filter");
  if (!button) return;

  state.filter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  renderProducts();
});

searchInput?.addEventListener("input", event => {
  state.search = event.target.value;
  renderProducts();
});

cartButton?.addEventListener("click", openCart);
closeCart?.addEventListener("click", closeCartDrawer);
cartDrawer?.addEventListener("click", event => {
  if (event.target === cartDrawer) closeCartDrawer();
});

checkoutButton?.addEventListener("click", () => {
  showToast("Checkout is a prototype. Connect payments and compliance before launch.");
});

advanceTracking?.addEventListener("click", () => {
  state.trackingIndex = (state.trackingIndex + 1) % trackingSteps.length;
  renderTimeline();
});

newsletterForm?.addEventListener("submit", event => {
  event.preventDefault();
  newsletterMessage.textContent = "You are on the first Korea drop list. Prototype signup saved locally only.";
  newsletterForm.reset();
});

renderProducts();
renderCart();
renderTimeline();
