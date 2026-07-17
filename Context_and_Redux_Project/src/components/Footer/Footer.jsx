import { Link,NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";


export default function Footer() {

  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">ShopEase</h2>

          <p className="mt-3">
            Your one-stop destination for quality products at affordable
            prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-400">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="hover:text-blue-400">
                Cart
              </NavLink>
            </li>

            <li>
              <Link to="/" className="hover:text-blue-400">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p>📧 msaadd2121@gmail.com</p>
          <p>📞 +92 314 4951082</p>
          <p>📍  Faisalabad, Pakistan</p>
        </div>

      </div>

      {/* Bottom */}
      <div
        className={`text-center py-4 ${theme === "dark"
            ? "border-t border-gray-700"
            : "border-t border-gray-300"
          }`}
      >
        © {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
}