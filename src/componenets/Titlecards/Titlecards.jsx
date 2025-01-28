import { useEffect, useRef, useState } from "react";

import "./Titlecards.css"

const Titlecards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDcyYzU5ZjI2ZThhODUxMjkyZWJjYTgwMjY2ZmE5NiIsIm5iZiI6MTczNzk5MzQwMC40MTkwMDAxLCJzdWIiOiI2Nzk3YWNiODI1ZDI5ODBmYjAyNDIyZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.shL3W-RlDivDzXx5qPDvpZvE7dk2XRakRsoQYMmgkOo",
    },
  };

  
  const handlewheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handlewheel);
  }, []);
  
  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
