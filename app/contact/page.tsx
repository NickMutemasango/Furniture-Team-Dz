import React from "react";
import Image from "next/image";

import two from "@/public/footer img.png"

const contact = () => {
  return (
    <div className="">

<div className="h-1.5 m-10 bg-darkgreen rounded-full"></div>


        <div className="w-full grid gap-8 md:grid-cols-2  bg-green ">
     <Image src={two}
    className="  w-full"
     alt="" />
     <div className="flex flex-col itemes-center justify-center text-darkgreen  ">
      <div className="p-10">
     <h1 className="text-6xl text-light  font-light pb-5">Join Our</h1>
     <h3 className="text-6xl font-semibold pb-5 font-sans" >Newsletter</h3>
     <p   className="text-md  font-semibold pb-5">Receive exclusive deals, discouts and many offers.</p>

     <form className="bg-green" action="">
     <input type="bg-green  pb-5" placeholder="Enter your email" />
     <button className=" flex items-center justify-center bg-darkgreen text-white mt-5 w-[150px] p-2 rounded-md ">Subscribe</button>
     </form>
     </div>
     </div>
     </div>

      
    </div>
  );
};

export default contact;
