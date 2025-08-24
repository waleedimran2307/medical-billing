import React from "react";

const KeyFeatures = () => {
  const KeyFeaturesData = [
    {
      id: 0,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/eligibility-check-new.svg",
      title: "Eligibility Check",
      description:
        "We confirm every patients’ insurance eligibility to streamline your process, shorten account receivable days, and avoid denials.",
    },
    {
      id: 1,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/charge-entry-2.svg",
      title: "Charge Entry",
      description:
        "Get timely reimbursement as our detailed and error-free charge entry process ensures first-time approved claim submission. Our first time pass rate is over 98%.",
    },
    {
      id: 2,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/claim-scrubbing-new-3.svg",
      title: "Claim Scrubbing",
      description:
        "Our top-of-the-line claim scrubbing ensures error-free and clean claims are submitted for faster reimbursement and minimum denials/rejections.",
    },
    {
      id: 3,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/cloud.svg",
      title: "Electronic Submission",
      description:
        "Corrections and re-submissions are completed systematically and in a timely manner for any claims that are held to identify and resolve the issue as soon as possible.",
    },
    {
      id: 4,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/Statement.svg",
      title: "Payment Posting",
      description:
        "Post ERAs and EOBs in a timely manner as our team of experts verifies each claim for appropriate payment while our A/R team follows up on any denied or rejected claim.",
    },
    {
      id: 5,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/customer-service.svg",
      title: "Patient Helpdesk",
      description:
        "Streamline and enhance all patient interactions from scheduling and billing to post-encounter communication with our reliable patient helpdesk.",
    },
    {
      id: 6,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/shield-1.svg",
      title: "Encryption and Security",
      description:
        "Our medical billing software is compliant with HIPAA regulations. We ensure no leakage of patients’ data while processing any information.",
    },
    {
      id: 7,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/analysis.svg",
      title: "Customized Reports",
      description:
        "Get comprehensive insights into your payment, charges or adjustments trends for every billing entry. BellMedex provides data reports in easy-to-read format.",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-10 lg:px-36 mt-28 mb-5">
      <div className="text-center text-[#00223A] text-3xl md:text-5xl font-bold">
        <h2>
          Key <span className="text-[#239ADF]">Features</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-6 text-center text-gray-700 text-base md:text-lg">
        <p>
          Get maximum reimbursement at minimum cost as our end-to-end medical
          billing services don’t just monitor your account and do easy claim
          submission but actively manage it from top to bottom to improve
          financial performance of your practice.
        </p>
      </div>

      <div className="grid md:gap-y-9 gap-y-5 gap-x-4 md:grid-cols-2  mt-14">
        {KeyFeaturesData.map((item) => (
          <div
            key={item.id}
            className="w-auto h-full bg-white shadow-3xl hover:shadow-2xl transition duration-300  flex md:flex-row flex-col md:gap-2 gap-y-5  items-center justify-start px-10 py-16 "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <div className="flex flex-col  text-center md:!text-left">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00223A]">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
