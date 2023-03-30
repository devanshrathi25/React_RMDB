import React, { useState, useEffect } from "react";

//components
import HeroImage from "./HeroImage";

//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

//images
import NoImage from "../images/no_image.jpg";

//hooks
import { useHomeFetch } from "../Hooks/useHomeFetch";

const Home = () => {
    const {state, loading, error} = useHomeFetch();
    console.log(state);
    return (
        <>
        {
            state.results[0] ? 
            (<HeroImage 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].title}
                text = {state.results[0].overview}
            />) : null
        }
        </>
    );
}

export default Home;