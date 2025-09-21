import React, { useState } from "react";

import img1 from "../../../assets/shopping-cart/img6.png";
import img2 from "../../../assets/shopping-cart/img7.png";
import img3 from "../../../assets/shopping-cart/img8.png";
import img4 from "../../../assets/shopping-cart/img9.png";

import xIcon from "../../../assets/shopping-cart/x-mark.png";

const YourCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Philodendron",
      desc: "Indoor plant",
      price: 1500,
      quantity: 1,
      img: img1,
    },
    {
      id: 2,
      name: "Peace Lily",
      desc: "Indoor plant",
      price: 1500,
      quantity: 3,
      img: img2,
    },
    {
      id: 3,
      name: "ZZ plant",
      desc: "Indoor plant",
      price: 1500,
      quantity: 2,
      img: img3,
    },
    {
      id: 4,
      name: "Jade Plant",
      desc: "Indoor plant",
      price: 1400,
      quantity: 2,
      img: img4,
    },
  ]);

  // Increment quantity
  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity (min = 1)
  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = cartItems.length > 0 ? 500 : 0;
  const total = subtotal + tax;

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <h2 className="text-[63px] font-bold text-[#264D10] mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No items in your cart.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div
            className="flex-1 bg-[#E8F6E296] rounded-[17px] px-6 pt-6 pb-10 
             overflow-x-auto max-w-5xl"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Wrapper to enable horizontal scroll */}
            <div className="min-w-[900px]">
              {/* Header Row */}
              <div className="grid grid-cols-4 font-semibold bg-[#D9D9D9] border-none rounded-[20px] shadow-sm py-2 px-6 mb-4">
                <span className="text-[26px] leading-[31px] text-black">
                  Product
                </span>
                <span className="text-[26px] leading-[31px] text-black">
                  Price
                </span>
                <span className="text-[26px] leading-[31px] text-black">
                  Quantity
                </span>
                <span className="text-[26px] leading-[31px] text-black">
                  Subtotal
                </span>
              </div>

              {/* Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center rounded py-4 mb-6"
                  style={{
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={xIcon}
                      alt="Remove"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    />
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div>Rs.{item.price}</div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-2 py-1 border rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div>Rs.{item.price * item.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3 bg-[#E8F6E2] rounded-[26px] opacity-[70%] shadow p-6">
            <h3 className="text-[35px] font-bold text-[#264D10] mb-6">
              Order Summary
            </h3>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-[25px] font-medium text-[#3B3737]"
                >
                  <span>
                    {item.quantity} {item.name}
                  </span>
                  <span>Rs.{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium">
                <span className="text-[25px] font-medium text-[#3B3737]">
                  Sales Tax
                </span>
                <span className="text-[25px] font-medium text-[#3B3737]">
                  Rs.{tax}
                </span>
              </div>
              <div className="flex justify-between font-bold text-green-900">
                <span className="text-[25px] font-medium text-[#3B3737]">
                  Subtotal
                </span>
                <span className="text-[25px] font-medium text-[#3B3737]">
                  Rs.{total}
                </span>
              </div>
            </div>

            <div className="px-6">
              <button className="w-full mt-6 bg-[#4E6A3EF0] text-white py-2 text-[25px] font-semibold rounded-[22px] transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YourCart;
