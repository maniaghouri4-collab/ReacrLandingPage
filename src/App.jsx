import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="features">
        <h2>Why Choose GlowBotanics?</h2>
        <p className="subtitle">Every product is crafted with pure, clinically tested natural ingredients</p>
        
        <div className="cards-container">
          <Features 
          
            title="100% Organic" 
            description="Free from harsh chemicals, made only with pure extracts of flowers and herbs."
          />
          <Features 
          
            title="Dermatologist Tested" 
            description="Free from harsh chemicals, made only with pure extracts of flowers and herbs." 
          />
          <Features 
        
            title="Eco-Friendly" 
            description="Our sustainable packaging is environmentally friendly and 100% recyclable."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;