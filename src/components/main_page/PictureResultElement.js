import React, {useContext, useState} from "react";
import styled from "styled-components";
import {PictureContext} from "context/PictureContext";
import axios from "axios";

const PictureResultElementStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  
  img {
    position: relative;
    bottom: 5rem;
    width: 85%;
    height: 64%;
  }
  
  p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    bottom: 3rem;
  }
  
`

function PictureResultElement( {subclassificationHUN, images}) {

    return (
        <PictureResultElementStyle>
            <img src={images[0].url} alt=""/>
            <p>{subclassificationHUN}</p>


        </PictureResultElementStyle>

    )
}

export default PictureResultElement;