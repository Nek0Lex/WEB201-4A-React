import NavBar from "@/components/NavBar";

export default function Contact() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full">
          <div className="flex w-screen">
            <p className="text-left text-5xl ml-10 mt-10">Contact me</p>
          </div>
          <div className="flex flex-col text-l mx-10 mt-10">
            <p className="text-left">
              Hello! I'm Alex, a passionate developer with a strong commitment
              to crafting elegant and efficient solutions. If you're interested
              in my work, have a project in mind, or simply want to connect and
              discuss technology, I'd love to hear from you. Feel free to reach
              out through the contact form provided on this page or connect with
              me on LinkedIn. I'm always excited to collaborate, learn, and
              share insights with fellow developers and enthusiasts. Let's
              connect and build something amazing together!
            </p>
            <br></br>

            {/* form */}
            <form className="shadow-md rounded pt-4 pb-8 mb-4 w-1/2">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  //   for="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your message to me
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
                {/* <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
