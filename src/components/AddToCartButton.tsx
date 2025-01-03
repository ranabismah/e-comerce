"use client";

import { FC } from "react";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    id: string;
    title: string;
    price: number;
    images: string[];
  };
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0], // Use the first image
      quantity: 1, // Add 1 by default
    };
    addToCart(cartItem); // Add the product to the cart
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#6A0572] hover:bg-[#3D1E6D] text-white px-4 py-2 rounded-md transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
