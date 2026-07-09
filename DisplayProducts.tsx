"use client";

import React, { useState } from "react";
import Script from "next/script";
import { PRODUCT_CATEGORIES, PRODUCT_CATEGORY_MAPPING } from "./config";

type ShoppexProduct = {
  id: string;
  title: string;
  price: number;
  stock: number;
  uniqid: string;
  description: string;
  image_url?: string;
  custom_fields?: Array<{ name: string; default: string }>;
  variants?: any[];
};

const DisplayProducts = ({ products }: { products: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleScriptLoad = () => {
    console.log("Shoppex script loaded successfully");
  };

  const getProductCategory = (product: ShoppexProduct): string => {
    // Check manual mapping first
    if (PRODUCT_CATEGORY_MAPPING[product.title]) {
      return PRODUCT_CATEGORY_MAPPING[product.title];
    }

    // Check keyword matching
    const productTitle = product.title.toLowerCase();
    for (const category of PRODUCT_CATEGORIES) {
      if (category.keywords.length === 0) continue; // Skip "All"
      if (category.keywords.some(keyword => productTitle.includes(keyword.toLowerCase()))) {
        return category.name;
      }
    }

    return "Other"; // Default category for uncategorized products
  };

  const getProductPriceDisplay = (product: ShoppexProduct) => {
    let minPrice = product.price;

    if (product.variants && product.variants.length > 0) {
      const variantPrices = product.variants
        .map((v: any) => v.price)
        .filter((p: any) => p !== undefined && p !== null);

      if (variantPrices.length > 0) {
        minPrice = Math.min(...variantPrices);
      }
    }

    if (minPrice !== undefined && minPrice > 0 && minPrice < 0.01) {
      return `$${minPrice}`;
    }

    const formattedPrice = `$${(minPrice || 0).toFixed(2)}`;
    return formattedPrice;
  };

  const isStartingAt = (product: ShoppexProduct) => {
    return product.variants && product.variants.length > 0 && product.price === 0;
  };

  if (!products?.data) {
    return <div className="text-center text-white font-bold py-20">Loading Catalog...</div>;
  }

  // Get "All" products list
  const allProductsGroup = products.data.find((g: any) => g.title === "All");
  const allProducts: ShoppexProduct[] = allProductsGroup ? allProductsGroup.products_bound : [];

  // Filter by category
  let categoryFilteredProducts = allProducts;
  if (selectedCategory !== "All") {
    categoryFilteredProducts = allProducts.filter(
      (p) => getProductCategory(p) === selectedCategory
    );
  }

  // Filter by search
  const filteredProducts = categoryFilteredProducts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <Script src="https://checkout.shoppex.io/embed/embed.iife.js" onLoad={handleScriptLoad} />

      {/* Category Tabs */}
      <div className="products-categories">
        <div className="categories-scroll">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.name}
              className={`category-tab ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
              title={category.description}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="products-search-wrap">
        <div id="poda" className="products-search-poda">
          <div className="poda-inner">
            <div className="products-search-icon" style={{ marginRight: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="20" fill="none">
                <circle stroke="#ff4fbf" r="8" cy="11" cx="11"></circle>
                <line stroke="#ff4fbf" y2="16.65" y1="22" x2="16.65" x1="22"></line>
              </svg>
            </div>
            <input
              id="products-search-input"
              placeholder="Search products..."
              type="text"
              className="products-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const isOut = product.stock === 0;
          const displayPrice = getProductPriceDisplay(product);
          const hasStartingAt = isStartingAt(product);

          return (
            <div key={product.uniqid} className={`pc ${isOut ? 'pc--out-of-stock' : ''}`} data-shoppex-product-id={isOut ? undefined : product.uniqid}>
              <div className="pc__thumb-wrap">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.title} className="pc__thumb" loading="lazy" />
                ) : (
                  <div style={{ color: "rgba(255,255,255,0.2)" }}>No Image</div>
                )}
              </div>

              <div className="pc__body">
                <div className="pc__top">
                  <h3 className="pc__name">{product.title}</h3>
                  <div className="pc__stock-wrap">
                    {isOut ? (
                      <span className="pc__stock pc__stock--out">Out of Stock</span>
                    ) : (
                      <span className="pc__stock pc__stock--in">
                        {product.stock === -1 ? 'In Stock' : `${product.stock} In Stock`}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pc__bottom">
                  <div className="pc__buy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="pc__buy-icon">
                      <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425zm3.35 7h7z"></path>
                    </svg>
                    {isOut ? "Out of Stock" : "Buy Now"}
                  </div>
                  <div className="pc__pricing">
                    {hasStartingAt && <span className="pc__label">Starting at</span>}
                    <span className="pc__price">
                      <span>{displayPrice}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-white/50 py-10" style={{ fontFamily: 'Satoshi' }}>No products found.</p>
      )}
    </>
  );
};

export default DisplayProducts;