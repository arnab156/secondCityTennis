import React from 'react';
import { Card, Button, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import Image from "./image.jpg";

const WinterDoubles = (props) => {
  return (
    <div >
      <Card>
        <CardBody>
          <CardTitle className="text-style text-center">{props.title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={Image} alt=" cap very nice" />
        <CardLink>1</CardLink>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WinterDoubles;