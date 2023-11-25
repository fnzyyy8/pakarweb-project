export default function Navbar() {
  return (
    <nav className="w-screen h-16 px-6 flex items-center justify-between shadow-lg fixed">
      <div>
        <img src="/pakar-web.svg" alt="logo-pakarweb" className="w-32" />
      </div>
      <div>
        <ul className="flex items-center">
          <a href="/">
            <li className="mr-6">Home</li>
          </a>
          <a href="/about">
            <li className="mr-6">About</li>
          </a>
          <a href="/services">
            <li className="mr-6">Services</li>
          </a>
          <button className="bg-cyan-300 px-3 py-2 rounded-xl font-bold">
            Daftar
          </button>
        </ul>
      </div>
    </nav>
  );
}
