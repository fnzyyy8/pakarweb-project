export default function HomePage() {
  return (
    <main className="pt-20 px-6">
      <section id="hero" className="grid grid-cols-2 py-6">
        <div className="flex justify-center">
          <img src="/technology.jpg" alt="" className=" rounded-xl" />
        </div>
        <div className="flex items-center justify-center flex-col text-center ">
          <div className="max-w-md bg-slate-300 p-12 rounded-lg shadow-lg">
            <h1>Mewujudkan Website Terbaik</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio
              nesciunt, placeat nam rerum sed?
            </p>
            <button className="mt-6 bg-cyan-300 px-3 py-2 rounded-xl">
              Lebih lanjut
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
