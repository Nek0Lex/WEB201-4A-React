import NavBar from "@/components/NavBar";
import Image from 'next/image'
import { javaLogo, kotlinLogo, flutterLogo, reactLogo, gitLogo, swiftLogo } from '../images/imagePath'



export default function SkillsSection() {
  const logoList = [
    {
      logoUrl: javaLogo,
      logoAlt: "Java",
    },
    {
      logoUrl: kotlinLogo,
      logoAlt: "Kotlin",
    },
    {
      logoUrl: flutterLogo,
      logoAlt: "Flutter",
    },
    {
      logoUrl: reactLogo,
      logoAlt: "React",
    },
    {
      logoUrl: gitLogo,
      logoAlt: "Git",
    },
    {
      logoUrl: swiftLogo,
      logoAlt: "Swift",
    }
  ];


  return (
    <>
      <div className="flex flex-col mx-10 ">
        <div className="flex w-screen">
          <p className="text-left text-5xl mt-10">Tech Stack</p>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 mt-10 gap-y-10">
            {
              logoList.map((logo) => (
                <div className="flex flex-col justify-center items-center">
                  <Image src={logo.logoUrl} alt={logo.logoAlt} width={150} height={150}></Image>
                  <div className="text-center mt-5">
                    {logo.logoAlt}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
