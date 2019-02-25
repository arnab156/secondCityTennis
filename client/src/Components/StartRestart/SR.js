import React from 'react';
import { Card, Button, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
          Email <a href="mailto:startrestart@secondcitytennis.com?subject=Mail from our website"> Start Restart</a>
           </CardText>

          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Start Restart</ModalHeader>
          <ModalBody>
            More Information to come this Spring!
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </CardBody>
      </Card>
    </div>
  );
}
}
export default StartRestart;