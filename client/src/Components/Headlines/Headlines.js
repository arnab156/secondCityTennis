import React from 'react';
import "./Headlines.css";
import { Link } from "react-router-dom"; 
import {Button} from "reactstrap";

export default class Headlines extends React.Component {
  render() {
    return (
        <div className="transBack rounded color-blue">
          <br/>
          <h1 className="text-black text-center headFont">HEADLINES</h1>
          <div className="typewriter">
            <h1><i>Coming Soon! Summer Singles</i></h1>
            <p className="text-center">Summer Singles is our most popular program, with over 150 players joining each year. Summer Singles offers 5-6 divisions for players of all levels. Players schedule matches on their own following the rules of the program and have several milestones to complete during the season. 
            <br/>
            <Button className="center" color="danger"><Link to="/summersingles" className="text-style-2">Read More</Link></Button>
            </p>
            <br/><br/>
          </div>
          <br/>
          <div className="typewriter">
            <h1><i>Winter Doubles, The Conclusion!</i></h1>
            <p className="text-center">The passage experienced a surge in popularity during the 1960s when Letraset used it on their 
            dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen 
            all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the 
            authoritative history of lorem ipsum.</p>
            <br/><br/>
          </div>
          <br/>
          <div className="typewriter">
            <h1><i>Start Restart Tennis!</i></h1>
            <p className="text-center">This program provides beginning and intermediate players (and those who haven’t played in a while) a fun environment to develop skills quickly and encourage match play. 
            <br/>
            <Button className="center" color="danger"><Link to="/restart" className="text-style-2">Read More</Link></Button>
            </p>
           
            <br/><br/>
          </div>
          <br/>            
        </div>
    );
  }
}