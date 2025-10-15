import MicLineIcon from "remixicon-react/MicLineIcon";

function RecordSessionCard() {
  return (
    <>
      <div
        className="flex flex-col items-center gap-6 rounded-[16px] 
                 p-8 md:p-[61px_158px] h-auto md:h-[260px] border border-[rgba(219,214,214,0.5)] bg-white"
        style={{
          boxShadow:
            "-105.762px 132.931px 47.545px 0 rgba(0, 0, 0, 0), -67.921px 85.386px 43.663px 0 rgba(0, 0, 0, 0.01), -37.842px 47.545px 36.871px 0 rgba(0, 0, 0, 0.03), -16.495px 21.347px 27.168px 0 rgba(0, 0, 0, 0.04), -3.881px 4.851px 14.554px 0 rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(3.396px)",
        }}
      >
        <button className="flex items-center space-x-2 px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 transition">
          <MicLineIcon className="w-5 h-5" color="#0D9488" />
          <span>Start Recording</span>
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Record session
        </h2>

        <p className="text-gray-600 text-center">
          Drag in or{" "}
          <a href="#" className="text-teal-500 underline">
            upload
          </a>{" "}
          an existing session
        </p>
      </div>

      <button
        onClick={() => alert("Redirect to Signin")}
        className="inline-flex items-center justify-center px-8 py-3 text-white text-sm font-medium transition rounded-[16px] mt-14 md:mt-0"
        style={{ background: "#0F766E", minWidth: "150px" }}
      >
        Book a demo
      </button>
    </>
  );
}

function HomePageHeadlines() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-6 md:space-y-8 -mt-24 sm:-mt-20 md:-mt-40 px-4 md:px-0">
      {/* Main Headlines */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Less Typing.
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-2 sm:mt-3 md:mt-4">
          More Treating.
        </h1>
      </div>

      {/* Subtext */}
      <div className="text-center">
        <h1 className="text-sm sm:text-md md:text-md text-gray-900">
          From session recordings to SOAP note,
        </h1>
        <h1 className="text-sm sm:text-md md:text-md text-gray-900 mt-1 sm:mt-1.5 md:mt-1">
          ToothScribe handles it all while you focus on care.
        </h1>
      </div>

      {/* Session Card */}
      <RecordSessionCard />
    </div>
  );
}

function HomePageContent() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-lines">
      {/* Blurry SVG Background */}
      <img
        src="/assets/Home/blurryBG_image.svg"
        alt="Background Decoration"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mt-10"
        style={{ width: "1900px", height: "700px" }}
      />

      {/* Main Content */}
      <HomePageHeadlines />
    </div>
  );
}

export default HomePageContent;
