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
    <div
      id="demo"
      className="relative w-full h-[600px] bg-white overflow-hidden"
    >
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[960px] h-[600px] pointer-events-none"
        viewBox="0 0 961 783"
        fill="none"
      >
        <g opacity="0.4" filter="url(#filter0_f_251_644)">
          <path
            d="M274.867 78C220.486 266.408 191.764 639.911 511.927 626.656C832.09 613.401 895.588 327.633 887.317 186.406"
            stroke="url(#paint0_linear_251_644)"
            stroke-width="114.383"
            stroke-linecap="round"
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
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <stop stop-color="#1887C3" />
            <stop offset="1" stop-color="#0D9488" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-[84rem] mx-auto p-8 grid md:grid-cols-2 gap-50 rounded-lg mt-5 bg-no-repeat mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Want to learn more about ToothScribe or see how it fits into your
              dental practice? Our team is here to help you every step of the
              way.
            </p>

            <div className="flex items-center mb-6">
              <div
                className="text-white p-3 rounded-lg mr-4"
                style={{ backgroundColor: "#0D9488" }}
              >
                <MailLineIcon />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-medium">info@toothscribe.ai</p>
              </div>
            </div>

            <div className="flex items-center">
              {/* <div
              className="text-white p-3 rounded-lg mr-4"
              style={{ backgroundColor: "#0D9488" }}
            >
              <PhoneLineIcon />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="font-medium">+1-586-509-6993</p>
            </div> */}
            </div>
          </div>
          <RequestDemoForm
            onSubmit={handleFormSubmit}
            isLoading={loading}
            isSuccess={success}
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
