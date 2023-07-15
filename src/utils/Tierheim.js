import React from "react";
import tierheimData from "../data/tierheimData";
import Alert from "react-bootstrap/Alert";

const Tierheim = () => {
  const mappedData = tierheimData.map((item) => (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.name}
      </a>
      <hr />
    </div>
  ));
  return (
    <div>
      <Alert variant="success" className="text-left mt-2">
        {/* <Alert.Heading></Alert.Heading> */}
        {mappedData}
      </Alert>
    </div>
  );
};

export default Tierheim;
