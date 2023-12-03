import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FooterPage() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="bg-slate-100 h-[320px] px-32 flex items-center">
      <div className="flex justify-between w-full">
        <div className="">
          <img src="/pakar-web.svg" alt="" className="w-32" />
          <div className="max-w-md">
            <p className="mt-6">
              Gedung Perkantoran Premium Podomoro City Lt. 13 No.131 <br />
              Jl. Putri Hijau No.1 Kesawan, OPQ, Kota Medan, Sumatera Utara
              20111
            </p>
            <p className="mt-6">
              Telp (+6261) 7473220 <br />
              Fax (+6261) 7373351 <br />
              e-mail : comercil@pakar-web.com
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end">
          <div className="flex gap-12">
            <div>
              <h2>Tentang</h2>
              <ul className="mt-3">
                <a href="/" className="hover:text-slate-700">
                  <li>Sejarah Perusahaan</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Tujuan dan Nilai Perusahaan</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Profile</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>CSR</li>
                </a>
              </ul>
            </div>
            <div>
              <h2>Layanan</h2>
              <ul className="mt-3">
                <a href="/" className="hover:text-slate-700">
                  <li>Cyber Security</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Dashboard</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Landing Page</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Shopping Page</li>
                </a>
              </ul>
            </div>
            <div>
              <h2>Bantuan & Dukungan</h2>
              <ul className="mt-3">
                <a href="/" className="hover:text-slate-700">
                  <li>Hubungi kami</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Kebijakan cookie</li>
                </a>
                <a href="/" className="hover:text-slate-700">
                  <li>Syarat dan ketentuan</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="flex gap-8 my-6">
            <a
              target="blank"
              href="https://www.facebook.com/"
              className="bg-slate-300 p-4 w-10 h-10 rounded-full flex justify-center items-center shadow-sm hover:text-slate-400 hover:bg-slate-700"
            >
              <FacebookIcon />
            </a>
            <a
              target="blank"
              href="https://www.twitter.com/"
              className="bg-slate-300 p-4 w-10 h-10 rounded-full flex justify-center items-center shadow-sm hover:text-slate-400 hover:bg-slate-700"
            >
              <TwitterIcon />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/"
              className="bg-slate-300 p-4 w-10 h-10 rounded-full flex justify-center items-center shadow-sm hover:text-slate-400 hover:bg-slate-700"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="">
            <p>&copy; {year} - PakarWeb All Right Reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
