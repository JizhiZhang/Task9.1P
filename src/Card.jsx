import React from 'react'
import './Card.css'

const Card = (props) =>{
    return<div className = 'column'>
        <img src={props.avatar} alt="staff" height = {250} width = {250}/>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
    </div>
}

export default Card