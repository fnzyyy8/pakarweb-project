import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function HeroSection() {
  return (
    <div>
      <section
        id="hero"
        className=" flex justify-center items-center h-screen bg-hero-image bg-cover w-full"
      >
        <div className=" flex  max-h-[500px] items-start justify-center flex-col text-start p-6 max-w-[500px] bg-black bg-opacity-60">
          <div className="text-white">
            <h1>Kami Hadir Untuk Anda</h1>
            <p className="mt-3">
              Kami berkomitmen menciptakan website yang sesuai dengan profile
              perusahaan anda. Bagi kami kepuasan client adalah hal penting.
            </p>
          </div>
          <button className="mt-6 bg-white px-3 py-2">
            Selengkapnya <ArrowRightAltIcon />
          </button>
        </div>
      </section>
    </div>
  );
}
