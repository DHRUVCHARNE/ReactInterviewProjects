import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartSlice";
import { useSelector } from "react-redux";

function ProductTile({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function AddCart() {
    dispatch(addToCart(product));
  }
  function RemoveCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="group flex flex-col items-center border-2 border-cyan-400 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-cover"
        />
        <div>
          <h1 className="w-40 truncate mt-3 text-blue-700 font-bold text-lg ">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id) ? RemoveCart : AddCart
            }
            className="active:bg-cyan-400 bg-blue-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
