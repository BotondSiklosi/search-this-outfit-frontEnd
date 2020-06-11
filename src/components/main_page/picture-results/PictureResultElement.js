import React, {useContext, useState} from "react";
import styled from "styled-components";
import PicturePopup from "./PicturePopup";
import {PictureContext} from "../../../context/PictureContext";

const PictureResultElementStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  
  .picture-element-img {
    position: relative;
    bottom: 5rem;
    width: 85%;
    height: 64%;
    pointer-events: none;
  }
  
  .picture-element-p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    bottom: 3rem;
    pointer-events: none;
    font-family: Georgia, serif;
  }
  
`

function PictureResultElement( {images, id, stockStatusENG, genderHUN, fashionDaysProductName, mainProductLink, priceHUF, brand}) {

    const [isHovering, setIsHovering] = useState(false);
    const {setPopup} = useContext(PictureContext);

    const handleMouseHover = () => {
        setIsHovering(!isHovering);
    }

    const handlePopupClick = () => {
        setPopup({
            images: images,
            id: id,
            productName: fashionDaysProductName,
            productLink: mainProductLink,
            priceHUF: priceHUF,
            genderHUN: genderHUN,
            stockStatusENG: stockStatusENG
        })

    }

    return (
        <PictureResultElementStyle onClick={handlePopupClick}
                                   onMouseOver={handleMouseHover}
                                   onMouseLeave={handleMouseHover}>
            {isHovering? <img className="picture-element-img" src={images[1].url} alt=""/> : <img className="picture-element-img" src={images[0].url} alt=""/>}
            <p className="picture-element-p">{brand}</p>

        </PictureResultElementStyle>

    )
}

export default PictureResultElement;