import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

export class Caard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
            <Button variant="primary">Wut du yu want?</Button>
        </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Caard;
