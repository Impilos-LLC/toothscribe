export default function ToothScribeFeatures() {
  return (
    <section className="rounded-xl overflow-hidden max-w-7xl mx-auto mb-15">
      <div className="rounded-xl overflow-hidden">
        <div
          className="bg-cover bg-center bg-no-repeat pt-20 pb-28 pl-15 pr-15 text-white"
          style={{
            backgroundImage: `url("/assests/Feature/toothscribe_apart_bg.svg")`,
          }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">
            What Sets ToothScribe Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Referral Doctor Letters */}
            <div className="p-4 rounded-lg">
              <img
                src={"/assests/Feature/add_file_icon.svg"}
                alt="Referral Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-medium mb-2 text-left">
                Referral Doctor Letters
              </h3>
              <p className="text-left">
                Instantly generate professional letters for referring doctors
                with clinical accuracy.
              </p>
            </div>

            {/* Voice-Based Transcript Editing */}
            <div className="p-4 rounded-lg">
              <img
                src={"/assests/Feature/mic_icon.svg"}
                alt="Voice Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-medium mb-2 text-left">
                Voice-Based Transcript Editing
              </h3>
              <p className="text-left">
                Add updates post-consultation using your voice – no typing
                needed.
              </p>
            </div>

            {/* Dental-Specific Notes */}
            <div className="p-4 rounded-lg">
              <img
                src={"/assests/Feature/add_file_icon.svg"}
                alt="Notes Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-medium mb-2 text-left">
                Dental-Specific Notes
              </h3>
              <p className="text-left">
                Different formats of notes including SOAP format to choose from.
              </p>
            </div>

            {/* Dedicated Support Team */}
            <div className="p-4 rounded-lg">
              <img
                src={"/assests/Feature/add_user_icon.svg"}
                alt="Support Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-medium mb-2 text-left">
                Dedicated Support Team
              </h3>
              <p className="text-left">
                Real people, real help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
