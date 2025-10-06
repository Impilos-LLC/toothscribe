import FeatureCards from "./FeatureCards";

const Features = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white mb-20 pb-10"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #252626, #3F4040),
          url("/assests/Feature/feature_bg_image.svg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="p-10 relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-5">
          What ToothScribe Can Do
        </h2>
        <p className="text-center">
          Explore the features that help you save time, stay accurate,
        </p>
        <p className="text-center">and focus more on patient care.</p>
      </div>

      <div>
        <FeatureCards />
      </div>
    </section>
  );
};

export default Features;
