import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import StarIcon from "@mui/icons-material/Star";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { dbClients } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
export default function ProfileSection() {
  const [clientList, setClientList] = useState([]);

  const clientsCollectionRef = collection(dbClients, "clients");

  useEffect(() => {
    const getClientsList = async () => {
      try {
        const data = await getDocs(clientsCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setClientList(filterData);
      } catch (err) {
        console.error(err);
      }
    };
    getClientsList();
  }, [clientsCollectionRef]);

  return (
    <section className="mt-6">
      <h1>ABOUT</h1>
      <div className="my-6">
        <div className="grid grid-cols-2 gap-4 items-center my-16">
          <div>
            <img src="./pakar-web.svg" alt="" />
          </div>
          <div>
            <h2>Hello</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              repellat accusantium asperiores ipsum blanditiis inventore eos
              illo minima amet eum officiis, nulla assumenda dicta ducimus
              exercitationem vero tenetur? Fugit dolore deleniti laboriosam
              repudiandae reprehenderit quam molestias, corrupti enim magnam
              assumenda in quidem saepe alias, dignissimos excepturi atque ab
              praesentium quae!
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              iure facilis repudiandae dolores nisi sequi, quia velit!
              Recusandae, exercitationem in?
            </p>
            <button className="mt-4 pr-7 pl-2 py-4">
              Selengkapnya <ArrowRightAltIcon />
            </button>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-4">
          <div className="p-6 bg-slate-400 mr-2 flex justify-between">
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
          <div className="p-6 bg-slate-400 mr-2 flex justify-between">
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
          <div className="p-6 bg-slate-400 mr-2 flex justify-between">
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
          <div className="p-6 bg-slate-400 mr-2 flex justify-between">
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
      <div className="flex items-center justify-center flex-col mt-12">
        <h2>Our Clients</h2>
        <div className="flex gap-9 mt-6">
          {clientList.map((client) => (
            <div
              key={client.id}
              className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md"
            >
              <img
                className="w-12 h-auto"
                src={client.photo}
                alt={client.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
