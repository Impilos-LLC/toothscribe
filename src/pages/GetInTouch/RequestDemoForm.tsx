import { useEffect, useState } from "react";
import LoaderLineIcon from "remixicon-react/LoaderLineIcon";

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
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-7 rounded-lg shadow-sm bg-[#F9F9FB] w-130 mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className={`${inputBaseClasses} mb-4`}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className={`${inputBaseClasses} mb-4`}
      />

      <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
        className={`${inputBaseClasses} mb-4 h-28 resize-none`}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 text-white p-3 rounded-lg font-medium bg-[#0D9488] transition disabled:opacity-50"
      >
        Send Message
        {isLoading && <LoaderLineIcon className="animate-spin" />}
      </button>
    </form>
  );
};

export default RequestDemoForm;
