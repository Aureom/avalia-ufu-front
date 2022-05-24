import React from "react";

import './styles/searchBarStyle.scss';
import {BiSearch} from "react-icons/bi";

export interface Props {
    text: string;
    width?: string;
    height?: string;
}

export default function SearchBar(props: Props) {
    return(
        <div className="search-bar">
            <input className="search-input" type="text" placeholder={props.text}/>
            <BiSearch className="search-icon" size="1.5rem"/>
        </div>
    )
}