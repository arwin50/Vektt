import "./App.css";
import HeroPage from "../sections/HeroPage";
import Services from "../sections/Services";
import TeamPage from "../sections/TeamPage";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";

function App() {
  return (
    <main>
      <HeroPage />
      <Services />
      <TeamPage />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
