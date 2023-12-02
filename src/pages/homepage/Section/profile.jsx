import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import StarIcon from "@mui/icons-material/Star";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
export default function ProfileSection() {
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
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png"
              alt="pln"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pertamina_Logo.svg/1280px-Pertamina_Logo.svg.png"
              alt="pertamina"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://www.telkom.co.id/minio/show/data/image_upload/page/1594108255409_compress_logo%20telkom%20indonesia.png"
              alt="telkom"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Lambang_Polri.png"
              alt="polri"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/512px-Chevron_Logo.svg.png"
              alt="chevron"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/min/6/66/PSMS.png"
              alt="psms"
            />
          </div>
          <div className=" bg-slate-50 w-24 h-24 rounded-full p-2 flex items-center justify-center shadow-md">
            <img
              className="w-12 h-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Universal_Music_Group_logo.svg/2560px-Universal_Music_Group_logo.svg.png"
              alt="universal music"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
