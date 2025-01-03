// src/app/products/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "../data/products";

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 bg-[#F5E6FE]">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#6A0572]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link href={`/products/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-[#3D1E6D]">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="text-[#6A0572] hover:text-[#C77DFF] underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
