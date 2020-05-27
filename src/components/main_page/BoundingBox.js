import React from "react";
import styled from "styled-components";

const BoundingBox = styled.div`
    position: absolute;
    border-style: solid;
    border-color: #149df2;
    top: ${props => `${props.top}%`};
    right: ${props => `${props.right}%`};
    bottom: ${props => `${props.bottom}%`};
    left: ${props => `${props.left}%`};
    z-index: 50;
    opacity: 0.1;
    transition: opacity 0.25s ease;
  
  
    .label-names {
      position: absolute;
      top: 0;
      left: -1%;
      transform: translateY(-100%);
      color: white;
      font-weight: bold;
      background-color: #149df2;
      font-size: 1.3rem;
      border-radius: 2px;
      padding: 0 4px 3px 3px;
    }
    
    
`;

function BoundingBoxes({boundingBox, id, names}) {


    const top = (boundingBox.top_row * 100).toFixed(5);
    const right = 100 - (boundingBox.right_col * 100).toFixed(5);
    const left = (boundingBox.left_col * 100).toFixed(5);
    const bottom = 100 - (boundingBox.bottom_row * 100).toFixed(5);

    // const printSome = () => {
    //     console.log(labels)
    // }

    const addClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== event.target.getAttribute('data-label')) {
                box.classList.toggle('dim')
            }
        })
    }

    const removeClass = event => {
        let boundingBoxes = document.querySelectorAll('.bounding-box');
        boundingBoxes.forEach(box => {
            if (box.getAttribute('data-label') !== event.target.getAttribute('data-label')) {
                box.classList.toggle('dim')
            }
        })
    }

    return (        // `label-${id}`
        <BoundingBox top={top}
                     data-top={top}
                     right={right}
                     data-right={right}
                     left={left}
                     data-left={left}
                     bottom={bottom}
                     data-bottom={bottom}
                     data-label={id}
                     data-name={names[0]}
                     className={'bounding-box dim'}
                     onMouseOver={addClass}
                     onMouseOut={removeClass}
        >
            <div data-label={id} className="label-names">{names[0]}</div>
        </BoundingBox>
    )
}

export default BoundingBoxes;