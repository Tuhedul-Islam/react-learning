import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBootstrap() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://st.depositphotos.com/1643295/3583/i/950/depositphotos_35837101-stock-photo-taking-a-photo.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <a href="#"><Button variant="primary">Learn More</Button></a>
            </Card.Body>
        </Card> 
    </>
  );
}

export default ReactBootstrap;

