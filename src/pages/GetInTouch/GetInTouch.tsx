import MailLineIcon from "remixicon-react/MailLineIcon";
// import PhoneLineIcon from "remixicon-react/PhoneLineIcon";
import RequestDemoForm from "./RequestDemoForm";
import { useSubmitForm } from "../../hooks/useSubmitForm";

const GetInTouch = () => {
  const { submitForm, loading, success } = useSubmitForm();

  const handleFormSubmit = async (formData: any) => {
    await submitForm(formData);
  };

  return (
    <section
      id="demo"
      className="relative w-full bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[960px] h-[600px] pointer-events-none hidden md:block"
        viewBox="0 0 961 783"
        fill="none"
      >
        <g opacity="0.4" filter="url(#filter0_f_251_644)">
          <path
            d="M274.867 78C220.486 266.408 191.764 639.911 511.927 626.656C832.09 613.401 895.588 327.633 887.317 186.406"
            stroke="url(#paint0_linear_251_644)"
            strokeWidth="114.383"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_251_644"
            x="0.799042"
            y="-162.219"
            width="1127.4"
            height="1029.42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="91.5062"
              result="effect1_foregroundBlur_251_644"
            />
          </filter>
          <linearGradient
            id="paint0_linear_251_644"
            x1="153.5"
            y1="353"
            x2="888"
            y2="417.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1887C3" />
            <stop offset="1" stopColor="#0D9488" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center bg-no-repeat">
          {/* Left Column - Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Want to learn more about ToothScribe or see how it fits into your
              dental practice? Our team is here to help you every step of the
              way.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-6">
              <div
                className="text-white p-3 rounded-lg"
                style={{ backgroundColor: "#0D9488" }}
              >
                <MailLineIcon />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-medium">info@toothscribe.ai</p>
              </div>
            </div>

            {/* Optional phone block (kept commented)
            <div className="flex items-center justify-center md:justify-start">
              <div
                className="text-white p-3 rounded-lg mr-4"
                style={{ backgroundColor: "#0D9488" }}
              >
                <PhoneLineIcon />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-medium">+1-586-509-6993</p>
              </div>
            </div>
            */}
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center md:justify-end">
            <RequestDemoForm
              onSubmit={handleFormSubmit}
              isLoading={loading}
              isSuccess={success}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
