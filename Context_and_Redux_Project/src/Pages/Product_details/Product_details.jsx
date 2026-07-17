import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Addtocart } from "../../Redux/CartSlice";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const { data } = useSelector((state) => state.products);

    const product = data.find((item) => item.id === Number(id));

    if (!product) {
        return <h1 className="text-center text-2xl mt-10">Product Not Found</h1>;
    }

    return (
        <>
            <Navbar />

            <div
                className={`min-h-screen py-10 ${theme === "dark"
                        ? "bg-gray-900 text-white"
                        : "bg-white text-black"
                    }`}
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                    {/* Product Image */}
                    <div>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            {product.title}
                        </h1>

                        <p className="text-3xl font-bold text-blue-600 mb-4">
                            ${product.price}
                        </p>

                        <p className="mb-4">
                            {product.description}
                        </p>

                        <p className="mb-2">
                            <strong>Category:</strong> {product.category}
                        </p>

                        <p className="mb-6">
                            <strong>Rating:</strong> ⭐ {product.rating}
                        </p>

                        <button
                            onClick={() => {
                                dispatch(Addtocart(product));
                                alert("Product Added Successfully!");
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                        >
                            Add To Cart
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}