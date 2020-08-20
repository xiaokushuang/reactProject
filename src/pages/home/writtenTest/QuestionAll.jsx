import React, {Component} from 'react';
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
class QuestionAll extends Component {
    render() {
        return (
            <div>
                <Question1></Question1>
                <Question2></Question2>
                <Question3></Question3>
            </div>
        );
    }
}

export default QuestionAll;