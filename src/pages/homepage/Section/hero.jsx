import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function HeroSection() {
  return (
    <div>
      <section
        id="hero"
        className=" flex justify-center items-center h-screen bg-hero-image bg-cover w-full"
      >
        <div className=" flex  h-[380px] items-start justify-center flex-col text-start p-6 max-w-[680px] bg-black bg-opacity-60">
          <div className="text-white">
            <h1>Kami Hadir Untuk Anda</h1>
            <p className="mt-2 leading-loose">
              Kami berkomitmen menciptakan website yang sesuai dengan profile
              perusahaan anda. Bagi kami kepuasan client adalah hal penting.
            </p>
          </div>
          <button className="mt-6 px-3 py-2">
            Selengkapnya <ArrowRightAltIcon />
          </button>
        </div>
      </section>
    </div>
  );
}
