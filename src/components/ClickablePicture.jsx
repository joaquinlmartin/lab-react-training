import { useState } from 'react';
import Maxence from '../assets/images/maxence.png';
import MaxenceGlasses from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
    const [picture, setPicture] = useState(false);
    
    const handlePictureChange = () => {
        setPicture(picture => !picture)
    }

    return (
         <img className="clickable" onClick={handlePictureChange} src={picture ? MaxenceGlasses : Maxence} alt="clickableImage" />
    )
}

export default ClickablePicture;