import Image from "next/image";
import React from "react";
import AboutImg from '@/assets/about.avif'

const AboutPage = () => {
  return (
    <div className="px-5">
      <h2 className="text-center text-5xl font-bold mb-10">About Us</h2>
      <p className="text-center md:w-2/3 mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
        modi! Architecto cum excepturi non obcaecati qui laboriosam facilis a
        quisquam harum nulla reprehenderit ratione praesentium laborum corporis,
        unde ex vero!
      </p>
      {/* About container */}
      <div className="grid md:grid-cols-2 my-16 md:w-4/5 mx-auto gap-8">
      <div className="relative md:order-2">
            <Image src={AboutImg} width={500} height={500} alt="" className="rounded hover:scale-110 transition-all duration-300"/>
            <div className="bg-indigo-500 w-full h-[316px] -z-10 absolute top-2 mt-4 left-2 ml-5 rounded border-2 border-white hidden md:block"></div>
            <div className=" w-full h-[316px] -z-10 absolute top-6 mt-4 left-6 ml-5 rounded border-2 border-yellow-300 hidden md:block"></div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">We are care about...</h2>
          <p className="my-5 md:w-11/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatibus, deleniti porro doloribus, excepturi ea alias similique fugit delectus ab eligendi veritatis corrupti dolore quidem expedita, magni facilis optio distinctio sint sit sapiente dolor repellendus. 
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta aspernatur molestias id veniam porro, qui tempora, eveniet exercitationem asperiores maiores architecto dolores sed commodi reiciendis tempore accusantium ea! Iste!
          </p>
          <button className="btn hover:bg-indigo-700 hover:text-white">Contact me</button>
          <a className="ml-3 text-indigo-700 hover:border-2 rounded text-center hover:border-indigo-600 px-3 py-2 transition-all duration-300 cursor-pointer">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
