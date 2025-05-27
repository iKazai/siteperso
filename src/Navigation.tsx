import './Navigation.css';

export default function Navigation() {
  return (
    <div className="Navigation bg-base-200 min-h-screen flex flex-row justify-between p-6">        <h2 className="text-5xl font-bold">        <span className="relative inline-block group">
          <span className="group-hover:opacity-0 transition-opacity duration-300">
            Delma
          </span>
          <span className="absolute top-0 left-0 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Stadelmann
          </span>
        </span>
      </h2>

      <a className="btn btn-ghost text-2xl relative group overflow-hidden transition-all duration-300 hover:bg-transparent" href="/">
        <span className="relative z-10 group-hover:text-[#b5dcff] transition-colors duration-300">Menu</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b5dcff] group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </a>

    </div>
  );
}