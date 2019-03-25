import React from 'react';
import "./TC.css";
import { Link } from 'react-router-dom';
import { Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class SummerDoublesInfo extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }
  
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    render() {
  return (
    <div className="container">
        <br/>
        <div className="transBack rounded">
        <br/>
        <Jumbotron className="text-center color-blue">
       
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              REGISTRATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Session Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}
                <br/>
                <p className="text-left">
                Second City Tennis is proud to host the SCT Classic as part of the global GLTA tour. The tournament is typically held indoors during Market Days weekend in mid-August and attracts nearly 100 players from all around the USA and other countries. 
               <br/>  <br/>
               The Classic is a 3-day tournament with 4-5 divisions for singles and doubles with a standard 32 or 16 player draws. 
               <br/><br/>
               Registration is through GLTA.
                </p>
              </Col>
            </Row>
            <br/>
              {/* <Row> */}
              {/* <Col sm="6">
                <Card body>
                  <CardTitle>CREATE AAC ACCOUNT</CardTitle>
                  <CardText>1) You must first create an AAC online account on the AAC website at   If you already have an AAC account, simply login using your current credentials. Current AAC members in good standing (annual membership paid) can skip step 2.<br/>
                  Cost of Start Restart - $100 per player per 5-week session. This is non-refundable. This does NOT include your $25 AAC Annual Membership.</CardText>
                  <Button><Link className="text-white" to="http://sportsaac.com/my-account/" target="_blank" key="createAAC">CREATE ACCOUNT</Link></Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>AAC ANNUAL FEES</CardTitle>
                  <CardText>2) After creating your account, you must pay a $25 membership fee to join AAC if you are not already a member. Please click the "Pay AAC Membership" to complete this. This membership fee must be paid to participate in the league. <br/> Once your AAC registration is completed head to the link below to register for tennis<br/>Cost of Start Restart - $100 per player per 5-week session. This is non-refundable. This does NOT include your $25 AAC Annual Membership.</CardText>
                  <Button><Link className="text-white" to="http://sportsaac.com/leagues/tennis/" target="_blank" key="createAAC">CREATE ACCOUNT</Link></Button>
                </Card>
              </Col> */}
            {/* </Row> */}
          </TabPane>
          {/* SECOND TAB */}
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Sessions</CardTitle>
                  <CardText className="text-left">
                  Session 1 - TBA
                  <br/>
                  Session 2 - TBA
                  <br/>
                  Session 3 - TBA
                  <br/>
                  Session 4 - TBA
                    </CardText>
                  {/* <Button><Link to="http://assets.usta.com/assets/1/15/ITF%20-%20RoT%202010.pdf" target="_blank" key="USTA Rule" className="text-white">USTA Rules</Link></Button> */}
                </Card>
              </Col>
              {/* <Col sm="6"> */}
                {/* <Card body>
                  <CardTitle>Ladder</CardTitle>
                  <CardText className="text-left">There will be five Ladder Divisions based on USTA levels: 4.5+, 4.0, 3.5, 3.0, 2.5, and 2.0. Here is a breakdown of the divisions and their descriptions:<br/>
                  <ul>
                      <li><strong>2.0</strong> This is a beginning player.</li>
                      <li><strong>2.5</strong> This player is learning to judge where the ball is going although court coverage is weak. This player can sustain a slow rally with other players of same ability.</li>
                      <li><strong>3.0</strong> This player is consistent when hitting medium pace shots, but is not comfortable with all strokes and lacks control when trying for directional intent, depth, or power.</li>
                      <li><strong>3.5</strong> This player has achieved improved stroke dependability and direction on moderate pace shots, but still lacks depth and variety. This player exhibits more aggressive net play, has improved court coverage and is developing teamwork in doubles.</li>
                      <li><strong>4.0</strong> This player has dependable strokes, including directional intent, on both forehand and backhand sides on moderate shots, plus the ability to use lobs, overheads, approach shots and volleys with some success. This player occasionally forces errors when serving and teamwork in doubles is evident.</li>
                      <li><strong>4.5</strong> This player has begun to master the use of power and spins and is beginning to handle pace, has sound footwork, can control depth of shots, and is beginning to vary tactics according to opponents. This player can hit first serves with power and accuracy and place the second serve and is able to rush the net successfully.</li>
                      <li><strong>5.0</strong> This player has good shot anticipation and frequently has an outstanding shot or attribute around which a game may be structured. This player can regularly hit winners or force errors off of short balls, can put away volleys, can successfully execute lobs, drop shots, half volleys and overhead smashes, and has good depth and spin on most second serves.</li>
                  
                  </ul>
                  </CardText> */}
                  {/* <Button>Go somewhere</Button> */}
                {/* </Card>
              </Col> */}
              </Row>
          </TabPane>
        </TabContent>
      </div>
        <br/>
        <Button className="center" color="danger"><Link to="/programs" className="text-style-2">Back to Programs</Link></Button>

        </Jumbotron>
       
        </div>
     
    </div>
  );
}
}