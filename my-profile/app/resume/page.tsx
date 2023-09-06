import NavBar from "@/components/NavBar";

export default function Resume() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full ml-10">
          <div className="flex w-screen">
            <p className="text-left text-5xl mt-10">Resume</p>
          </div>
          <div className="flex w-screen flex-row h-full mt-10">
            <div className="w-1/2">Resume pdf here</div>
            <div className="w-1/2">Download resume here</div>
          </div>
        </div>
      </main>
    </>
  );
}
