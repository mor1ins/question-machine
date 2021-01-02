import React from "react";
import QuestionCard from "./QuestionCard";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import QuestionSelector from "./QuestionSelector";
import Navbar from "./Navbar";


export default () => (
    <div className='vw-100 vh-100 d-flex'>
        <QuestionSelector />
        <div className='d-flex flex-column'>
            <Navbar />
            <div className='w-100 h-75 d-inline-flex justify-content-between'>
                <div className="w-100 primary-color d-flex align-items-center justify-content-center">
                    <QuestionCard />
                </div>
            </div>
        </div>
    </div>
);