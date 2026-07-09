"use client";

import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRes = await fetch(
          `https://api.shoppex.io/dev/v1/products?timestamp=${Date.now()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHOPPEX_API_KEY}`,
            },
          }
        );
        
        if (!productsRes.ok) throw new Error(`Failed to fetch products: ${productsRes.statusText}`);
        
        const productsDataResponse = await productsRes.json();
        const allProducts = (productsDataResponse?.data || []).filter(
          (p: any) => !p.unlisted && !p.private
        );

        // Fetch variants for products with price 0 to get accurate pricing
        await Promise.all(
          allProducts.map(async (p: any) => {
            if (p.price === 0) {
              try {
                const variantsRes = await fetch(
                  `https://api.shoppex.io/dev/v1/products/${p.uniqid}/variants`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHOPPEX_API_KEY}`,
                    },
                  }
                );
                if (variantsRes.ok) {
                  const variantsData = await variantsRes.json();
                  p.variants = variantsData.data || [];
                }
              } catch (e) {
                console.error("Error fetching variants for product:", p.uniqid, e);
              }
            }
          })
        );

        setProductsData({
          data: [
            {
              title: "All",
              products_bound: allProducts
            }
          ]
        } as any);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      

      <section className="container py-20 component" id="products" data-component-id="products">
        <p className="section-overline">✦ What We Offer</p>
        <div className="section-title">
          <h2>
            <span className="sparkles-wrap">
              Products
              <span className="sp" style={{ left: "81.58px", top: "15.74px" }}>
                <svg width="16" height="16" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#e879f9" /></svg>
              </span>
              <span className="sp" style={{ left: "-4.07px", top: "14.64px" }}>
                <svg width="17" height="17" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#e879f9" /></svg>
              </span>
            </span>
          </h2>
        </div>
        
        <div className="section-subtitle">
          <p>Products that are loved by our customers</p>
        </div>

        <DisplayProducts products={productsData} />
      </section>
    </>
  );
};

export default Products;
