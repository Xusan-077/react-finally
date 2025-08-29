import React, { useContext, useState } from "react";
import Item from "../../companents/Item/Item";
import ThemeProvider, { ThemeContext } from "../../context/themeProvider";
import AddProductModal from "../../companents/AddProductModal/AddProductModal";

export default function Products() {
  const product = [
    {
      title: "iphone 16 pro max",
      price: 1340,
      category: "phone",
    },
    {
      title: "iphone 14 pro max",
      price: 900,
      category: "phone",
    },
    {
      title: "MacBook air m4",
      price: 2000,
      category: "laptop",
    },
  ];
  const [products, setProducts] = useState(product);
  const [AddModalOpen, setAddModalOpen] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {AddModalOpen && (
        <AddProductModal
          setProducts={setProducts}
          products={products}
          setAddModalOpen={setAddModalOpen}
        />
      )}

      <div className="flex justify-between items-center pr-[20px] mb-[30px]">
        <h3
          className={`text-[25px] font-medium ${
            theme === "light" ? "text-[#000]" : "text-[#fff]"
          }`}
        >
          Products
        </h3>
        <button
          onClick={() => setAddModalOpen(true)}
          className={`px-[15px] py-[10px] text-[#fff] rounded-lg cursor-pointer bg-[#4880FF]`}
        >
          + Add Product
        </button>
      </div>

      <div
        className={`shadow rounded-2xl p-[30px_20px] ${
          theme === "light" ? "bg-[#fff]" : "bg-[#273142]"
        }`}
      >
        <h3
          className={`text-[23px] mb-[25px] font-bold ${
            theme === "light" ? "text-gray-800" : "text-[#fff]"
          }`}
        >
          Protuct Details
        </h3>
        <div className="">
          <div
            className={`flex py-[15px] rounded-2xl mb-[20px] ${
              theme === "light" ? "bg-[#F1F4F9]" : "bg-[#313C4D]"
            }`}
          >
            <h2
              className={`text-[15px] uppercase font-bold w-[20%] text-center ${
                theme === "light" ? "text-gray-700" : "text-[#fff]"
              }`}
            >
              Title
            </h2>
            <h2
              className={`text-[15px] uppercase font-bold w-[20%] text-center ${
                theme === "light" ? "text-gray-700" : "text-[#fff]"
              }`}
            >
              Price
            </h2>
            <h2
              className={`text-[15px] uppercase font-bold w-[20%] text-center ${
                theme === "light" ? "text-gray-700" : "text-[#fff]"
              }`}
            >
              Category
            </h2>
            <h2
              className={`text-[15px] uppercase font-bold w-[20%] text-center ${
                theme === "light" ? "text-gray-700" : "text-[#fff]"
              }`}
            >
              edit
            </h2>
            <h2
              className={`text-[15px] uppercase font-bold w-[20%] text-center ${
                theme === "light" ? "text-gray-700" : "text-[#fff]"
              }`}
            >
              delate
            </h2>
          </div>
          <ul className={``}>
            {products.map((el, index) => (
              <Item key={index} product={el} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
