import { ButtonLink } from "@/components/button-link";
import Image from "next/image";
import React from "react";
import DesktopNavLanding from "./(components)/desktop-nav-landing";
import { MobileNavLanding } from "./(components)/mobile-nav-landing";
import { LampCeiling, ShoppingCart, Users2Icon } from "lucide-react";
import AosInit from "./(components)/aos-init";

export default function page() {
  return (
    <>
      <AosInit />
      <div className="dark container max-w-6xl ">
        <nav>
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
        </nav>

        <main className="mb-60">
          <section className="mt-14 flex flex-col-reverse items-center justify-between md:mb-52 md:mt-28 md:flex-row ">
            <div className="relative md:mr-20" data-aos="fade-right">
              <h1 className="text-2xl font-bold md:text-5xl">
                Solusi Inovatif untuk Pertumbuhan Bisnis Anda
              </h1>
              <span className="mt-4 block text-sm text-[#6c757d] md:text-base">
                Kami adalah mitra ideal bagi bisnis Anda dalam hal pengembangan
                aplikasi. Tim ahli kami siap membantu Anda menciptakan solusi
                aplikasi yang inovatif dan kreatif, sesuai dengan kebutuhan
                bisnis Anda. Dengan fokus pada kualitas, keamanan, dan
                pengalaman pengguna, kami berusaha untuk memberikan solusi
                aplikasi yang memenuhi standar kualitas terbaik.
              </span>
              <ButtonLink
                href="/"
                className="mt-4 rounded-full bg-blue-500 shadow-md transition-all hover:-translate-y-1 hover:bg-blue-400 focus:ring dark:text-white md:px-7 md:py-6 md:text-lg"
              >
                Hubungi Sekarang
              </ButtonLink>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className=" h-[20rem] w-[20rem]  md:h-[30rem] md:w-[30rem]">
                <Image
                  alt="icon"
                  src={"/assets/images/landing-image.svg"}
                  fill
                />
              </div>
            </div>
          </section>
          <section
            className="mt-14 flex flex-col items-center md:mt-28 md:flex-row "
            data-aos="fade-up"
          >
            <div className="relative w-full">
              <h1 className="text-center text-2xl font-bold md:text-4xl">
                Mengapa harus memilih Kami?
              </h1>
              <span className="mb-3 mt-2 block text-center text-sm text-[#6c757d] md:text-base">
                Berikut beberapa alasan mengapa Anda harus memilih Kami sebagai
                solusi digital Anda.
              </span>
              <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:gap-10">
                <div className="relative mt-10 w-full rounded-sm bg-gray-100 p-4 pt-12 ">
                  <div className="flex justify-center">
                    <div className="absolute -top-10 flex h-20 w-20  items-center justify-center rounded-full bg-blue-500 text-white">
                      <LampCeiling className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Inovatif dan Kreatif
                  </h3>
                  <span className=" text-[#6c757d]">
                    Kami berdedikasi untuk menciptakan aplikasi yang inovatif
                    dan kreatif dengan menggunakan teknologi terbaru dan metode
                    pengembangan terbaik. Kami terus berinovasi dan memperbarui
                    pengetahuan kami untuk memberikan solusi terbaik bagi klien
                    kami.
                  </span>
                </div>
                <div className="relative mt-10 w-full rounded-sm bg-gray-100 p-4 pt-12 ">
                  <div className="flex justify-center">
                    <div className="absolute -top-10 flex h-20 w-20  items-center justify-center rounded-full bg-blue-500 text-white">
                      <Users2Icon className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">Berpengalaman</h3>
                  <span className=" text-[#6c757d]">
                    Tim kami memiliki pengalaman bertahun-tahun dalam pembuatan
                    aplikasi yang berkualitas tinggi untuk klien dari berbagai
                    industri. Kami telah berhasil menyelesaikan proyek-proyek
                    dengan kepuasan klien yang tinggi, dan telah memperoleh
                    banyak ulasan positif dari klien kami.
                  </span>
                </div>
                <div className="relative mt-10 w-full rounded-sm bg-gray-100 p-4 pt-12 ">
                  <div className="flex justify-center">
                    <div className="absolute -top-10 flex h-20 w-20  items-center justify-center rounded-full bg-blue-500 text-white">
                      <ShoppingCart className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">Kualitas Terjamin</h3>
                  <span className=" text-[#6c757d]">
                    Kami memastikan bahwa setiap aplikasi yang kami buat
                    memiliki kualitas yang tinggi dan sesuai dengan kebutuhan
                    klien. Kami melakukan uji coba secara menyeluruh dan
                    pengujian kualitas sebelum setiap aplikasi dirilis untuk
                    memastikan bahwa aplikasi berfungsi dengan baik dan terbebas
                    dari bug atau masalah teknis lainnya.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className=" flex w-full flex-col border-t border-gray-400 py-10">
          <span className="text-center text-gray-500">
            Copyright © {new Date().getFullYear()} All rights reserved | PT NOXY
            DIGITAL SOLUTION
          </span>
        </footer>
      </div>
    </>
  );
}
