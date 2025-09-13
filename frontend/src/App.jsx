import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard"; // <-- check path sahi ho

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 Dummy products (abhi API connect nahi hai)
        const data = [
          { _id: 1, name: "Laptop", price: 50000 },
          { _id: 2, name: "Mobile", price: 20000 },
          { _id: 3, name: "Headphones", price: 3000 },
        ];

        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">E-commerce Frontend</h1>
      {products.length === 0 ? (
        <p>No products found or fetching...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
