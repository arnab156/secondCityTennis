import React from 'react';
import "./Headlines.css";

export default class Headlines extends React.Component {
  render() {
    return (
        <div className="transBack rounded">
            <br/>
            <h1 className="text-black text-center">HEADLINES</h1>
            <p className="color-blue">  
            Second City Tennis (SCT) organizes tennis and related social activities serving the gay and lesbian community of Chicago. 
            We began our association with the Athletic Alliance of Chicago in 2013. SCT has been offering tennis programs since 1987, formed its first Board of Directors in 1998. 
            <br/><br/>
            Second City Tennis was started in 1987 by a small group of LGBT tennis enthusiasts. Our mission is to create and support competitive and social tennis programs for the LGBTQ and allied communities and promote unity among our membership. Now at almost 1,000 members, SCT organizes a variety of programs including beginner clinics, winter indoor doubles leagues, a summer singles ladder, team tennis (similar to Davis Cup), and the Second City Tennis Classic, the largest tournament in the region sanctioned by the Gay & Lesbian Tennis Association.
            </p> 
            <br/>
        </div>
    );
  }
}