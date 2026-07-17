import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../../Redux/CartSlice";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../Context/ThemeContext";


export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />

      <div
        className={`min-h-screen ${theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
          }`}
      >
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <h2
              className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
            >
              Your cart is empty.
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-lg p-4 shadow-md ${theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white border"
                    }`}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                  />

                  <h2 className="text-lg font-semibold mt-4">
                    {item.title}
                  </h2>

                  <p
                    className={`font-bold mt-2 ${theme === "dark"
                        ? "text-white"
                        : "text-green-600"
                      }`}
                  >
                    ${item.price}
                  </p>

                  <button
                    onClick={() => dispatch(RemoveFromCart(item.id))}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}