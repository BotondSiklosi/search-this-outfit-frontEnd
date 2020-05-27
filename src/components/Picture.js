import React, {useContext} from "react";
import {PictureContext} from "../context/PictureContext";

function Picture() {

    const {croppedImageUrl} = useContext(PictureContext);

    return (
        <div>
            {croppedImageUrl !== null && <img style={{width: "200px", height: "200px"}} src={croppedImageUrl} alt=""/>}
        </div>
    )
}

export default Picture