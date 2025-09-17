import About from "../About/About";
import HomePageContent from "./HomePageContent";
import SecurityTrust from "./SecurityTrust";

const Home = () => {
  return (
    <div>
      <section id="home" className="min-h-screen">
        <HomePageContent />
        <SecurityTrust />
      </section>

      <section id="feature" className="min-h-screen">
        {/* Features content */}
        <h2>Features Section</h2>
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>
    </div>
  );
};

export default Home;
