import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Carousel.css"

function Carousel(props) {

    const [visibleIndex, setVisibleIndex] = useState(0)
    const [carousel, setCarousel] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    if (visibleIndex === props.imageList.length) {
        setVisibleIndex(0);
    }

    function onClickHandler(data) {
        console.log(data);
        setVisibleIndex(data);
        props.setDisplay(data);
    }

    function onLeftClick() {

        if (visibleIndex === 0) {
            setVisibleIndex(props.imageList.length - 1);
            props.onLeft(props.imageList.length - 1);
            return;
        }

        setVisibleIndex(visibleIndex - 1);
        props.onLeft(visibleIndex - 1);
    }

    function onRightClick() {

        if (visibleIndex === props.imageList.length - 1) {
            setVisibleIndex(0)
            props.onRight(0)
            return;
        }

        setVisibleIndex(visibleIndex + 1)
        props.onRight(visibleIndex + 1)
    }


    function startCarousel() {

        if (!carousel) {
            setCarousel(true);

            const newintervalID = setInterval(() => {
                setVisibleIndex(prev => prev + 1);
            }, 3000)
            setIntervalId(newintervalID);

        } else {
            console.log("condition met")
            clearInterval(intervalId);
            setCarousel(false);
        }

    }

    useEffect(() => {
        props.onRight(visibleIndex);
    }, [visibleIndex])


    return (

        <div className='carousel_content'>

            <div className='carousel'>
                <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '20px' }} onClick={onLeftClick}>←</button>
                {props.imageList.map((img, index) => {
                    return <img alt='img' key={index} onClick={() => { onClickHandler(index) }} className='carousel_image' style={{ filter: visibleIndex != index && "grayscale(100%)" }} src={img.image}></img>
                })}
                <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '20px' }} onClick={onRightClick}>→</button>
            </div >

            <div>
                {carousel ?
                    <img onClick={startCarousel} width="200px" src='https://media.istockphoto.com/id/890158078/vector/pause-button-vector.jpg?s=612x612&w=0&k=20&c=ga1wXjrJsE6gtTuF5xTMutftETwmmUzUzR6hHXBNpRI=' alt='img'></img>
                    : <img onClick={startCarousel} width="200px" src='https://png.pngitem.com/pimgs/s/4-42332_button-clip-art-play-pause-button-png-transparent.png' alt='img'></img>
                }
            </div>

        </div>

    )
}

export default Carousel