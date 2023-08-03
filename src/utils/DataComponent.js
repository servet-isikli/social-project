import React from "react";
import { ListGroup } from "react-bootstrap";
import allData from "../data/data";

const DataComponent = ({ dataCategory }) => {
  const data = allData[dataCategory];

  return (
    <div className="mt-3">
      <ListGroup>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
            <hr />
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default DataComponent;
