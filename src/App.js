import Advantage from "./components/Advantage";
import Cards from "./components/Cards";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Products from "./components/Products";
import Industries from "./components/Industries";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Overview/>
    <Advantage/>
    <Cards/>
    <Products/>
    <HowItWorks/>
    <Industries/>
    </>
  );
}

export default App;
