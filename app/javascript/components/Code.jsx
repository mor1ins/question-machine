import Highlight from "react-highlight.js";
import React from "react";


class CodeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: props.code,
        };
    }

    render() {
        return this.state.code
            ?
                (<Highlight language='c#'>
                    {this.state.code}
                </Highlight>)
            :
                <></>;
    }
}


export default CodeView;