import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="container max-w-6xl">
      <div className="flex items-center justify-between py-6">
        <span className="text-[2rem] font-bold">
          NOXY UI<span className="text-blue-500">.</span>
        </span>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-x-10 ">
            <li className="text-blue-500">Home</li>
            <li>Feature</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="relative md:mr-20">
          <h1 className="text-2xl font-bold md:text-5xl">
            Solusi Inovatif untuk Pertumbuhan Bisnis Anda
          </h1>
          <span className="mt-4 block text-[#6c757d]">
            Kami adalah mitra ideal bagi bisnis Anda dalam hal pengembangan
            aplikasi. Tim ahli kami siap membantu Anda menciptakan solusi
            aplikasi yang inovatif dan kreatif, sesuai dengan kebutuhan bisnis
            Anda. Dengan fokus pada kualitas, keamanan, dan pengalaman pengguna,
            kami berusaha untuk memberikan solusi aplikasi yang memenuhi standar
            kualitas terbaik.
          </span>
          <Button className="mt-4 rounded-full bg-blue-500 px-7 py-6 text-lg shadow-md transition-all hover:-translate-y-1 hover:bg-blue-400 focus:ring">
            Hubungi Sekarang
          </Button>
        </div>
        <div className="relative">
          <div className=" h-[20rem] w-[20rem]  md:h-[30rem] md:w-[30rem]">
            <Image alt="icon" src={"/assets/images/landing-image.svg"} fill />
          </div>
        </div>
      </div>
    </div>
  );
}
