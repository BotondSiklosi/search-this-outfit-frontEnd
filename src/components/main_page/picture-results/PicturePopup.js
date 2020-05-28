import React, {useContext} from "react";
import styled from "styled-components";
import {PictureContext} from "../../../context/PictureContext";
import {Link, Route} from "react-router-dom";

const PicturePopupStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 70;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: display 5s ease-in;

        .popup-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 71;
        
        opacity: 0.7;
        display: flex;
        background-color: rgb(60, 55, 55);
        }
        
        .popups {
            position: relative;
            z-index: 72;
            width: 750px;
            height: 500px;
            background-color: #ffffff;
            border-radius: 0.4rem;
            display: grid;
            grid-template-columns: 46% 54%;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            font-weight: bold;
            font-family: BlinkMacSystemFont,serif;
        }
        
        .close-button-container {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        cursor: pointer;
        transition: color .25s ease;
        }
        
        .close-button-container:hover {
            color: #db6d6d;
        }
        
        .close-button-container div{
        font-family: Arial,serif;
        font-size: 3.5rem;
        }
        
        .popup-images img {
          margin: 4rem;
          height: 75%;
          width: 80%;
          border-color: black;
          border-width: 1px;
        }
        
        .popup-text-container {
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            height: 80%;
        }
        
        .popup-text-status {
            color: #282727;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: sans-serif;
        }
        
        .popup-text-name {
            color: rgba(32, 49, 12, 0.89);
            font-size: 5rem;
            font-family: Stencil Std,fantasy;
            font-weight: bolder;
        }
        
        .popup-text-price {
            position: relative;
            color: #626262;
            font-weight: initial;
            font-size: 2rem;
          
        }
        
        .popup-text-container a {
            text-decoration: none;
            width: 84%;
            background-color: rgba(43,66,15,0.89);
            display: flex;
            padding: 6px;
            color: white;
            font-family: sans-serif;
            font-weight: initial;
            font-size: 4rem;
            transition: background-color .25s ease;
            }
            
            .popup-text-container a:hover {
                background-color: rgba(67,101,29,0.89);
            }
        
    `;

function PicturePopup () {

    const {setPopup, popup} = useContext(PictureContext);

    const backgroundCloseHandler = event => {
        event.preventDefault();
        setPopup(null);
    }

    const closeButtonHandler = event => {
        event.preventDefault();
        setPopup(null);
    }

    return (

        <PicturePopupStyle className="popup-style">
                <div onClick={backgroundCloseHandler} className="popup-container"></div>
                <div className="popups">
                    <div onClick={closeButtonHandler} className="close-button-container">
                        <div className="close-button">x</div>
                    </div>
                    <div className="popup-images">
                        <img src={popup.images[0].url} alt=""/>
                    </div>
                    <div className="popup-text-container">
                        <p className="popup-text-status">LIMITED EDITION</p>
                        <p className="popup-text-name">{popup.productName}</p>
                        <p className="popup-text-price">{popup.priceHUF} HUF</p>
                        <a href={popup.productLink} target="_blank">Check Product</a>
                    </div>

                </div>
        </PicturePopupStyle>

    )

}

export default PicturePopup;