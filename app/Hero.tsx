import React from "react";
import mainfour from "@/public/mainfour.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="md:w-[100%]  flex justify-center md:mt-5">
      <section className=" block md:w-[90%] h-full md:flex  ">
        <div className=" z-1 md:mt-[0px] ">
          <Image
            src={mainfour}
            alt="My Image"
            width={1000}
            height={1000}
            className="h-full w-[620px] object-cover "
          />
        </div>
        <div className="mt-[-px]  md:flex flex-col md:mt-40 justify-start ml-20 w-[55%] ">
          <p className=" mt-10 text-[30px]  md:text-[30px] font-bold">
            New Arrivals
          </p>
          <h1 className="mt-[-px] leading-[65px] md:mt-10 text-[70px] font-bold">
            Timeless <br /> Beauty Care
          </h1>
          <p className="mt-5 mb-3 md:mt-14 leading-7 text-[16px] font-normal text-gray-700">
            Discover the secrets to glowing, youthful skin at Glowing Skin{" "}
            <br /> Secrets. Our curated selection of skincare essentials and
            expert <br />
            advice will help you unlock the beauty within
          </p>
          <Link
            href="/"
            className=" md:underline md:mt-12 font-extrabold text-[16px] hover:text-orange-500 cursor-pointer hover:font-normal"
          >
            View Collection
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
