import React, {useState} from "react";
import styled from "styled-components";

const PictureResultElementStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  
  img {
    position: relative;
    bottom: 5rem;
    width: 85%;
    height: 64%;
    pointer-events: none;
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
    pointer-events: none;
  }
  
`

function PictureResultElement( {subclassificationHUN, images}) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseHover = () => {
        setIsHovering(!isHovering);
    }


    return (
        <PictureResultElementStyle onMouseOver={handleMouseHover}
                                   onMouseLeave={handleMouseHover}>
            {isHovering? <img src={images[1].url} alt=""/> : <img src={images[0].url} alt=""/>}
            <p>{subclassificationHUN}</p>


        </PictureResultElementStyle>

    )
}

export default PictureResultElement;