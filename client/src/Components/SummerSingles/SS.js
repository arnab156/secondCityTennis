import React from 'react';
import { Card, Button, CardText, CardBody, CardTitle } from 'reactstrap';
import IMAGE from "./tennis.jpg"; 
import { Link } from "react-router-dom"; 
import "./SS.css";

const Example = (props) => {
  return (
    <div >
      <Card>
        <CardBody>
          <CardTitle className="text-style text-center">{props.title}</CardTitle>
        </CardBody>
        <img width="100%" src={IMAGE} alt=" cap very nice" title="cap very nice" />
        <CardBody>
          <CardText>Questions? <br/> 
          Email <a href="mailto:summersingles@secondcitytennis.com?subject=Mail from our website"> Zdravko Coric & Eric Juarez</a>
           </CardText>
          <Button color="warning"><Link to="/summersingles" className="text-style-2">Read More</Link></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;