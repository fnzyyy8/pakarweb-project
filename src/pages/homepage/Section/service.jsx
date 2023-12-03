import { useEffect, useState } from "react";
import servicesDb from "../../../api/services.json";

export default function ServiceSection() {
  const [servicelist, setservicesList] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await servicesDb;
        setservicesList(data);
      } catch (err) {
        console.error(err);
      }
    };
    getServices();
  }, []);

  return (
    <section className="mt-6">
      <h1>SERVICES</h1>
      <div className="flex justify-between my-6">
        {servicelist.map((service, id) => (
          <div
            key={id}
            className="relative bg-slate-500 justify-center items-center overflow-hidden cursor-pointer group"
          >
            <div className="w-[360px] h-[480px]">
              <img
                className="object-cover w-full-h-full grayscale group-hover:grayscale-0 transition-all delay-100"
                alt={service.title}
                src={service.image}
                style={{ aspectRatio: "9/16" }}
              />
            </div>

            <div className="absolute bottom-0 h-48 p-3 text-white bg-black bg-opacity-40 translate-y-[70%] group-hover:translate-y-0 transition-all delay-100">
              <h2>{service.title}</h2>
              <p className="mt-3">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
