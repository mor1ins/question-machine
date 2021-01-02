import React from 'react';
import {Card, Button} from "react-bootstrap";
import Question from "./Question";
import CodeView from "./Code";
import Answers from "./Answers";
import PropTypes from 'prop-types';


class QuestionCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            use_starting_page: props.use_starting_page,
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
        return this.state.use_starting_page
            ?
                (
                    <Card className="question-card">
                        <Card.Header as="h5">
                            Необходимо выбрать
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Выбор</Card.Title>
                            <Card.Text>
                                <div className='d-flex flex-column'>
                                    <div>Описание выбора</div>
                                    <div className='question-card__button_container d-flex justify-content-between'>
                                        <Button className='button_container__question-button' variant="primary">
                                            Исправление ошибок
                                        </Button>
                                        <Button className='button_container__question-button' variant="primary">
                                            Перемешать
                                        </Button>
                                        <Button className='button_container__question-button' variant="primary">
                                            Начать сначала
                                        </Button>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            :
                (
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

QuestionCard.defaultProps = {
    use_starting_page: true,
};

QuestionCard.propTypes = {
    current_number: PropTypes.number,
    number_of_question: PropTypes.number,
    question: PropTypes.string,
    code: PropTypes.string,
    answerType: PropTypes.string,
    answers: PropTypes.array | PropTypes.string,
};

export default QuestionCard;

