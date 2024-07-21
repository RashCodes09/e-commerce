import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  const inspire = [
    { id: 1, name: "Beauty Book", url: "/" },
    { id: 2, name: "Skin Guide", url: "/" },
    { id: 3, name: "Neywork", url: "/" },
    { id: 4, name: "Routine Care", url: "/" },
    { id: 5, name: "Skin Care", url: "/" },
  ];
  const help = [
    { id: 1, name: "Contact Us", url: "/" },
    { id: 2, name: "Faq", url: "/" },
    { id: 3, name: "Store Locator", url: "/" },
    { id: 4, name: "Cancellation & Return", url: "/" },
    { id: 5, name: "Shipping & Delivery", url: "/" },
  ];
  return (
    <main className="hidden md:w-[100%] h-[476px] md:flex justify-center items-center bg-black">
      <section className="w-[90%] h-full">
        <div className="flex items-center justify-between mt-28 text-white">
          <div>
            <p className="text-[30px] font-bold"> Skin Guide</p>
            <p className="mt-5 font-semibold">
              Dictum venenatis eu class et. <br /> Accumsan scelerisque
              phasellus <br />
              inceptos tortor in et cubilia vestibulum, <br /> enim auctor
              facilisi lobortis
            </p>
          </div>
          <div>
            <p className="text-[30px] font-bold "> Skin Care</p>
            {help.map((el: any) => (
              <Link href={el.url} key={el.id}>
                <nav className=" font-semibold hover:cursor-pointer hover:text-orange-500">
                  {el.name}
                </nav>
              </Link>
            ))}
          </div>
          <div>
            <p className="text-[30px] font-bold"> Help Us</p>
            {inspire.map((el: any) => (
              <Link href={el.url} key={el.id} className="">
                <nav className=" font-semibold hover:cursor-pointer hover:text-orange-500">
                  {el.name}
                </nav>
              </Link>
            ))}
          </div>
          <div>
            <div className="text-[30px] font-bold mt-5">Conatct Us</div>
            <div className="mt-5 font-semibold gap-3 flex flex-col">
              <p>support@skincare.com</p>
              <p>Ph-1800-345-2038</p>
              <p>Ph-1800-305-2480</p>
              <p>Mon - Sun, 9 am to 6 pm</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-b mt-24 " />
          <div className="flex justify-between items-center mt-5 text-white">
            <div>
              <p className="font-semibold text-[16px]">
                Copyright | Th Shop Mania | Developed by Themehunk
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 text-[22px]">
              <FaFacebookF />
              <FaFacebookF />
              <FaPinterestP />
              <CiInstagram />
              <FaTwitter />
              <CiYoutube />
              <TbWorld />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
