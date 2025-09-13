export default function ProductCard({ product }) {
  if (!product) return null; // prevent crash
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}
