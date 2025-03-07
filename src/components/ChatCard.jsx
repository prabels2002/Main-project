import React from "react";
import { Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a function which renders the friends in the friends list
export function ChatCard( props ){
    return (
        <Row style={{ marginRight:"9px" }}>
            <Card border="success" style={{ width:'100%', alignSelf:'center', marginLeft:"15px" }} onClick={ () => { props.getMessages( props.publicKey ); }}>
              <Card.Body>
                  <Card.Title> { props.name } </Card.Title>
                  <Card.Title> { props.name } </Card.Title>
                  <Card.Subtitle> { props.publicKey.length > 20 ? props.publicKey.substring(0, 40) + " ..." : <props className="publicKey1"></props> } </Card.Subtitle>
              </Card.Body>
            </Card>
        </Row> 
    );
}