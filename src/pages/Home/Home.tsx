import HomePageContent from "./HomeFirstPage";

const Home = () => {
  return (
    <div>
      <section id="home" className="min-h-screen">
        <HomePageContent />
      </section>

      <section id="feature" className="min-h-screen">
        {/* Features content */}
        <h2>Features Section</h2>
      </section>

      <section id="about" className="min-h-screen">
        {/* About content */}
        <h2>About Us Section</h2>
      </section>
    </div>
  );
};

export default Home;
