import React, {useState, useEffect, useRef} from "react";

//styles
import { Wrapper, Content } from "./SearchBar.styles";

//images
import SearchIcon from "../../images/search-icon.svg";

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState("");
    const initial = useRef(true);
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        }, 500);
        
    },[setSearchTerm, state]);

    return(
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="Search Icon" />
                <input 
                    type = "text"
                    placeholder = "Search Movie"
                    onChange = {e => setState(e.currentTarget.value)}
                    value = {state}
                />
                
            </Content>
        </Wrapper>

    )
}

export default SearchBar;