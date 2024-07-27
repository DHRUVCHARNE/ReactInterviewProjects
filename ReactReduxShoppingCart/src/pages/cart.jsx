import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartTile from "../component/cartTile";
function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[60vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((item) => (
                <CartTile cartItem={item} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-blue-500">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-green-500 font-bold ">Total Items</span>
                <span>:{cart.length}</span>
              </p>
              <p>
                <span className="text-green-500 font-bold ">Total Amount</span>
                <span>:{totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-2 text-cyan-950">
            Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-blue-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
