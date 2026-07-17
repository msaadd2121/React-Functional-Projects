import { Link } from "react-router-dom";
import { Addtocart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transition hover:scale-105 ${theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-white text-black"
        }`}
    >
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-56 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">
        <h2
          className={`text-lg font-semibold truncate ${theme === "dark" ? "text-white" : "text-gray-800"
            }`}
        >
          {product.title}
        </h2>

        <p className={`text-2xl font-bold mt-2 ${theme === "dark" ? "text-white" : "text-blue-600"
          }`}>
          ${product.price}
        </p>

        <div className="flex items-center justify-between mt-5">
          <Link
            to={`/product/${product.id}`}
            className={`hover:underline ${theme === "dark"
                ? "text-white hover:text-blue-400"
                : "text-blue-600"
              }`}
          >
          View Details
        </Link>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          onClick={() => {
            dispatch(Addtocart(product));
            console.log("Added:", product);
            alert("Product Added Successfully!");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div >
  );
};

export default ProductCard;