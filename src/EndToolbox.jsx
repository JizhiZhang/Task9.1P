import React from 'react'

const Back = {
    width:'600px',
    height: '35px',
    border:'0px #666 solid',
    backgroundColor:'rgba(192,192,192,0.5)',
    marginLeft: '300px',
    marginBottom:"20px",
    float:'left'
}

const title = {
    margin:'10px 5px 10px 10px',
    fontSize:'15px',
}

const input = {
    marginRight:'15px',
    width:'300px',
   
}
const button = {
    fontSize:'15px',
    marginTop:'6px',
    width:'110px',
    height:'25px',
    backgroundColor:'rgba(125,125,125,0.8)'
}

function EndToolbox(){
    return(
        <div style = {Back}>
            <strong style = {title}>NEWSLETTER SIGN</strong>
            <input style = {input}  placeholder = 'Enter your email'></input>
            <button style = {button}>Subscribe</button>
        </div>
    )
}

export default EndToolbox