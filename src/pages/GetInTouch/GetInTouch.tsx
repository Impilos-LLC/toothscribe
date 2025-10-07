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
    <div id="demo">
      <div className="max-w-[84rem] mx-auto p-8 grid md:grid-cols-2 gap-8 rounded-lg mt-5 bg-no-repeat mb-10">
        <div>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Want to learn more about ToothScribe or see how it fits into your
            dental practice? Our team is here to help you every step of the way.
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
  );
};

export default GetInTouch;
