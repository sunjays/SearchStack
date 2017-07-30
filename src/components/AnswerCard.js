import React from 'react';
import OwnerCard from './OwnerCard'
import ReactHtmlParser from 'react-html-parser';



const AnswerCard = (props) => {

    var answers = [];

    if(props.answer_count > 0)

    {

        props.answers.map((answer,i) => {

        const answer_body = answer.body;

        let cname = "answer ";

        if(answer.is_accepted) cname += "answer-accepted";

        answers.push(

        <div className={cname} key={i} >

            <div>{ReactHtmlParser(answer_body)}</div>

            <OwnerCard {...answer.owner}/>

        </div>);

        return 1;

    })}

    return(

        <div className="answers">

            <h3>Answers</h3>

            {answers.length > 0 ? answers : <h3>No answers yet</h3>}

        </div>

    )

}

export default AnswerCard;
