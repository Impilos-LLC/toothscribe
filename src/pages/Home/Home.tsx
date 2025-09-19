import About from "../About/About";
import Features from "../Features/Features";
import ToothScribeFeatures from "../ToothscribeApart/ToothscribeApart";
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
        <Features />
      </section>

      <ToothScribeFeatures />
      <section id="about" className="min-h-screen">
        <About />
      </section>
    </div>
  );
};

export default Home;
