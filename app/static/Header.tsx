"use client";
import Image from "next/image";
import React, { useState } from "react";
import skinlogo from "@/public/skinlogo.png";
import { GiSelfLove } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Shop",
      url: "/",
    },
    {
      id: 3,
      name: "New Arrival",
      url: "/",
    },
    {
      id: 4,
      name: "Skin Care",
      url: "/",
    },
    {
      id: 5,
      name: "On Sale",
      url: "/",
    },
    {
      id: 6,
      name: "Contact Us",
      url: "/",
    },
  ];
  const [show, setShow] = useState<boolean>(false);
  const cart = useSelector((state: any) => {
    return state.reducer.cart;
  });
  return (
    <main className="">
      <div className=" md:w-[100%] mb-[20px]  md:flex  justify-center items-center">
        <RxHamburgerMenu
          onClick={() => setShow(!show)}
          className="text-[25px]  font-extrabold md:hidden"
        />

        <section className="hidden md:w-[90%] h-[150px]  md:flex flex-col justify-center items-center ">
          <div className=" hidden  md:flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-8 text-[20px]">
              <GiSelfLove />
              <IoPerson />
            </div>
            <div>
              <Image
                src={skinlogo}
                alt="My Image"
                width={1000}
                height={1000}
                className="h-[90px] w-[100px] object-cover "
              />
            </div>
            <div className=" md:flex justify-center items-center text-[30px] relative ">
              <Link href="/cart">
                {cart.length > 0 && (
                  <p className="absolute -top-2 left-2 text-white text-[8px] uppercase font-bold rounded-full bg-red-600 w-5 h-5 flex items-center justify-center">
                    {cart?.length}
                  </p>
                )}
                <MdShoppingCart />
              </Link>
            </div>
          </div>
          <div className="hidden  md:flex items-center gap-7 my-3">
            {data.map((el: any) => (
              <Link href={el.url} key={el.id}>
                <nav className="hover:text-orange-500 cursor-pointer">
                  {el.name}
                </nav>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="flex justify-between items-center ">
        <div>
          {show ? (
            <div>
              {data.map((el: any) => (
                <div key={el.id}>
                  <Link
                    href={el.url}
                    className="gap-3 flex flex-col h-full my-2"
                  >
                    <nav className="hover:text-orange-500 cursor-pointer ">
                      {el.name}
                    </nav>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="  text-[30px] relative md:hidden ">
          <Link href="/cart">
            {cart.length > 0 && (
              <p className="absolute -top-2 left-2 text-white text-[8px] uppercase font-bold rounded-full bg-red-600 w-5 h-5 flex items-center justify-center">
                {cart?.length}
              </p>
            )}
            <MdShoppingCart />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Header;
