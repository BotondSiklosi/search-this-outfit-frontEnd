import React, {useContext} from "react";
import {PictureContext} from "context/PictureContext";
import styled from "styled-components";
import axios from "axios";

const SideBarStyle = styled.div`
    grid-area: sidebar;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px) {
    justify-content: center;
    }

    .sidebar ul {
        display: flex;
        flex-direction: column;
    }

    .sidebar button {
        background-color: #FFF;
        border-color: #b8e2e2;
        height: 40px;
        width: 150px;
        margin: 5px;
        transition: background-color .24s ease, border-color .25s ease;
        border-radius: 1.5rem;
        font-size: 2rem;
        font-family: sans-serif;
    }

    .sidebar button:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
        background-color: #67adc9;
        border-color: #338caf;
        cursor: pointer;
    }
`;

function SideBar() {


    const {labels,
        setPictureResults,
        pictureURL,
        setCroppedImageUrl
    } = useContext(PictureContext)
    let id = 0;



    const addClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        let id = event.target.getAttribute('data-id');
        boundingBoxes.forEach(box => {

            if (box.getAttribute('data-label') !== id) {
                box.classList.toggle('dim')
            }
        })
    }

    const removeClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        let id = event.target.getAttribute('data-id');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== id) {
                box.classList.toggle('dim')
            }
        })
    }


    const cutNewImage = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        let newImg = new Image();
        newImg.src = pictureURL;
        let imgWidth = newImg.width;
        let imgHeight = newImg.height;
        let canvas = document.createElement('CANVAS');
        let ctx = canvas.getContext('2d');
        let y = 0;
        let width = 0;
        let height = 0;
        let x = 0;

        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-name') === event.target.textContent) {
                y = box.getAttribute('data-top');
                height = imgHeight / 100 * (100 - y - box.getAttribute('data-bottom'));
                x = box.getAttribute('data-left');
                width = imgWidth / 100 * (100 - x - box.getAttribute('data-right'));
            }
        })

        x = imgWidth / 100 * x;
        y = imgHeight / 100 * y;

        canvas.width = imgWidth;
        canvas.height = imgHeight;

        ctx.drawImage(newImg,
             x, y, width, height,
            0, 0, width, height);

        return canvas.toDataURL();
    }


    const fileSelectedHandler = event => {
        event.preventDefault();
        const imgUrl = cutNewImage(event);
        setCroppedImageUrl(imgUrl)
        let labelName = event.target.textContent;
        const url = "http://localhost:8080/result";
        axios.post(url, { itemName: labelName, image: { base64: imgUrl.split(',')[1] }})
            .then(response => setPictureResults(response.data))
            .catch(reason => {
                console.log("mimanó " + reason)
            })
    }




    return (
        <SideBarStyle>
            <div className="sidebar">
                <ul>
                    {labels.map( (labels) => {
                       return <button key={id++}
                                      data-id={id}
                                      onClick={fileSelectedHandler}
                                      onMouseOut={removeClass}
                                      onMouseOver={addClass}
                       >{labels.names[0]}</button>
                    })}
            {/*        <button>label_1</button>*/}
            {/*        <button>label_1</button>*/}
            {/*        <button>label_1</button>*/}
                </ul>
            </div>

        </SideBarStyle>
    )


}

export default SideBar;