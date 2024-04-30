import './App.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Passions from "./components/passions/Passions";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Header />

      <Main />
      <Passions />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
