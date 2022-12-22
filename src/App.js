import "./App.css";
import logo from "./images/logo.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainLogo from "./images/logo.svg";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Topheader from "./Components/Topheader";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import Sliders from "./Components/Sliders";
import Feature from "./Components/Feature";
import Cardimg from "./Components/Cardimg";
import Cardfirst from "./Components/Cardfirst";
import Cardtwo from "./Components/Cardtwo";
import Cardthird from "./Components/Cardthird";
import Movesec from "./Components/Movesec";
import Blocks from "./Components/Blocks";
import Rightslider from "./Components/Rightslider";
import Footer from "./Components/Footer";
import LeftSlider from "./Components/LeftSlider";
import Scelton from "./Components/Scelton";


function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Sliders />
      <Feature />
      <Cardfirst />
      <Cardthird />
      <Rightslider />
      {/* <LeftSlider/> */}
      <Scelton />
      <Cardtwo />
      <Movesec />
      <Blocks />
      <Footer />
    </>
  );
}

export default App;
