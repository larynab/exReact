import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard"

export default function NasaList() {
  const [nasapics, setNasapics] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setNasapics(res.data.url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* {nasapics.map(pics => {
        return <NasaCard imgUrl={pics} />;
      })} */}
      <NasaCard imgUrl={nasapics} />
    </div>
  );
}
