import { useState } from "react";
import { BsDisplay } from "react-icons/bs";
import TituloSubtitulo from "../TItuloSubtitulo";
import styled from "styled-components";

const DivFiltroProjetos = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px 0;
`;

const LabelEstilizada = styled.label`
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => (props.active ? "#000000" : "#9b9b9b")};
    border-bottom: ${(props) => (props.active ? "2px solid aqua" : "none")};
    opacity: ${(props) => (props.active ? "1" : "0.6")};
    padding-bottom: 5px;

    &:hover {
        opacity: 1;
    }
`;

const Projetos = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <>
            <TituloSubtitulo titulo="Projects" subtitulo="Some of my recent projects" />

            <DivFiltroProjetos>
                {["All", "Front-End", "Back-End", "Full Stack"].map((filter) => (
                    <LabelEstilizada
                        key={filter}
                        active={selectedFilter === filter}
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter}
                    </LabelEstilizada>
                ))}
            </DivFiltroProjetos>


            <DivGaleriaProjetos>
                
            </DivGaleriaProjetos>
        </>
    );
};

export default Projetos;
