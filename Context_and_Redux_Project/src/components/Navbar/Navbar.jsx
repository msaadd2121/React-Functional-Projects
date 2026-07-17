import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";


export default function Navbar() {
    const { cartItems } = useSelector((state) => state.cart);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav
            className={`flex justify-between items-center px-8 py-4 shadow-md ${theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
                }`}
        >
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-600">
                ShopEase
            </h1>

            {/* Links */}
            <div className="flex items-center gap-6">
                <NavLink
                    to="/"
                    className={`font-medium hover:text-blue-600 ${theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                >
                Home
            </NavLink>

            <NavLink
                to="/cart"
                className="text-gray-700 hover:text-blue-600 relative text-xl"
            >
                🛒
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </NavLink>

            <button
                onClick={toggleTheme}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>
        </nav >
    );
}