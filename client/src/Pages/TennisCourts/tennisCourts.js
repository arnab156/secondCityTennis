import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import "./tennisCourts.css";
import Map from "../../Components/GoogleMap/Map";

const Courts = (props) => {
  return (
    <div className="container">
    <br/>
    <Container>
      <br/>
      <Jumbotron>
            Indoor Facilities:
            Lakeshore Sport & Fitness
            1320 W. Fullerton Ave. (2400N)
            773-477-9888

            Midtown Tennis Club 
            2020 W. Fullerton Ave. (2400N)
            773-235-2300

            East Bank Club 
            500 N. Kingsbury St. (400W)
            312-527-5800

            McFetridge Sports Center 
            (Chicago Park District facility)
            3843 North California Ave. (2800W)
            773-478-2609

            Tam Tennis Club 
            7686 N. Caldwell Ave., Niles, IL
      847-967-1400
      </Jumbotron>
      
      <Jumbotron>
        <Map />
      </Jumbotron>
    </Container>
      
    </div>
  );
};

export default Courts;