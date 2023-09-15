import NavBar from "@/components/NavBar";
import Image from "next/image";
import profileIcon from "../public/1559I.jpg"
import nextJspPic from "../public/nextjs.png"
import tailwindpPic from "../public/tailwind.png"

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-row h-full items-center justify-center">
          <div className="flex w-1/2 flex-col h-screen ml-80 justify-center">
            <h1 className="text-left text-5xl">
              Hello There!👋
            </h1>
            <br />
            <h2>
              Welcome!
            </h2>
            <br />
            <p>
              I am a seasoned Development Engineer with 3+ years of software engineering, mobile development, backend technology, and technical operations experience. Recognized for demonstrating a natural aptitude for applying research and development strategies, as well as for establishing successful software engineering. Professional focal points include technical proficiencies, data analysis, communication skills, industry expertise, and the ability to adapt to ever-changing situations in a fast-paced environment. Delivering superior administration in these areas expertise requires utilization of effective interpersonal skills, troubleshooting, and a keen eye for detail, as well as independent problem-solving, time management, programming languages, process optimization, project coordination, and resource allocation expertise to support overall efficiency and deliver optimal results.
            </p>
            <br />
            <p>
              This web build with:
            </p>
            <br />
            <div className="flex flex-row ">
              <Image src={nextJspPic} alt="nextjs" className="p-5"></Image>
              <Image src={tailwindpPic} alt="tailwind" className="ml-15 p-10"></Image>
            </div>

          </div>
          <div className="flex flex-col w-1/2 justify-items-center items-center	">
            <div className="w-6/12">
              <div className="p-10">
                <img src={profileIcon.src} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
            <p className="text-center">
              Alex Wong
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
