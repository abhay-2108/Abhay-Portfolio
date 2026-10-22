import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import Hero from "./components/hero/Hero";
import Thesis from "./components/about/Thesis";
import Systems from "./components/systems/Systems";
import Labs from "./components/labs/Labs";
import Ledger from "./components/opensource/Ledger";
import CapabilityMatrix from "./components/capabilities/CapabilityMatrix";
import Contact from "./components/contact/Contact";

const App = () => (
  <div className="app-shell">
    <a className="skip-link" href="#main">
      Skip to content
    </a>

    <ScrollProgress />
    <Header />

    <main id="main">
      <Hero />
      <Thesis />
      <Systems />
      <Labs />
      <Ledger />
      <CapabilityMatrix />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
