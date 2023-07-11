import Benefits from "./(components)/Benefits";
import Navbar from "./(components)/Navbar";
import Newsletter from "./(components)/Newsletter";
import Slider from "./(components)/Slider";
import Something from "./(components)/Something";
import CookSection from "./(components)/CookSection";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Slider/>
        <Something/>
        <Benefits/>
        <Newsletter/>
        <CookSection/>
      </main>
      <Footer/>
    </>
    
  )
}
