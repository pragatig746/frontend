import React, { useState } from "react";
// import { youtube } from "./apis";
import Navbar from "./Navbar";
const Home = () => {
  const [Tech, setTech] = useState("");
  const handleChange = (e) => {
    setTech(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(Tech);
  };
  const youtubeCall = async () => {
    const YOUTUBE_API_KEY = "AIzaSyA78Bfr50t93zRCpnypkxEUulcpGFdgIA0"
    console.log("Ready to get Youtube data!");
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=JavaScript`;
  
    const response = await fetch(url);
    const data = await response.json();
    const items = data.items
    for(let i=0;i<items.length;i++)
    {
      let url1 = `https://www.youtube.com/watch?v=${items[i].id.videoId}`;
      console.log(url1)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="d-flex container">
        <button onClick={youtubeCall}>Call Youtube API</button>
        {/* <div className="recommend p-5 flex-grow-1">
          <h1>Recommendations For You!!</h1>
          <div className="r-card mt-5 card" style={{ width: "35rem", height:"25rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="links p-5">
          <h1>Explore your Interests!!</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
