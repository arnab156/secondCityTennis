import React from 'react';
import "./SD.css";
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
              LADDER AND RULES
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
                    TBA
                    {/* REGISTRATION BEGINS: APRIL 2 <br/>
                    SEASON START: MAY 1 <br/>
                    REGISTRATION CLOSES: JUNE 1 <br/>
                    OPENING SEASON PARTY: JUNE 3 <br/>
                    DEADLINE TO PLAY 5 MATCHES: JULY 15 <br/>
                    REGULAR SEASON ENDS; MUST HAVE PLAYED 10 MATCHES: AUG 17 <br/>
                    PLAYOFFS BEGIN: AUG 18 <br/>
                    R16 MATCH COMPLETED BY: AUG 27 <br/>
                    QF MATCH COMPLETED BY: SEPT 3<br/>
                    PLAYOFFS (SF AND FINAL): SEPT 8<br/>
                    SUMMER SINGLES PARTY: SEPT 8<br/>
                    PLAYOFFS RAIN DATE: SEPT 9<br/>
                    Players must be available both Sept 8 and 9 to participate in Playoffs.  */}
                </p>
              </Col>
            </Row>
            <br/>
              <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>CREATE AAC ACCOUNT</CardTitle>
                  <CardText>1) You must first create an AAC online account on the AAC website at   If you already have an AAC account, simply login using your current credentials. Current AAC members in good standing (annual membership paid) can skip step 2.<br/>
                  Cost of Summer Singles Ladder - $30 per player. This is non-refundable. This does NOT include your $25 AAC Annual Membership.</CardText>
                  <Button><Link className="text-white" to="http://sportsaac.com/my-account/" target="_blank" key="createAAC">CREATE ACCOUNT</Link></Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>AAC ANNUAL FEES</CardTitle>
                  <CardText>2) After creating your account, you must pay a $25 membership fee to join AAC if you are not already a member. Please click the "Pay AAC Membership" to complete this. This membership fee must be paid to participate in the league. <br/> Once your AAC registration is completed head to the link below to register for tennis<br/>Cost of Summer Singles Ladder - $30 per player. This is non-refundable. This does NOT include your $25 AAC Annual Membership.</CardText>
                  <Button><Link className="text-white" to="http://sportsaac.com/leagues/tennis/" target="_blank" key="createAAC">CREATE ACCOUNT</Link></Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          {/* SECOND TAB */}
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Challenger Rules</CardTitle>
                  <CardText className="text-left">
                  TBA
                        {/* 1. Initial Ladder Divisions will be based on USTA "NTRP" rating, previous years' results, and player requests.   The SCT Board of Directors will make final decisions on placement.   All new players in each division will be randomly sorted below returning players to determine initial placement.  <br/>     
                        2. You can only challenge players who are a certain number of positions above you in the ladder (includes crossing division lines).   This will vary based on the size of your division (see ladder for your number).   If a player moves out of this range after the challenge has been accepted (since ladder standings change constantly), match should still be played as normal.<br/>       
                        3. You move up and down the ladder based on your results as shown in table below.        

        
                        <br/>4. You can play and accept as many matches as you like throughout the season.   Players must play at least 10 matches to qualify for the playoffs.<br/>      
                        5. Throughout the summer, there will be 2 milestones. Every active player is required to play a minimum number of matches by the milestone dates. If you miss a milestone (due to lack of play, injury, etc.), you will be marked as inactive and pulled out of the ladder. <br/>
                        Milestone dates:<br/>        
                        •  July 15- must have played at least 5 matches  <br/>     
                        •  August 17 - must have played at least 10 matches  <br/>      
                        6. Inactivated players cannot rejoin the league. <br/>
                        7. If a player has to forfeit a match, the winner will have the match counted in their win/loss column but the person forfeiting will not. Neither player will be moved up or down the ladder due to a forfeit. Forfeiting a match will not help you meet a milestone unless you are the player receiving the win. 
                            Only 1 forfeit win is allowed per season per player. Forfeits can only be reported for a no show / no call for a scheduled match.<br/>
                        8. Two no show/no calls will result in removal from the ladder.  If you have to cancel a scheduled match within 48 hours of the start time, please call your opponent (do not e-mail as some people do not have constant access to e-mail).  Please report any no show/no calls to the ladder director.   <br/>
                        9. Before you can have a rematch against any player, you or the other player must play a minimum of three other challenge matches.  <br/>      
                        10. If a match is interrupted, the match must resume from that point unless the losing player agrees to default the remainder of match.<br/> 
                        11. If you retire during a match, you lose that match. Do not reschedule the match to finish at a later time.<br/> 
                        12. A ball should be called out only if you can see space between the line and the ball. If you perceive your opponent to make multiple bad line calls, email the league directors. If any one player receives three complaints against them, they will be removed from the league.  <br/>  */}
                    </CardText>
                  <Button><Link to="http://assets.usta.com/assets/1/15/ITF%20-%20RoT%202010.pdf" target="_blank" key="USTA Rule" className="text-white">USTA Rules</Link></Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
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
                  </CardText>
                  {/* <Button>Go somewhere</Button> */}
                </Card>
              </Col>
              </Row>
          </TabPane>
        </TabContent>
      </div>





        </Jumbotron>
       
        </div>
     
    </div>
  );
}
}