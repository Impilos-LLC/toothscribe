import FeatureCard from "../../components/FeatureCard";

const featureCardData = [
  {
    title: "Record Session",
    description1:
      "Start a session with one click and ToothScribe records the full conversation in real time.",
    description2:
      "When you're done, the app automatically generates a complete, accurate transcript ready for review or editing anytime.",
    image: "/assests/Feature/feature_image_1.svg",
  },
  {
    title: "Smart Transcripts You Can Edit Anytime",
    subTitle:
      "Each consultation is saved with a detailed, searchable transcript for future reference and updates. You can refine or add to it using two simple options:",
    bulletPoints: [
      "Edit via Text: Type in extra details or corrections they’re instantly added to the transcript.",
      "Edit via Voice: Record voice notes that get appended to the session’s audio and transcript.",
    ],
    image: "/assests/Feature/feature_image_2.svg",
    reverse: true,
  },
  {
    title: "AI Summaries, Your Way",
    subTitle:
      "ToothScribe instantly generates clinical summaries after each session all written in medical language and tailored to your preferred format:",
    bulletPoints: [
      "Point-Based Summary: Clear bullet points that highlight key clinical information.",
      "Brief Summary: A concise paragraph that captures the overall context of the visit.",
      "SOAP Notes: Structured documentation in four parts Subjective, Objective, Assessment, and Plan  ideal for clinical use.",
    ],
    note: "Switch between formats anytime and edit as needed for your workflow.",
    image: "/assests/Feature/feature_image_3.svg",
  },
  {
    title: "Procedural Notes",
    description1:
      "After any procedure, simply provide the key details -ToothScribe will generate a complete, structured summary for your records.",
    description2:
      "Whether it's extractions, implants, or any operative treatment, your surgical notes are created instantly, accurately, and in the right format for clinical use.",
    image: "/assests/Feature/feature_image_4.svg",
    reverse: true,
  },
  {
    title: "Patient & Referral Doctor Letters",
    subTitle:
      "ToothScribe lets you generate visit letters in two formats, ready to edit and share:",
    bulletPoints: [
      "Patient Letter: A simplified summary in everyday language, outlining the visit and treatment plan.",
      "Referral Doctor Letter: A clinical version with detailed findings, including visit overview, radiological insights, and the proposed treatment plan.",
    ],
    image: "/assests/Feature/feature_image_5.svg",
  },
  {
    title: "Everyday Words, Clinical Precision",
    subTitle:
      "ToothScribe’s built-in Medical Dictionary maps patient-friendly words to their clinical equivalents - helping periodontist and oral surgeons bridge the gap between casual and medical terms.",
    bulletPoints: [
      "Customizable Term Mapping: Add and save your own general-to-clinical word pairs.",
      "Smarter AI Output: The dictionary supports the AI engine in generating more accurate transcripts and summaries by understanding both types of language.",
    ],
    image: "/assests/Feature/feature_image_6.svg",
    reverse: true,
  },
];

const FeatureCards = () => {
  return (
    <>
      {featureCardData.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </>
  );
};

export default FeatureCards;
