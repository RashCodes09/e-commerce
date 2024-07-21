import Image from "next/image";
import React from "react";

const Category = () => {
  const data = [
    {
      id: 1,
      name: "Body Care",
      image: "/Sunscreen.png",
    },
    {
      id: 2,
      name: "Hair Care",
      image: "/facekit.png",
    },
    {
      id: 3,
      name: "Lip Care",
      image: "/facetoner.png",
    },
    {
      id: 4,
      name: "Skinacare",
      image: "/faceSerum.png",
    },
  ];
  return (
    <main className="hidden md:w-[100%] h-[310px] md:flex justify-center items-center ">
      <section className="w-[90%] h-full  ">
        <div className="">
          <p className="text-[30px] font-semibold">Shop By Category</p>
        </div>
        <div className="mt-8 flex gap-5 ">
          {data.map((el: any) => (
            <div key={el.id}>
              <Image
                src={el.image}
                alt="My Image"
                width={1000}
                height={1000}
                className="h-[200px] w-[350px] object-cover  "
              />
              <p className="mt-3 text-[15px] flex items-center justify-center">
                {el.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Category;
