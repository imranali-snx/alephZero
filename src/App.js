import "./App.css";
import logo from "./images/logo.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainLogo from "./images/logo.svg";

import { BsFillPersonPlusFill } from "react-icons/bs";
import Topheader from "./Components/Topheader";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Slider from "./Components/Slider";
import Feature from "./Components/Feature";
import Cardimg from "./Components/Cardimg";
import Cardfirst from "./Components/Cardfirst";
import Cardtwo from "./Components/Cardtwo";
import Cardthird from "./Components/Cardthird";
import Movesec from "./Components/Movesec";
import Blocks from "./Components/Blocks";
import Rightslider from "./Components/Rightslider";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Slider />
      <Feature />
      <Cardfirst />
      <Cardthird />
      <Rightslider />s
      <Cardtwo />
      <Movesec />
      <Blocks />
      <Footer />
    </>
  );
}

export default App;
