import { useEffect, useState } from "react";
import LoaderLineIcon from "remixicon-react/LoaderLineIcon";
import Toast from "../../components/Toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface RequestDemoFormProps {
  onSubmit?: (formData: FormData) => void;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const inputBaseClasses =
  "w-full p-3 rounded-md border border-gray-200 bg-white focus:border-gray-400 focus:ring-1 focus:ring-gray-300";

const RequestDemoForm: React.FC<RequestDemoFormProps> = ({
  onSubmit,
  isLoading,
  isSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setShowToast(true);
    }
  }, [isSuccess]);

  const isFormValid = Object.values(formData).every(
    (field) => field.trim() !== ""
  );

  return (
    <div className="relative w-full">
      {showToast && (
        <Toast
          message="We got your query, we’ll get back to you soon."
          type="success"
          duration={5000}
          onClose={() => setShowToast(false)}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="
          bg-[#F9F9FB] 
          p-6 sm:p-8 
          rounded-2xl 
          shadow-sm 
          w-full 
          max-w-[500px] 
          mx-auto
        "
      >
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputBaseClasses}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputBaseClasses}
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBaseClasses} mb-4`}
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${inputBaseClasses} mb-4`}
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBaseClasses} mb-4 h-28 resize-none`}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !isFormValid}
          className={`
            w-full 
            flex items-center justify-center gap-2 
            text-white p-3 rounded-lg font-medium 
            bg-[#0D9488] transition 
            ${
              isLoading || !isFormValid
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#0b7d74] cursor-pointer"
            }
          `}
        >
          Send Message
          {isLoading && <LoaderLineIcon className="animate-spin" />}
        </button>
      </form>
    </div>
  );
};

export default RequestDemoForm;
