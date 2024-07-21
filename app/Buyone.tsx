"use client";
import React from "react";
import Image from "next/image";
import { data } from "./data";
import { addProduct, addProductToCart } from "./global/redux";
import { useDispatch } from "react-redux";

const Buyone = () => {
  const dispatch = useDispatch();
  const datas = dispatch(addProduct(data));

  return (
    <main className=" md:w-[100%]  md:flex justify-center items-center ">
      <section className="w-[90%] md:w-[90%] h-full ">
        <div className="mt-3">
          <p className="ml-[73px] text-[28px] md:text-[30px] font-semibold">
            Our Best Seller's
          </p>
        </div>

        <div className=" grid grid-cols-1  md:gap-5 xl:grid xl:grid-cols-4 md:grid md:grid-cols-3">
          {datas.payload?.map((el: any) => (
            <div key={el.id} className=" my-5 md:border">
              <Image
                src={el.image}
                alt="My Image"
                width={1000}
                height={1000}
                className="h-[360px] w-[300px] object-cover  "
              />
              <p className="mt-3 text-[16px] font-semibold">{el.name}</p>
              <p className="mt-3 text-[20px] font-extrabold">₦{el.price}.00</p>
              <button className="mt-3 px-[120px] py-2 text-[15px] text-white flex justify-center items-center bg-black">
                Buy Now
              </button>
              <button
                className="mt-3 px-[120px] py-2 text-[15px] text-white flex justify-center items-center bg-black"
                onClick={() => {
                  dispatch(addProductToCart(el));
                }}
              >
                Add Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Buyone;
