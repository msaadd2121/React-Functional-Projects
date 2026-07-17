import React from "react";

export default function Hero() {
  
  return (
    
    <section
      className="h-[88vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Discover Amazing Products
        </h1>

        <p className="text-lg mb-6">
          Shop the latest collection at the best prices.
        </p>

        <button className="bg-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

