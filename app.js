
console.log("helloooooo")

//------------------------why choose us section-------------------------
const whychooseus = document.getElementById("why_choose_us");
const whychooseusdata = [
  {
    title: "Fast Delivery",
    description: "Get your orders delivered to your doorstep quickly and efficiently.",
    icon: "fa-solid fa-truck-fast",
  },
  {
    title: "24/7 Support",
    description: "Our support team is available around the clock to assist you.",
    icon: "fa-solid fa-headset",
  },
  {
    title: "Secure Payments",
    description: "Experience safe and secure transactions with our encrypted payment system.",
    icon: "fa-solid fa-lock",
  },
  {
    title: "Easy Returns",
    description: "not satisfied? Return your products easily within 30 days.",
    icon: "fa-solid fa-rotate-left",
  },
];

if (whychooseus) {
  whychooseusdata.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "relative mt-10 rounded-lg border border-slate-200 bg-white p-6 pt-12 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md";
    card.innerHTML = `
    <i class="${item.icon} absolute top-[-22px] left-5 rounded-xl min-w-[60px] border-4 border-white bg-indigo-100 p-3 text-2xl text-indigo-600"></i>
    <h4 class="mt-2 text-xl font-semibold text-slate-900">${item.title}</h4>
    <p class="mt-3 text-slate-600">${item.description}</p>
  `;
    whychooseus.appendChild(card);
  });
}

// -------------------------trending products section-------------------------
const trendingnow = document.getElementById("trending_now");
const trendingnowdata = [
  {
    prductName: "Fjallraven - Foldsack No. 1 Backpack,",
    price: 109.95,
    image: "/assets/trendingImages/bag.png",
  },
  {
    prductName: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image: "/assets/trendingImages/tshirt.png",
  },
  {
    prductName: "Mens Cotton Jacket",
    price: 55.99,
    image: "/assets/trendingImages/jacket.png",
  }];
if (trendingnow) {
  trendingnowdata.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      " rounded-lg border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md";
    card.innerHTML = `
    <div class="bg-[#e4e7eb] p-6">
      <img src="${item.image}" alt="${item.prductName}" class=" object-contain" />
    </div>
    <div class="px-3 py-4 flex items-center justify-between">
    <small class=' rounded-full px-2 py-1 text-xs font-medium text-indigo-500 bg-indigo-100'>Men's Clothing</small>
    <small class=' rounded-full ml-2 px-2 py-1 text-xs font-medium'>
    <i class="fa-solid fa-star text-yellow-400"></i> 3.9 (120)
    </small>
    </div>
    <h4 class=" px-3 mt-2 text-small font-semibold text-slate-900">${item.prductName}</h4>
    <p class=" px-3 mt-3 mb-4 text-slate-600">$${item.price}</p>
  `;
    trendingnow.appendChild(card);
  });
}

//------------------Categories section-------------------------



const categoriesContainer = document.getElementById("categories");

function createCategoryButton(label, value) {
  const filterBtn = document.createElement('button');
  filterBtn.className = "px-4 py-2 text-sm font-medium text-slate-600 bg-white rounded-full hover:bg-indigo-500 hover:text-white focus:outline-none cursor-pointer";
  filterBtn.setAttribute('data-category', value);
  filterBtn.textContent = label
  return filterBtn;
}

function fetchCategories() {
  categoriesContainer.appendChild(createCategoryButton('All', 'all'));
  fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(categories => {
      categories.forEach(category => {
        const filterBtn = createCategoryButton(category, category);
        categoriesContainer.appendChild(filterBtn);
      });
    })
    .catch(error => console.error('Error fetching categories:', error));
}
if (categoriesContainer) {
  fetchCategories();
}

categoriesContainer.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-category]');
  if (button) {
    const category = button.getAttribute('data-category');
    categoriesContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('bg-white', 'text-slate-600', 'bg-indigo-900', 'text-white'));
    button.classList.add('bg-indigo-900', 'text-white');
    console.log("category---->", category);
    filterProducts(category);
  }
});

function setActiveCategoryButton(category) {
  const btn = categoriesContainer.querySelector(`button[data-category="${category}"]`);
  if (btn) {
    btn.classList.remove('bg-white', 'text-slate-600');
    btn.classList.add('bg-indigo-900', 'text-white');
  }
}
setActiveCategoryButton('all');

// ---------------------------products section-------------------------
const productsContainer = document.getElementById('products_Container');

filterProducts('all');

function filterProducts(category) {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      let filteredProducts = products;
      if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
      }
      console.log("filteredProduct", filteredProducts)
      displayProducts(filteredProducts);
    })
    .catch(error => console.error('Error fetching products:', error));
}


function displayProducts(products) {
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'my-4 rounded-lg border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="object-contain mx-auto w-full h-68 bg-slate-200 p-4" />
      <div class="px-3 py-4 flex items-center justify-between">
        <small class='rounded-full px-2 py-1 text-xs font-medium text-indigo-500 bg-indigo-100'>${product.category}</small>
        <small class='rounded-full ml-2 px-2 py-1 text-xs font-medium'>
          <i class="fa-solid fa-star text-yellow-400"></i> ${product.rating.rate} (${product.rating.count})
        </small>
      </div>
      <h4 class="px-3 mt-2 text-small font-semibold text-slate-900">${product.title}</h4>
      <p class="px-3 mt-3 mb-4 text-slate-600">$${product.price}</p>
      <div class="px-3 pb-4 grid grid-cols-2 gap-2">
        <button onclick="showProductDetails(${product.id})" class="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-300 cursor-pointer bg-white rounded-lg hover:bg-slate-100 focus:outline-none"> 
        <i class="fas fa-eye"></i> Details</button>
        <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer hover:bg-indigo-700 ">
       <i class="fas fa-cart-shopping"></i> 
        Add</button>
      </div>
    `;
    productsContainer.appendChild(productCard);
  });
}


function showProductDetails(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
    //show product details in a popup modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50';
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 class="text-xl font-bold mb-4">${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" class="object-contain mx-auto w-full h-64 mb-4" />
        <p class="text-slate-600 mb-4">${product.description}</p>
        <p class="text-lg font-semibold text-slate-900 mb-4">$${product.price}</p>
        <button id="closeModal" class="absolute top-2 right-2 h-8 w-8 text-sm font-medium text-white bg-indigo-600/50 rounded-full hover:bg-indigo-700 ">
        <i class="fas fa-times"></i></button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeModal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  })
  .catch(error => console.error('Error fetching product details:', error));
}