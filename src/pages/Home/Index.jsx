import "./Style.css"; 
import netflixlogo1 from "../../assets/card/netflixlogo1.png";
import { Link } from "react-router-dom";

const Index = () => {
    return (
      <div>
        <div className="navbar">
          <img src={netflixlogo1} alt="Netflix Logo" />
        </div>
        <div className="container">
          <div className="overlay"></div>
          <div className="content">
            <h1>
              Unlimited movies, <br /> TV shows, and Lots more
            </h1>
            <p className="sub-text">Starts at ₦2,000. Cancel anytime.</p>
            <p className="description">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <Link to="/login" className="form">
              <button>Get Started →</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Index;
