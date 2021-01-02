import React from 'react';
import {Card} from "react-bootstrap";
import Question from "./Question";
import CodeView from "./Code";
import Answers from "./Answers";
import PropTypes from 'prop-types';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_number: props.current_number,
            number_of_question: props.number_of_question,
            question: props.question,
            code: props.code,
            answerType: props.answerType,
            answers: props.answers,
        };
    }

    render() {
        console.log(this.state);
        return (
            <Card className="question-card">
                <Card.Header as="h5">
                    Вопрос {this.state.current_number}/{this.state.number_of_question}
                </Card.Header>
                <Card.Body>
                    <Question text={this.state.question} />
                    <Card.Text>
                        <CodeView code={this.state.code} />
                        <Answers
                            type={this.state.answerType}
                            answers={this.state.answers}
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

QuestionCard.propTypes = {
    current_number: PropTypes.number,
    number_of_question: PropTypes.number,
    question: PropTypes.string,
    code: PropTypes.string,
    answerType: PropTypes.string,
    answers: PropTypes.array | PropTypes.string,
};

export default QuestionCard;

