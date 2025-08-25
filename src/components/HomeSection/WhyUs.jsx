import React from "react";

const WhyUs = () => {
  const data = [
    {
      id: 0,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/SS-Icons-01.png",
      title: "Speciality-Specific Billing Team",
      message:
        "With an experience of a decade serving various specialties, we have built our people, processes, and technological skills to deliver high-quality service.",
    },
    {
      id: 1,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/expenses-2.png",
      title: "96% Clean Submission Of Claims",
      message:
        "We ensure that your claims are accurately submitted in a timely manner, reducing the number of rejected or denied claims due to inefficiencies in the billing cycle.",
    },
    {
      id: 2,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/SS-Icons-01.png",
      title: "Reduction in Operating Cost",
      message:
        "With our specialized billing services, you can save up to 50% of operating costs compared to your in-house billing department.",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-8  lg:px-36 mt-28">
      <div className="text-center text-[#00223A] text-3xl md:text-4xl font-bold mb-8">
        <h2>
          WHY <span className="text-[#239ADF]">US?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-3 items-stretch">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl xl:p-10 p-6 flex-1 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-28 h-28 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl lg:text-2xl font-semibold text-[#239ADF] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
