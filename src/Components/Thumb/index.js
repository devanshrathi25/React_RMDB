import React from "react";
import { Link } from "react-router-dom";

//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable}) => {
    return(
        <div>
        {clickable?
        (<Link to={`/${movieId}`}>
            <div><Image src={image} alt="movie-thumb"/></div>
        </Link>):
        (<div><Image src={image} alt="movie-thumb"/></div>
        )}
        </div>
    )
}

export default Thumb;