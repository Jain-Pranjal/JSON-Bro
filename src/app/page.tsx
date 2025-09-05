"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function CoverPage() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ {
          particles: {
            color: { value: "#00ff00" },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.5 },
            shape: { type:"circle" },
            size: { value: { min: 1, max: 3 } },
          },
          background: {
            color: "#000000"
          }
        }
      }
        className="absolute inset-0"
      />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
