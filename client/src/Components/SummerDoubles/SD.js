import React from 'react';
import { Card, Button, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom"; 
import IMAGE from "./image.jpg";  

const SummerDoubles = (props) => {
  return (
    <div >
      <Card>
        <CardBody>
          <CardTitle className="text-style text-center">{props.title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={IMAGE} alt=" cap very nice" title="cap very nice" />
        {/* <CardLink>1</CardLink> */}
        <CardBody>
        <CardText>Questions? <br/> 
          Email <a href="mailto:summerdoubles@secondcitytennis.com?subject=Mail from our website">Rob Smitherman & Mac McLin</a>
           </CardText>
           <Button color="warning"><Link to="/summerdoubles" className="text-style-2">Read More</Link></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SummerDoubles;