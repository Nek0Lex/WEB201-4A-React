import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-row h-full items-center justify-center">
          <div className="flex w-1/2 justify-center">
            <p className="text-left text-5xl">
              Hello There!
              <br /> I am Alex Wong
            </p>
          </div>
          <div className="w-1/2">profile pic</div>
        </div>
      </main>
    </>
  );
}
