import { ButtonLink } from "@/components/button-link";
import Image from "next/image";
import React from "react";
import DesktopNavLanding from "./(components)/desktop-nav-landing";
import { MobileNavLanding } from "./(components)/mobile-nav-landing";

export default function page() {
  return (
    <div className="container max-w-6xl">
      <div className="fixed left-0 right-0 top-0 z-50  flex w-full items-center justify-between bg-white px-5 py-2 md:relative md:px-0 md:py-6">
        <span className="text-3xl font-bold md:text-[2rem]">
          NOXY UI<span className="text-blue-500">.</span>
        </span>
        <div className="flex md:hidden">
          <MobileNavLanding />
        </div>
        <div className="hidden md:flex">
          <DesktopNavLanding />
        </div>
      </div>

      <div className="mt-14 flex flex-col-reverse items-center justify-between md:mt-0 md:flex-row">
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
          <ButtonLink
            href="/"
            className="mt-4 rounded-full bg-blue-500 px-7 py-6 text-lg shadow-md transition-all hover:-translate-y-1 hover:bg-blue-400 focus:ring"
          >
            Hubungi Sekarang
          </ButtonLink>
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
