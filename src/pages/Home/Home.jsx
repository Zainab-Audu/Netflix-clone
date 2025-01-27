import './Home.css'
import Navbar from '../../componenets/Navbar/Navbar'
import Hero_banner from "../../assets/Hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"; 
import play_icon from "../../assets/play_icon.png"; 
import info_icon from "../../assets/info_icon.png"; 
import Titlecards from "../../componenets/Titlecards/Titlecards"
import Footer from '../../componenets/Footer/Footer';



const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            An action-packed drama about a young man discovering his destiny as
            the protector of an ancient relic, battling dark forces to save his
            city and loved ones.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster movies"} />
        <Titlecards title={"Only on Netflix"} />
        <Titlecards title={"Upcoming"} />
        <Titlecards title={"Topics for You"} />
        <Titlecards title={"Comedy"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
