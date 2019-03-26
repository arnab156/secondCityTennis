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
              Important Dates
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
                The 2018 SCT Classic is an INDOOR tennis tournament that will be taking place August at the 
                <strong>Midtown Athletic Club</strong>! The facility features world-class tennis courts(indoor hard), 
                state-of-the-art fitness equipment, resort-style pools, luxurious spas, and more!
                <br/>  <br/>
                The Classic is a 3-day tournament with 4-5 divisions for singles and doubles with a standard 32 or 16 player draws. 
                <br/><br/>
                The tournament will be taking place during one of the best festivals in the United States, Northalsted Market Days® 
                which is the largest street festival in the Midwest and Chicago’s most vibrant summer celebration.
                <br/>
                Court Surface: Indoor Hard
                <br/>
          
                </p>

              </Col>
            </Row>
            <br/>
              <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>GLTA 2019 Tournament</CardTitle>
                  <CardText>
                  The International LGBT Tennis Organization -The purpose of the Gay and Lesbian Tennis Alliance (GLTA) is to provide an open, safe, inclusive space and community that is committed to promoting and developing amateur tennis in the LGBT (Lesbian, Gay, Bi and Transgender) Community.
                  <br/><br/> <strong>GLTA Board Representative: Dan - dmerrit144@gmail.com</strong>
                  </CardText>
                  <br/>
                  <Button><Link className="text-white" to="https://glta.net/tournament-details/second-city-tennis-classic-2019" target="_blank" key="glta">Go to GLTA!</Link></Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>About Market Days®</CardTitle>
                  <CardText>The weekend long festival features an all day lineup of live music on 4 stages, 200+ unique vendors, 
               arts, crafts, food and drink, DJ’s and dancing, sponsor booths, and more! Attendance approaches 200,000 people from near and far, 
               representing all colors of the rainbow. Founded in 1980, the celebration now spans 6 blocks of North Halsted in Chicago’s Boystown/Lakeview neighborhood stretching 
               from Addison to Belmont. America’s first recognized gay village.</CardText>
                  <Button><Link className="text-white" to="https://www.northalsted.com/marketdays/" target="_blank" key="market days">Go to Market Days®!</Link></Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          {/* SECOND TAB */}
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  {/* <CardTitle>Important Dates</CardTitle> */}
                  <CardText className="text-left">
                  <p>Registration opens: Fri, 2018-12-14</p>
                  <br/>
                  <p>Tournament Start Date: Fri, 2019-08-09</p>
                  <br/>
                  <p>Tournament End Date: Sun, 2019-08-11</p>
                  <br/>
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