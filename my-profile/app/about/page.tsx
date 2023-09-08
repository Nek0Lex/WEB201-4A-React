import AboutMeSection from "@/app/about/components/AboutMeSection";
import NavBar from "@/components/NavBar";
import SkillsSection from "./components/SkillsSection";

export default function About() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full">
          <AboutMeSection />
          <SkillsSection />
        </div>
      </main>
    </>
  );
}
