import NavBar from "@/components/NavBar";
import Image from "next/image";
import profileIcon from "../public/1559I.jpg";
import nextJspPic from "../public/nextjs.png";
import tailwindpPic from "../public/tailwind.png";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-row h-full items-center justify-center">
          <div className="flex w-1/2 flex-col h-screen pl-24 justify-center">
            <h1 className="text-left text-5xl">Hello There!👋</h1>
            <br />
            <h1 className="text-left text-3xl">Welcome!</h1>
            <br />
            <p>
              I am a seasoned Development Engineer with 3+ years of software
              engineering, mobile development, backend technology experience.
              Recognized for demonstrating a natural aptitude for applying
              research and development strategies, as well as for establishing
              successful software engineering.
            </p>
            <br />
            <p>This web build with:</p>
            <div className="flex flex-row h-40">
              <Image
                src={nextJspPic}
                alt="nextjs"
                className="mr-10"
                width={160}
              ></Image>
              <Image
                src={tailwindpPic}
                alt="tailwind"
                className="ml-30"
                width={150}
              ></Image>
            </div>
          </div>
          <div className="flex flex-col w-1/2 justify-items-center items-center	">
            <div className="w-6/12">
              <div className="p-10">
                <img
                  src={profileIcon.src}
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
            <p className="text-center">Alex Wong</p>
          </div>
        </div>
      </main>
    </>
  );
}
