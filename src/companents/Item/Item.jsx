import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";

export default function Item({
  product,
  setDeleteModalOpen,
  setDeleteProductAction,
  setEditModalOpen,
  setEditProductAction,
}) {
  const { theme } = useContext(ThemeContext);

  function Delete() {
    setDeleteProductAction(product);
    setDeleteModalOpen(true);
  }

  function Edit() {
    setEditProductAction(product);
    setEditModalOpen(true);
  }

  return (
    <li
      className={`flex py-[20px] border-b-1 ${
        theme === "light" ? "border-gray-300" : "border-gray-700"
      }`}
    >
      <span
        className={`w-[25%] text-center ${
          theme === "light" ? "text-gray-800" : "text-[#fff]"
        }`}
      >
        {product.title}
      </span>
      <span
        className={`w-[25%] text-center   ${
          theme === "light" ? "text-gray-800" : "text-[#fff]"
        }`}
      >
        {product.price}
      </span>
      <span
        className={`w-[25%] text-center   ${
          theme === "light" ? "text-gray-800" : "text-[#fff]"
        }`}
      >
        {product.category}
      </span>
      <span
        onClick={Edit}
        className={`w-[25%] text-center px-[10px]    ${
          theme === "light" ? "text-gray-800" : "text-[#fff]"
        }`}
      >
        <button className="bg-amber-500 py-[7px] px-[25px] cursor-pointer text-[#fff] rounded-[5px]">
          Edit
        </button>
      </span>
      <span
        onClick={Delete}
        className={`w-[25%] text-center ${
          theme === "light" ? "text-gray-800" : "text-[#fff]"
        }`}
      >
        <button className="bg-red-500 py-[7px] px-[25px] cursor-pointer text-[#fff] rounded-[5px]">
          Delete
        </button>
      </span>
    </li>
  );
}
