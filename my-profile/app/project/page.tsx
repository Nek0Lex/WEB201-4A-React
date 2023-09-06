import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

export default function Project() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full ml-10">
          <div className="flex w-screen">
            <p className="text-left text-5xl mt-10">Projects</p>
          </div>
          <div className="flex flex-wrap w-screen mt-10">
            {Array(4).map((index) => (
              <ProjectCard key={index} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
