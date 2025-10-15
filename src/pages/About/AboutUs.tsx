export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto mt-15 px-4 sm:px-6 lg:px-8 md:mb-20 lg:mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">About ToothScribe</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Section */}
        <div
          className="text-center md:text-left text-gray-700 max-w-xl mx-auto md:mx-0 space-y-6"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "170%",
          }}
        >
          <p>
            ToothScribe is a specialized AI-powered scribe platform designed
            exclusively for dental professionals. It streamlines clinical
            documentation by recording consultations, generating accurate
            transcripts, and producing structured medical summaries – all in
            real time.
          </p>
          <p>
            From patient-friendly visit letters to detailed SOAP notes,
            ToothScribe ensures every interaction is captured clearly and
            securely.
          </p>
          <p>
            Built with dental workflows in mind and backed by HIPAA regulations
            security, it’s the smarter way to manage your practice’s
            documentation.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/About/About_Conversation.svg"
            alt="About ToothScribe Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
