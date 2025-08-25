import React from "react";

const Services = () => {
  const serviceData = [
    {
      id: 0,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/doctor.png",
      title: "New Practice Setup",
      message:
        "Complete solution for starting a new practice so you can be successful right from the start.",
    },
    {
      id: 1,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/menu.png",
      title: "Medical Billing Services",
      message:
        "Reduce denials, increase collections & fix revenue leaks with the most affordable billing services.",
    },
    {
      id: 2,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/healthcare.png",
      title: "Account Receivable Collection",
      message:
        "Improve collections for your practice by recovering old A.R and getting paid faster.",
    },
    {
      id: 3,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/first-aid-kit.png",
      title: "Front Office Management",
      message:
        "Includes patient scheduling, data entry, insurance verification & patient support.",
    },
    {
      id: 4,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/family-insurance.png",
      title: "Value Added Services",
      message:
        "Our experts ensure your place of service has all the support it needs.",
    },
    {
      id: 5,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/hospital.png",
      title: "Healthcare Digital Marketing",
      message:
        "Partner with healthcare digital marketing experts to win more patients.",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-10 lg:px-36 mt-28 ">
      <div className="text-center text-[#00223A] text-3xl md:text-4xl font-bold mb-10">
        <h2>
          OUR <span className="text-[#239ADF]">SERVICES</span>
        </h2>
      </div>

      <div className="grid md:gap-y-6 gap-y-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#239ADF] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
