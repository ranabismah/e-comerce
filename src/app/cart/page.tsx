//src/app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleIncreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1); // Ensure quantity is greater than 0
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true); // Trigger order slip display
  };

  if (cart.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-8">Your cart is empty.</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 bg-[#F5E6FE]">
      <h1 className="text-3xl font-bold mb-6 text-[#6A0572]">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-4 p-4 border rounded-lg bg-white shadow-md"
          >
            <div>
              <h2 className="text-xl font-semibold text-[#3D1E6D]">
                {item.name}
              </h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <div>
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-gray-400 text-white px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>{" "}
                {/* Display quantity */}
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="bg-gray-400 text-white px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash size={20} />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePlaceOrder}
          className="bg-[#6A0572] text-white px-6 py-2 rounded-md hover:bg-[#3D1E6D] transition"
        >
          Place Order
        </button>
      </div>

      {/* Order Slip */}
      {orderPlaced && (
        <div className="mt-8 p-6 bg-white shadow-lg border border-[#6A0572] rounded-lg">
          <h2 className="text-2xl font-semibold text-[#6A0572] mb-4">
            Order Slip
          </h2>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between mb-2 text-[#3D1E6D]"
              >
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-semibold text-[#6A0572]">
            {/* Total calculation */}
            <p>
              Total: $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
