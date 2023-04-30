import React from 'react'
import './MainContent.css'

function MainContent(props) {

    return (
        <div className='content_container'>
            <img width="1200px" height="600px" style={{ borderRadius: '50px' }} src={props.content.image}></img>
            <div className='content_text'>
                <h1>{props.content.name}</h1>
                <p>{props.content.description}</p>
            </div>
        </div >
    )
}

export default MainContent