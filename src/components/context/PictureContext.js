import React, { createContext, useState} from "react";

export const PictureContext = createContext();

export const PictureProvider= props => {
    const [currentPicture, setCurrentPicture] = useState(null);
    const [pictureURL, setPictureURL] = useState(null);
    const [pictureResults, setPictureResults] = useState(null);

    return (
        <PictureContext.Provider value={{
            currentPicture,
            setCurrentPicture,
            pictureURL,
            setPictureURL,
            pictureResults,
            setPictureResults
        }}>
            {props.children}
        </PictureContext.Provider>
    );
}