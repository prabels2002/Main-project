import React from "react";
import PropTypes from "prop-types";
import { Row, Card } from "react-bootstrap";
import './Message.css'; // Import the CSS file

// This is a functional component which renders the individual messages
export function Message(props) {
    return (
        <Row style={{ marginRight: "0px" }}>
            <Card border="success" className="message-card" role="alert">
                <Card.Body>
                    <h6 className="message-timestamp"> 
                        {props.timeStamp} 
                    </h6>
                    <Card.Subtitle>
                        <b>
                            {props.sender}
                        </b>
                    </Card.Subtitle>
                    <Card.Text>
                        {props.data}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}

// PropTypes validation
Message.propTypes = {
    timeStamp: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    marginLeft: PropTypes.string, // Optional prop
};

Message.defaultProps = {
    marginLeft: "0px", // Default value for marginLeft
};
