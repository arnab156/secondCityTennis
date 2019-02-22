import React from "react";
import "./Programs.css";
import { Container, Row, Col } from "reactstrap";
import SummerSingles from "../../Components/SummerSingles/SS";
import SummerDoubles from "../../Components/SummerDoubles/SD";
import WinterSingles from "../../Components/WinterSingles/WS";
import WinterDoubles from "../../Components/WinterDoubles/WD";

export default class Programs extends React.Component {


  render() {
    return (
        <Container className="font">
          <br/>
          <Container fluid className="tennisContainer">
          <br/>
          <Row>
            <Col xs="6"><SummerSingles title="Summer Singles"/></Col>
            <Col xs="6"><SummerDoubles title="Summer Doubles"/></Col>
          </Row>
          <hr />
          <Row>
            <Col xs="6"><WinterSingles title="Winter Singles"/></Col>
            <Col xs="6"><WinterDoubles title="Winter Doubles"/></Col>
          </Row>
          <br />  
          </Container>  
        </Container>
    );
  }
}
