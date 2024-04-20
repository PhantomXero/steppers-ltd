import "./index.css";

// components imports
import Hero from "./components/hero";
import CardHolder from "./components/cardHolder";
import Quote from "./components/quote";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Hero />
      <CardHolder />
      <Quote />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
