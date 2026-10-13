import Hero from "./components/Hero";
import About from "./components/About";
import SectorsScroller from "./components/SectorsScroller";
import Solutions from "./components/Solutions";
import HowWeWork from "./components/HowWeWork";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <SectorsScroller />
      <Solutions />
      <HowWeWork />
      <CallToAction />
    </main>
  );
}
