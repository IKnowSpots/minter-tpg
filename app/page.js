import Clients from "./components/Clients";
import Community from "./components/Community";
import Features from "./components/Features";
import FooterNew from "./components/FooterNew";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tweets from "./components/Tweets";
import UseCases from "./components/UseCases";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="gradient-05 z-0" />
      <Hero />
      <div className="gradient-06 z-0" />
      <Clients />
      <Features />
      <Tweets />
      <UseCases />
      <Community />
      <FooterNew />
    </div>
  );
}
