import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';



class Cardcomp extends React.Component {
    constructor(props) {
      super(props);
      // this.img
    }

    render() {
  return (
    <div>
      <Card>

        <CardImg top width="100%" src={this.item.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.item.title}</CardTitle>
          <CardSubtitle>{this.item.subtitle}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </CardBody>
      </Card>
    </div>
  );
};
};

export default Cardcomp;
