import React from "react";
import {FormCheck} from 'react-bootstrap';

class Answers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            answers: props.answers,
        };
    }

    render() {
        return this.state.type === 'free_answer'
            ?
                (
                    <>
                        Свободный ответ
                    </>
                )
            :
                (
                    <>
                        {this.state.answers.map((answer, i) => (
                            <FormCheck
                                type={this.state.type}
                                label={answer}
                                name="formHorizontalRadios"
                                id={`formHorizontalRadios${i + 1}`} />)
                        )}
                    </>
                );
    }
}

export default Answers;