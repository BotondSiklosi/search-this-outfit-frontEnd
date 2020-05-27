import React, {useContext} from "react";
import styled from "styled-components";
import {PictureContext} from "context/PictureContext";
import PictureResultElement from "./PictureResultElement";

const PictureResultsStyle = styled.div`
     grid-area: pictures;
     

    .message-for-pictures {
      color: #ddd0aa;
      display: flex;
      justify-content: center;
      padding-top: 8rem;
      font-size: 3rem;
    }

    .pictureResults ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
    }
    
    @media screen and (max-width: 1235px) {
        .pictureResults ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
    @media screen and (max-width: 930px) {
        .pictureResults ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media screen and (max-width: 620px) {
        .pictureResults ul {
            grid-template-columns: 1fr;
        }
    }
    
    .pictureResults li {
        display: flex;
        width: 250px;
        height: 400px;
        color: black;
        border-radius: 0.5rem;
        background-color: #d2c9c9;
        justify-content: center;
        margin: 3rem;
        align-items: center;
        transition: background-color 0.25s ease;
    
    }

    .pictureResults li:hover {
        background-color: #54555f;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
        cursor: pointer;
        
        p {
        color: bisque;
        }
    }
`;

function PictureResults() {

    const {pictureResults,croppedImageUrl} = useContext(PictureContext)

    let id = 0;



    return (
        <PictureResultsStyle>
                {croppedImageUrl && <img style={{width: "200px", height: "200px"}} src={croppedImageUrl} alt=""/>}
            <div className="pictureResults">
                <ul>
                    {pictureResults.map(cloth => {
                        console.log(cloth)
                        return <PictureResultElement key={id++} {...cloth} id={id} />

                    } )}
                </ul>
            </div>
        </PictureResultsStyle>
    )

}


export default PictureResults;