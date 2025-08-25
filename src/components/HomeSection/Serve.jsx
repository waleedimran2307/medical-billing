import React from "react";

const Serve = () => {
  const ServeData = [
    {
      id: 0,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/HospitalsIcons2-1.png",
      title: "Health Care System",
    },
    {
      id: 1,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/HospitalsIcons5-1.png",
      title: "Hospitals",
    },
    {
      id: 2,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/HospitalsIcons1-1.png",
      title: "Emergency Rooms",
    },
    {
      id: 3,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/Urgent-Care-Billing-Services-1.png",
      title: "Urgent Cares",
    },
    {
      id: 4,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/HospitalsIcons4a-2.png",
      title: "Private Practices",
    },
    {
      id: 5,
      img: "https://stallionsystem.com/wp-content/uploads/2023/08/HospitalsIcons6-3.png",
      title: "All Specialties",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-10 lg:px-36 mt-28">
      <div className="text-center text-[#00223A] text-3xl md:text-4xl font-bold">
        <h2>
          WHO WE <span className="text-[#239ADF]">Serve?</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto mt-4 text-center text-gray-700">
        <p>
          Right Medical Billing is a recognized medical billing company serving
          different organizations ranging from large healthcare centers to small
          practices.
        </p>
      </div>

      <div className="grid md:gap-y-6 gap-y-5 gap-x-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {ServeData.map((item) => (
          <div
            key={item.id}
            className="bg-[#DBD3E3] rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-44 h-44 object-contain mx-auto"
            />
            <p className="text-[#441B67] text-xl md:text-2xl font-semibold mt-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serve;
