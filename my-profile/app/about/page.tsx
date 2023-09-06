import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full">
          <div className="flex w-screen">
            <p className="text-left text-5xl ml-10 mt-10">About me</p>
          </div>
          <div className="flex w-screen">
            <p className="text-left text-l mx-10 mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pretium, enim ac rhoncus ullamcorper, metus diam malesuada nunc,
              sed laoreet quam neque a sapien. Etiam urna elit, luctus vitae
              dictum quis, tristique sed libero. Donec non lectus mi. Cras a
              nibh dolor. Aliquam pretium, sem sed dapibus finibus, augue velit
              tincidunt tellus, sed pretium velit nisl at metus. Pellentesque
              tristique augue vitae enim congue ullamcorper. Quisque euismod ex
              leo. Nunc dolor erat, commodo vitae dignissim vel, cursus
              tristique dui.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
