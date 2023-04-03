import React from "react";

//images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo  from "../../images/tmdb_logo.svg";

//styles
import { Wrapper, Content, TMDBLogoImg, LogoImg} from "./Header.styles";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt="RMDBLogoImg"/>
                <TMDBLogoImg src={TMDBLogo} alt="TMDBLogoImg"/>
            </Content>
        </Wrapper>
    )
}

export default Header;