import React, { useState, useEffect } from "react";
import axios from "axios";
import DoggoCard from "./DoggoCard"
import { Container, Divider } from 'semantic-ui-react'

export default function DoggoList() {
  const [doggos, setDoggos] = useState([]);
  const [breed, setBreed] = useState("pug");
  const [doggosstatus, setDoggosStatus] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/25`)
      .then(res => {
        console.log(res);
        setDoggos(res.data.message);
        setDoggosStatus(res.data.status);
      })
      .catch(err => {
        console.log(err);
      });
  }, [breed]);

  return (
    <div>
      {/* <DoggoCard imgUrl={doggo} /> */}
      <p>A dog component</p>
      <select onChange={e => setBreed(e.target.value)}>
        <option>husky</option>
        <option>hound</option>
        <option>pug</option>
      </select>
      {/* <Container textAlign='center'>Center Aligned</Container> */}
      {doggos.map((doggo, number) => {
        return<DoggoCard imgUrl={doggo} dogNumber={number} dogStatus={doggosstatus} />;
      })}

      {/* <DoggoCard imgUrl={breed}/> */}
    </div>
  );
}
