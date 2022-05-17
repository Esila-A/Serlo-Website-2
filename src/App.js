import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
