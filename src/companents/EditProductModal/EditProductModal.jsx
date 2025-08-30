import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { toast } from "react-toastify";
import { language } from "../../Language/Language";
import { LanguageContext } from "../../context/languageProvider";

export default function EditProductModal({
  setEditModalOpen,
  EditProductAction,
  setProducts,
}) {
  const [ProductData, setProductData] = useState(EditProductAction);

  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  function saveData(evt) {
    setProductData({ ...ProductData, [evt.target.name]: evt.target.value });
  }

  function handleEdit(evt) {
    evt.preventDefault();

    setProducts((prev) =>
      prev.map((p) => (p.id === ProductData.id ? ProductData : p))
    );

    setEditModalOpen(false);

    toast.success("Product Edited success");
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
        className={`relative w-[400px] rounded-2xl shadow-lg z-10 transition p-6 ${
          theme === "light" ? "bg-white text-black" : "bg-[#1E293B] text-white"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {" "}
            {
              language[lang].pages.productsPage.productsPageModals
                .productsPageModalAdds.edit
            }{" "}
            {language[lang].pages.productsPage.productsPageTitle2}
          </h2>
          <button
            onClick={() => setEditModalOpen(false)}
            className="text-2xl leading-none hover:text-red-500 transition"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleEdit} className="flex flex-col gap-4">
          <input
            defaultValue={EditProductAction.title}
            name="title"
            onChange={saveData}
            type="text"
            placeholder={
              language[lang].pages.productsPage.productsPageList
                .productsPageTitle
            }
            className={`px-3 py-2 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 focus:border-blue-500"
                : "bg-[#334155] border-[#475569] focus:border-blue-400"
            }`}
          />

          <input
            defaultValue={EditProductAction.price}
            onChange={saveData}
            name="price"
            type="number"
            placeholder={
              language[lang].pages.productsPage.productsPageList
                .productsPagePrice
            }
            className={`px-3 py-2 rounded-lg border outline-none transition ${
              theme === "light"
                ? "border-gray-300 focus:border-blue-500"
                : "bg-[#334155] border-[#475569] focus:border-blue-400"
            }`}
          />

          <input
            defaultValue={EditProductAction.category}
            type="text"
            onChange={saveData}
            name="category"
            placeholder={
              language[lang].pages.productsPage.productsPageList
                .productsPageCategory
            }
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
            {
              language[lang].pages.productsPage.productsPageModals
                .productsPageEditModal.productsPageEditModalBtn
            }
          </button>
        </form>
      </div>
    </div>
  );
}
