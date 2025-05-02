import './App.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">WIP</h1>
            <p className="py-6">
              Rien à voir ici...
            </p>
            <button className="btn btn-primary">Quitter le site</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
