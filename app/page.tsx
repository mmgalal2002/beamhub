import AD from "./components/AD";
import Discuss from "./components/Discuss";
import Community from "./components/Community";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AD />
      <Discuss />
      <Community />
      <AD />
      <Mission />
      <Contact />
    </div>
  );
}
