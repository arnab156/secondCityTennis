import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import "./tennisCourts.css";
import Map from "../../Components/GoogleMap/Map";

const Courts = (props) => {
  return (
    <div className="container">
    <br/>
    <Container className="tennisContainer1">
      <br/>      
      <Jumbotron>
        <Map />
      </Jumbotron>
      <br/>
    </Container>

    <Container className="tennisContainer1">
      <br/>      
      <Jumbotron>
        <h1>University Courts</h1>
        
      </Jumbotron>
      <br/>
    </Container>
      
    </div>
  );
};

export default Courts;