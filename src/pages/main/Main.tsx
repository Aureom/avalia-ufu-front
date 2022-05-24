import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";

import './styles/mainStyle.scss';
import Card from "../../components/card/Card";

export default function Main() {
    return (
        <>
            <Navbar/>
            <div className="main-container">
                <SearchBar text="Pesquisar"/>
                <div className="card-container">
                    <Card title="MELHORES AVALIAÇÕES" content="Conteúdo"/>
                    <Card title="PIORES AVALIAÇÕES" content="Conteúdo"/>
                    <Card title="AVALIADOS RECENTEMENTE" content="Conteúdo"/>
                </div>
            </div>
        </>
    )
}