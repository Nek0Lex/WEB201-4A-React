import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

export default function Project() {
  type project = {
    title: string;
    desc: string;
    tags: Array<string>;
    imgSrc: string;
  }

  const projectList = [
    {
      title: "My profile website",
      desc: "My profile website",
      tags: ["#TypeScript", "#ReactJS", "#NextJS", "#TailWind CSS"],
      imgSrc: "myProfile.png",
    },
    {
      title: "Trasy",
      desc: "A barter app",
      tags: ["#Kotlin", "#Android", "#MVVM"],
      imgSrc: "trasy.png",
    },
    {
      title: "The Senior Care",
      desc: "My profile website",
      tags: ["#ReactNative", "#ReactJS", "#NextJS", "#StyledComponent"],
      imgSrc: "seniorCare.png",
    },
    {
      title: "FlipMen",
      desc: "A game about bottle",
      tags: ["#ReactNative", "#ReactJS", "#NextJS", "#StyledComponent"],
      imgSrc: "flipmen.png",
    },
  ]

  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full ml-10">
          <div className="flex w-screen">
            <p className="text-left text-5xl mt-10">Projects</p>
          </div>
          <div className="flex flex-wrap max-w-screen mt-10">
            {projectList
              .map((project, index) => (
                <ProjectCard key={index} title={project.title} desc={project.desc} tags={project.tags} imgSrc={project.imgSrc} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
