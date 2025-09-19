import React from "react";

interface FeatureCardProps {
  title?: string;
  subTitle?: string;
  description1?: string;
  description2?: string;
  bulletPoints?: string[];
  image?: string;
  reverse?: boolean;
  note?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subTitle,
  description1,
  description2,
  bulletPoints,
  image,
  note,
  reverse = false,
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden mb-15 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {image && (
        <div className="basis-2/5 flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 py-6 px-8">
          <img
            src={image}
            alt={title || "Feature image"}
            className="w-full max-w-sm"
          />
        </div>
      )}

      {(title || subTitle || description1 || description2 || bulletPoints) && (
        <div
          className={`basis-3/5 py-6 flex flex-col justify-center ${
            reverse ? "pl-16" : "pl-12"
          }`}
        >
          <div className="max-w-xl text-left">
            {title && (
              <h2 className="text-[40px] font-semibold leading-[120%] tracking-[-1.5px] text-black font-montserrat mb-3">
                {title}
              </h2>
            )}
            {subTitle && (
              <p className="text-[16px] font-normal leading-[170%] font-plusJakarta text-gray-600 mb-3">
                {subTitle}
              </p>
            )}
            {description1 && (
              <p className="text-[16px] font-normal leading-[170%] font-plusJakarta text-gray-600 mb-3">
                {description1}
              </p>
            )}
            {description2 && (
              <p className="text-[16px] font-normal leading-[170%] font-plusJakarta text-gray-600 mb-3">
                {description2}
              </p>
            )}

            {bulletPoints && bulletPoints.length > 0 && (
              <div className="space-y-3 mt-2">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-[16px] font-normal leading-[170%] font-plusJakarta text-gray-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {note && (
              <p
                className="text-[16px] font-normal leading-[170%] font-plusJakarta mt-5"
                style={{ color: "#115E59" }}
              >
                {note}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
