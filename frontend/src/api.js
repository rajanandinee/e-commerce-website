export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/products"); // backend URL
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API error:", error); // will show in browser console
    return [];
  }
};
