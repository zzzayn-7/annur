import Hero from "./components/Hero";
import About from "./components/About";
import Sectors from "./components/Sectors";
import Solutions from "./components/Solutions";
import HowWeWork from "./components/HowWeWork";
import Perspectives from "./components/Perspectives";
import OpenPositions from "./components/OpenPositions";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Sectors />
      <Solutions />
      <HowWeWork />
      <Perspectives />
      <OpenPositions />
      <CallToAction />
    </main>
  );
}
