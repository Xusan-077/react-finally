import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeProvider";

export default function AddProductModal({
  setProducts,
  products,
  setAddModalOpen,
}) {
  const { theme } = useContext(ThemeContext);

  const [productData, setProductData] = useState({});

  function hendleSubmit(evt) {
    evt.preventDefault();

    setProducts([...products, productData]);
    setAddModalOpen(false);
  }

  function saveData(evt) {
    setProductData({ ...productData, [evt.target.name]: evt.target.value });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 ${
          theme === "light" ? "bg-black/30" : "bg-black/60"
        }`}
      ></div>

      <div
        className={`relative w-[400px] p-[30px_20px] rounded-2xl shadow-lg z-10 transition ${
          theme === "light" ? "bg-white text-black" : "bg-[#1E293B] text-white"
        }`}
      >
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-xl font-semibold">Add Product</h2>
          <button
            onClick={() => setAddModalOpen(false)}
            className="text-2xl leading-none hover:text-red-500 transition"
          >
            &times;
          </button>
        </div>

        <form onSubmit={hendleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            onChange={saveData}
            type="text"
            placeholder="Title"
            className={`px-3 py-2 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 focus:border-blue-500"
                : "bg-[#334155] border-[#475569] focus:border-blue-400"
            }`}
          />

          <input
            onChange={saveData}
            name="price"
            type="number"
            placeholder="Price"
            className={`px-3 py-2 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 focus:border-blue-500"
                : "bg-[#334155] border-[#475569] focus:border-blue-400"
            }`}
          />

          <input
            type="text"
            onChange={saveData}
            name="category"
            placeholder="Category"
            className={`px-3 py-2 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 focus:border-blue-500"
                : "bg-[#334155] border-[#475569] focus:border-blue-400"
            }`}
          />

          <button
            type="submit"
            className="mt-2 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
