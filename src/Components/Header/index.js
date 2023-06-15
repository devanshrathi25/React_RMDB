import React from "react";
import { Link } from "react-router-dom";

//images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo  from "../../images/tmdb_logo.svg";

//styles
import { Wrapper, Content, TMDBLogoImg, LogoImg} from "./Header.styles";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                <LogoImg src={RMDBLogo} alt="RMDBLogoImg"/>
                </Link>
                
                <TMDBLogoImg src={TMDBLogo} alt="TMDBLogoImg"/>
            </Content>
        </Wrapper>
    )
}

export default Header;