# 🛒 QuickKart - E-commerce Product Catalog

A sleek and modern e-commerce product catalog application built with React, Redux Toolkit, and Tailwind CSS. QuickKart provides a seamless shopping experience with product browsing, advanced filtering, and favorites management.

## ✨ Key Features

- **Product Browsing** - View products from Fake Store API with detailed information
- **Smart Search & Filters** - Real-time search, category filters, and price sorting
- **Favorites System** - Save and manage favorite products
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI** - Clean interface with smooth animations and gradient accents

## 🚀 Tech Stack

- React 19 + Redux Toolkit
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls

## 🏃‍♂️ Quick Start

```bash
# Clone repository
git clone https://github.com/Akhilg-02/QuickKart-Neuradynamics.git
cd quickkart

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test
```

Access the app at `http://localhost:5173`

## 📱 How to Use

1. **Browse Products** - Search, filter by category, or sort by price
2. **Add Favorites** - Click the heart icon to save products
3. **View Details** - Click any product for detailed information
4. **Manage Favorites** - Visit the Favorites page to see saved items

## 🌐 API

Uses [Fake Store API](https://fakestoreapi.com/) for product data and categories.

## 📁 Project Structure

```
quickkart/
├── src/
│   ├── components/          	# Reusable UI components
│   │   ├── ProductCard.jsx  		# Product display card
│   │   ├── FavoriteButton.jsx 		# Favorite toggle button
│   │   └── FilterBar.jsx    		# Search and filter controls
│   ├── pages/               	# Page components
│   │   ├── ProductList.jsx  		# Main product listing page
│   │   ├── ProductDetail.jsx 		# Individual product details
│   │   └── FavoritesPage.jsx 		# Favorites collection page
│   ├── redux/
│   ├── app/
│   └── store.js             	# Redux store setup
│   ├── slices/
│   ├── products/            	# Products slice
│   │   └── productsSlice.js
│   ├── filters/             	# Filters slice
│   │   └── filtersSlice.js
│   └── favorites/           	# Favorites slice
│       └── favoritesSlice.js
│   ├──  __tests__/
│   ├── productsSlice.test.js
│   ├── filtersSlice.test.js 
│   └── favoritesSlice.test.js
│   └── ProductCard.test.jsx
│   └── FilterBar.test.jsx
│   └── FavoriteButton.test.jsx
│   └── UserFlow.test.jsx
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
├── index.css                 # Global styles
├── package.json
└── README.md
```

## 📸 Screenshots

### Home Page
![Home Page](https://raw.githubusercontent.com/Akhilg-02/QuickKart-Neuradynamics/refs/heads/main/public/home.png)

### Product Details
![Product Details](https://raw.githubusercontent.com/Akhilg-02/QuickKart-Neuradynamics/refs/heads/main/public/product.png)

### Favorites Page
![Favorites](https://raw.githubusercontent.com/Akhilg-02/QuickKart-Neuradynamics/refs/heads/main/public/favourite.png)

## 🤝 Contributing

Contributions welcome! Please open an issue for major changes.

## 📄 License

MIT License

---

⭐ **Star this project if you find it helpful!** ⭐
