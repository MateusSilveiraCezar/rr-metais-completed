import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PriceTable from "../components/PriceTable";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <PriceTable />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;