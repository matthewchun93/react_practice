import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Locations = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const { name, type, dimension } = info;

  const [results, setResults] = useState([]);
  const api = `https://rickandmortyapi.com/api/location/${id}`;

  console.log(info);

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await fetch(api).then((response) => response.json());
      setInfo(data);

      const stuff = await Promise.all(
        data.residents.map((characterLink) => {
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
          Location :{" "}
          <span className="text-primary">{name === "" ? "unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "unknown" : dimension}
        </h5>
        <h6 className="text-center">Type : {type === "" ? "unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Location</h4>
          <InputGroup name="Location" total={126} setId={setId} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
