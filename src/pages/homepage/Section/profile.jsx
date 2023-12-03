import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import StarIcon from "@mui/icons-material/Star";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import clientsDb from "../../../api/clients.json";
import { useState, useEffect } from "react";

export default function ProfileSection() {
  const [clientList, setClients] = useState([]);

  useEffect(() => {
    const getClientList = async () => {
      try {
        const data = await clientsDb;
        setClients(data);
      } catch (err) {
        console.error(err);
      }
    };
    getClientList();
  }, []);

  return (
    <section className="mt-6">
      <h1>ABOUT</h1>
      <div className="mt-6 mb-16">
        <div className="grid grid-cols-2 gap-6 items-center mt-12 mb-24">
          <div>
            <img src="./pakar-web.svg" alt="" />
          </div>
          <div className="leading-loose">
            <h2>Tentang Pakar Web</h2>
            <p className="mt-4">
              Kami adalah perusahaan penyedia kebutuhan teknologi anda, memiliki
              team yang siap membantu anda dalam membangun bisnis anda. Tidak
              perlu khawatir bagaimana teknologi anda berjalan, seperti apa
              keamanannya dan, kebingungan ketika terjadi masalah. Dengan biaya
              service yang terjangkau kami dapat membantu anda.
            </p>
            <p className="mt-4">
              Sejak perusahaan kami berdiri, sudah banyak client yang merasa
              terbantu, tentunya dengan kerja keras dan juga kemauan kami dalam
              berkembang. Karena bagi kami anda adalah prioritas.
            </p>
            <button className="mt-4 pr-7 pl-2 py-4">
              Selengkapnya <ArrowRightAltIcon />
            </button>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-4 my-12">
          <div className="px-6 py-10 bg-slate-50 mr-2 flex justify-between shadow-md">
            <div className="pr-6 flex items-center">
              <HeadsetMicIcon fontSize="large" />
            </div>
            <div>
              <h2>Layanan 24 Jam</h2>
              <p className="mt-4">
                Kami berkomitmen dalam melayani anda dengan menyediakan call
                center 24 jam untuk membantu bisnis anda.
              </p>
            </div>
          </div>
          <div className="px-6 py-10 bg-slate-50 mr-2 flex justify-between shadow-md">
            <div className="pr-6 flex items-center">
              <StarIcon fontSize="large" />
            </div>
            <div>
              <h2>Pengaduan Mudah</h2>
              <p className="mt-4">
                Anda tidak akan kesulitan dalam melakukan pengaduan, karena
                sangat mudah dan akan dilayani dengan baik oleh team kami.
              </p>
            </div>
          </div>
          <div className="px-6 py-10 bg-slate-50 mr-2 flex justify-between shadow-md">
            <div className="pr-6 flex items-center">
              <ElectricBoltIcon fontSize="large" />
            </div>
            <div>
              <h2>Pengerjaan cepat</h2>
              <p className="mt-4">
                Tidak perlu waktu lama dalam melakukan perbaikan kepada website
                anda, karena kami menjamin pengerjaan langsung akan di handle
                setelah melakukan pengaduan
              </p>
            </div>
          </div>
          <div className="px-6 py-10 bg-slate-50 mr-2 flex justify-between shadow-md">
            <div className="pr-6 flex items-center">
              <AttachMoneyIcon fontSize="large" />
            </div>
            <div>
              <h2>Paket yang terjangkau</h2>
              <p className="mt-4">
                Kami dapat menyesuaikan kebutuhan anda, tidak perlu membayar hal
                yang tidak anda butuhkan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-24 mb-24">
        <h2>Our Clients</h2>
        <div className="flex gap-9 mt-6">
          {clientList.map((client) => (
            <div
              key={client.id}
              className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md"
            >
              <img
                className="w-12 h-auto"
                src={client.picture}
                alt={client.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
