"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; 
import { getProduct } from "../../data/products";
import React from "react";

// Define the product structure
interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
}

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null
  );
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useCart(); 
  const router = useRouter(); 
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setUnwrappedParams(resolvedParams);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (unwrappedParams) {
      const loadProduct = async () => {
        try {
          const fetchedProduct = await getProduct(unwrappedParams.id);
          setProduct(fetchedProduct);
        } catch (error) {
          setError("Failed to load product details.");
        } finally {
          setLoading(false);
        }
      };
      loadProduct();
    }
  }, [unwrappedParams]);

  if (loading) return <div className="text-center py-8">Loading product...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  const handlePlaceOrder = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      });
      router.push("/cart"); 
    }
  };

  return (
    product && (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 bg-[#F5E6FE]">
        <h1 className="text-3xl font-bold mb-6 text-[#6A0572]">{product.title}</h1>

        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-90"
          />
        </div>

        <p className="text-gray-600 mb-4 mt-4">{product.description}</p>
        <p className="text-lg font-semibold text-[#3D1E6D] mb-4">
          Price: ${product.price}
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePlaceOrder}
            className="bg-[#6A0572] text-white px-6 py-2 rounded-md hover:bg-[#3D1E6D] transition"
          >
            Place Order
          </button>
        </div>
      </div>
    )
  );
};

export default ProductPage;
