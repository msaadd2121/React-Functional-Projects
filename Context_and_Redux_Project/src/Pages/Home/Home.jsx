import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero_Section/Hero";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/Product_Card/Product_card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { FetchData } from "../../Redux/ProductSlice";
import { ThemeContext } from "../../Context/ThemeContext";

function Home() {
    const dispatch = useDispatch();

    const { data, pending, error } = useSelector(
        (state) => state.products
    );

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        dispatch(FetchData());
    }, [dispatch]);

    if (pending) {
        return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
    }

    if (error) {
        return <h1 className="text-center text-red-500 mt-10">{error}</h1>;
    }

    return (
        <div
            className={
                theme === "dark"
                    ? "bg-gray-900 text-white min-h-screen"
                    : "bg-white text-black min-h-screen"
            }
        >
            <Navbar />
            <Hero />

            <section className="max-w-7xl mx-auto px-6 py-12" className={`max-w-7xl mx-auto px-6 py-12 ${theme === "dark"
                    ? "bg-gray-900"
                    : "bg-white"
                }`}
            >
                <h2 className="text-3xl font-bold text-center mb-10">
                    Featured Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;