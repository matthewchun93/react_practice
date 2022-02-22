import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;

  const [results, setResults] = useState([]);
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  console.log(info);

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await fetch(api).then((response) => response.json());
      setInfo(data);

      const stuff = await Promise.all(
        data.characters.map((characterLink) => {
          return fetch(characterLink).then((response) => response.json());
        })
      );
      setResults(stuff);
    };
    fetchEpisode();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" total={51} setId={setId} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
