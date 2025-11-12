/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import mockProducts from "../data/Mockdata";
import categories from "../data/CategoriesData";

const Categories = () => {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let result = [];

    if (selectedCategory === "All") {
      // 🧩 Group products by category
      const grouped = {};

      products.forEach((product) => {
        const cat = product.category || "Uncategorized";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(product);
      });

      // 🎯 Take 6 products from each category
      Object.keys(grouped).forEach((cat) => {
        result = [...result, ...grouped[cat].slice(0, 6)];
      });
    } else {
      // 🔍 Filter only selected category
      result = products
        .filter((p) => p.category && p.category === selectedCategory)
        .slice(0, 6);
    }

    // 🔍 Apply search after filtering
    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Customizable Gifts
          </h1>
          <p className="text-gray-600 mb-6">
            Find the perfect personalized gift for your loved ones
          </p>

          {/* Category Buttons */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Shop by Category
              </h2>
            </div>

            <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`min-w-[100px] p-4 rounded-3xl text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-blue-100 shadow-sm"
                  }`}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a product..."
                className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </header>

        {/* Product Grid */}
        <main>
          {filteredProducts.length > 0 ? (
            selectedCategory === "All" ? (
              // 🧠 “All” View — Grouped by Category
              Object.entries(
                filteredProducts.reduce((acc, product) => {
                  const cat = product.category || "Uncategorized";
                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(product);
                  return acc;
                }, {})
              ).map(([category, products]) => (
                <div key={category} className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {category}
                  </h2>

                  <AnimatePresence>
                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                      {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md cursor-pointer"
                          >
                            <img
                              src={product.image?.src || "/fallback.jpeg"}
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                              <h3 className="font-bold text-lg text-gray-800">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500 mb-2">
                                {product.category || "Uncategorized"}
                              </p>
                              <p className="text-sm text-gray-600 mb-3">
                                {product.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="text-blue-600 font-bold">
                                  {product.price
                                    ? `$${product.price}`
                                    : "Price on Request"}
                                </span>
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                  View Details
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))
            ) : (
              // 🧩 Specific Category View
              <AnimatePresence>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                  layout
                >
                  {filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md cursor-pointer"
                      >
                        <img
                          src={product.image?.src || "/fallback.jpeg"}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                          <h3 className="font-bold text-lg text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {product.category || "Uncategorized"}
                          </p>
                          <p className="text-sm text-gray-600 mb-3">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold">
                              {product.price
                                ? `$${product.price}`
                                : "Price on Request"}
                            </span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                              View Details
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            )
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <p className="text-xl font-bold text-gray-700">
                No products found
              </p>
              <p className="text-gray-500 mb-6">
                Try a different category or search term
              </p>
              <button
                onClick={() => alert("Redirect to custom request form")}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
              >
                Didn't find your gift? Let us know 💬
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx="true">{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Categories;
