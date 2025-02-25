import "./Navbar.css";
import netflixlogo1 from "../../assets/card/netflixlogo1.png";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={netflixlogo1} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="icon"
          width={24}
          height={24}
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>

        <p>Children</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="icon"
          width={24}
          height={24}
        >
          <path
            fillRule="evenodd"
            d="M12 5a4 4 0 0 0-8 0v2.379a1.5 1.5 0 0 1-.44 1.06L2.294 9.707a1 1 0 0 0-.293.707V11a1 1 0 0 0 1 1h2a3 3 0 1 0 6 0h2a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L12.44 8.44A1.5 1.5 0 0 1 12 7.38V5Zm-5.5 7a1.5 1.5 0 0 0 3 0h-3Z"
            clipRule="evenodd"
          />
        </svg>

        <div className="navbar-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="profile"
            width={24}
            height={24}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="profile"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <Link hrefLang="/" className="dropdown">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
