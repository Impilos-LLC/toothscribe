export default function SecurityTrust() {
  const features = [
    {
      title: "Follows HIPAA regulations",
      description:
        "Every feature in ToothScribe is designed with HIPAA regulations in mind so your practice stays protected.",
      iconSrc: "/assests/Home/shield_icon.svg",
    },
    {
      title: "End-to-End Encryption",
      description:
        "Your PHI is locked down with encryption, isolation, and secure access policies.",
      iconSrc: "/assests/Home/datafow_icon.svg",
    },
    {
      title: "Access Control & Privacy First",
      description:
        "Only authorized users can view or manage data. You can edit and delete notes anytime.",
      iconSrc: "/assests/Home/editFile_icon.svg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 text-center mb-10">
      <h2 className="text-3xl font-bold mb-4">Security you can Trust</h2>
      <p className="text-gray-600">
        We take data privacy seriously. ToothScribe is built to protect your
        records and fully complies
      </p>
      <p className="text-gray-600 mb-10">
        with HIPAA guidelines for safeguarding patient health information.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 rounded-[24px] border"
            style={{ borderColor: "rgba(59, 59, 59, 0.12)" }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={feature.iconSrc}
                alt="Feature Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
