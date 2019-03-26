import React from "react";
import "./Programs.css";
import { Container, Row, Col } from "reactstrap";
import SummerSingles from "../../Components/SummerSingles/SS";
// import SummerDoubles from "../../Components/SummerDoubles/SD";
import StartRestart from "../../Components/StartRestart/SR";
import WinterDoubles from "../../Components/WinterDoubles/WD";
import TennisClassic from "../../Components/TennisClassic/TC";

export default class Programs extends React.Component {


  render() {
    return (
        <Container className="font">
          <br/>
          <Container fluid className="tennisContainer">
          <br/>
          <Row>
            <Col xs="6"><SummerSingles title="Summer Singles"/></Col>
            <Col xs="6"><TennisClassic title="Second City Tennis Classic" buttonLabel="Read More"/></Col>
          </Row>
          <hr />
          <Row>
            <Col xs="6"><StartRestart title="Start Restart" buttonLabel="Read More"/></Col>
            <Col xs="6"><WinterDoubles title="Winter Doubles" buttonLabel="Read More"/></Col>
          </Row>
          <br />  

          <br/>
          </Container>  
          <br/>
          <br/>
          <br/>
        </Container>
    );
  }
}
