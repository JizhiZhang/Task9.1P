import React from 'react'

const Back = {
    width:'300px',
    height: '35px',
    backgroundColor:'rgba(192,192,192,0.5)',
    marginLeft:'5px',
    marginBottom:"20px",
    float:'left'
}

const Strong = {
    fontSize:'20px'
}

const lable = {
    marginLeft:'15px'
}

function Connect(){
    return(
        <div style = {Back}>
            <strong style = {Strong}>CONNECT US</strong>
            <img style = {lable} src = {require('./img/facebook.png')} alt = 'Burwood Campus' height = {30} width = {30} ></img>
            <img style = {lable} src = {require('./img/twitter.jpg')} alt = 'Burwood Campus' height = {30} width = {30} ></img>
            <img style = {lable} src = {require('./img/ins.jpg')} alt = 'Burwood Campus' height = {30} width = {30} ></img>
        </div>
    )
}

export default Connect