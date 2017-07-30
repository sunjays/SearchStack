import React from 'react';

import AnswerCard from './AnswerCard'

import ReactHtmlParser from 'react-html-parser';

import './FullCard.css';

import OwnerCard from './OwnerCard';

const FullCard = (props) => {

    return (

        <div className="fullcard">

            <div className="fullcard-title">

                {//<label><a href={props.link}>...open in stackoverflow.com</a><br/></label> 

                }  

                <label className="card-title">{props.title}</label>

                <button className="btn btn-close" onClick={() => {props.handleCardClick(props.answer_count)}}>X</button>

            </div>

            <div className="fullcard-content">

                <div className="question-full">

                    <div className="question-body">{ReactHtmlParser(props.body)};</div>

                    <OwnerCard {...props.owner}/>

                </div>

                <AnswerCard answer_count={props.answer_count} answers={props.answers}/>

            </div>

        </div>

    )

}



export default FullCard;
