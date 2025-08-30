import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { LanguageContext } from "../../context/languageProvider";
import { toast } from "react-toastify";

export default function DeleteProductModal({
  setDeleteModalOpen,
  setproducts,
  DeleteProductAction,
}) {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  function handleDelete() {
    setproducts((product) =>
      product.filter((el) => el.id !== DeleteProductAction.id)
    );
    setDeleteModalOpen(false);
    toast.success("Product delete success");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          theme === "light" ? "bg-black/30" : "bg-black/60"
        }`}
      ></div>

      {/* Modal */}
      <div
        className={`relative w-[450px] rounded-2xl shadow-lg z-10 transition p-6 ${
          theme === "light" ? "bg-white text-black" : "bg-[#1E293B] text-white"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Delete Product</h2>
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="text-2xl leading-none hover:text-red-500 transition"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="text-center mb-6">
          <p className="text-[18px]">
            Are you sure you want to delete this{" "}
            <span className="font-semibold text-red-500">
              {DeleteProductAction.title}
            </span>
            ?
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-1">
          <button
            onClick={handleDelete}
            className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={() => setDeleteModalOpen(false)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              theme === "light"
                ? "bg-gray-200 hover:bg-gray-300 text-black"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
