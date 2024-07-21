"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteProduct,
  removeProductToCart,
} from "../global/redux";

const page = () => {
  const cart = useSelector((state: any) => {
    return state.reducer.cart;
  });
  const dispatch = useDispatch();
  const cost = cart
    .map((el: any) => {
      return el.qty * parseInt(el.price);
    })
    .reduce((a: number, b: number) => {
      return a + b;
    }, 0);
  return (
    <main className="">
      <section className="flex justify-center items-center md:my-5 md:flex border-b pb-5 md:items-start md:justify-start">
        <p className="border-r pr-5 ">Total Items: {cart?.length}</p>
        <p className="border-r px-5 ">Total Cost: ₦{cost.toLocaleString()} </p>
        <Button variant="destructive">Process to Payment</Button>
      </section>
      {cart.length === 0 ? (
        <>
          <div>you have nothng in here</div>
        </>
      ) : (
        <>
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
            {cart.map((el: any) => (
              <div key={el.id} className="border rounded-md p-1  flex flex-col">
                <Image
                  src={el.image}
                  alt="My Image"
                  width={1000}
                  height={1000}
                  className="h-[200px] w-full object-cover  "
                />

                <p className="mt-3 text-[16px] font-semibold">{el.name}</p>
                <main className="flex justify-between items-center">
                  <p className="mt-3 text-[20px] font-extrabold">
                    ₦{(parseInt(el.price) * el.qty).toLocaleString()}
                  </p>
                  <section className="flex gap-3">
                    <button
                      onClick={() => {
                        dispatch(addProductToCart(el));
                      }}
                      className="border rounded-md px-4 py-2 text-[15px] text-white flex justify-center items-center bg-black"
                    >
                      +
                    </button>
                    <p className="flex justify-center items-center">{el.qty}</p>
                    <button
                      onClick={() => {
                        dispatch(removeProductToCart(el));
                      }}
                      className="border rounded-md px-4 py-2 text-[15px] text-white flex justify-center items-center bg-black"
                    >
                      -
                    </button>
                  </section>
                </main>
                <main className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => {
                      console.log("Amount to Pay: ", el.price * el.qty);
                    }}
                    className="border rounded-md px-6 py-2 text-[15px] text-white flex justify-center items-center bg-black"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteProduct(el));
                    }}
                    className="border rounded-md px-6 py-2 text-[15px] text-white flex justify-center items-center bg-black"
                  >
                    Delete
                  </button>
                </main>
              </div>
            ))}
          </main>
        </>
      )}
    </main>
  );
};

export default page;
