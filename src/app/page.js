import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Trending from "@/components/Trending";
import Gallery from "@/components/Gallery";
const Home = () => {
  return (
    <div>
      <Navbar /> 
      <Header />
      <Trending />
      <Gallery /> 
      <Footer />
    </div>
  )
}


export default Home;