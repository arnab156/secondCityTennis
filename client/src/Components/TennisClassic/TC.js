import React from 'react';
import { Card, Button, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom"; 
import Image from "./image.jpg";

class StartRestart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
  return (
    <div >
      <Card>
        <CardBody>
          <CardTitle className="text-style text-center">{this.props.title}</CardTitle>
        </CardBody>
        <img width="100%" src={Image} alt=" cap very nice" />
        <CardBody>
        <CardText>Questions? <br/> 
          Email <a href="mailto:zchicago82@gmail.com?subject=Mail from our website - Summer Classic"> Zdravko Coric</a>
           </CardText>
           <Button color="warning"><Link to="/classic" className="text-style-2">Read More</Link></Button>

          {/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL */}
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Second City Tennis Classic</ModalHeader>
          <ModalBody>
            More Information to come this Summer!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {/* END OF MODAL */}
        </CardBody>
      </Card>
    </div>
  );
}
}
export default StartRestart;