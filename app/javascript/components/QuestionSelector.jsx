import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";


class QuestionSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null,
        };
    }

    render() {
        const questions = [
            1,   2,  3,  4,  5,  6,  7,  8,  9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];

        return (
            <div className='col-md-4 overflow-auto collapse' id="navbarToggleExternalContent">
                <ListGroup className='d-flex flex-column answer-list'>
                    {questions.map((q) => (<ListGroupItem>{q}</ListGroupItem>))}
                </ListGroup>
            </div>
        );
    }
}

export default QuestionSelector;