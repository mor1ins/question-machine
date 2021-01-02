import {Card} from "react-bootstrap";
import React from "react";


class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          text: props.text,
        };
    }

    render() {
        return (
            <Card.Title>{this.state.text}</Card.Title>
        );
    }
}

export default Question;

