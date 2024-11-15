import { useState } from "react";
import TituloSubtitulo from "../TituloSubtitulo";
import styled from "styled-components";
import BoxProjetos from "./BoxProjetos";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";


const DivFiltroProjetos = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px 0;

    @media (max-width: 500px){
        gap: 10px;
    }
`;

const DivGaleriaProjetos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 100px;
`

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
    const { t } = useTranslation();

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const arrayProjetos = [
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/portfolio.mp4",
            descricao: t("Projetos.descricaoPortfolio"),
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/AluraDevs.png",
            video: "/videos/desafioAlura.mp4",
            descricao: t("Projetos.descricaoDesafioAlura"),
        }
    ]

    return (
        <Element name="projetos">
            <TituloSubtitulo titulo={t("Projetos.titulo")} subtitulo={t("Projetos.subtitulo")} />

            {/* <DivFiltroProjetos>
                {["All", "Front-End", "Back-End", "Full Stack"].map((filter) => (
                    <LabelEstilizada
                        key={filter}
                        active={selectedFilter === filter}
                        onClick={() => handleFilterClick(filter)}
                    >
                        {filter}
                    </LabelEstilizada>
                ))}
            </DivFiltroProjetos> */}


            <DivGaleriaProjetos>
                {arrayProjetos.map((projeto) => (
                    <BoxProjetos 
                        icone={projeto.icone} 
                        nomeCategoria={projeto.nomeCategoria} 
                        img={projeto.img}
                        descricao={projeto.descricao}
                        video={projeto.video}
                    />
                ))}
            </DivGaleriaProjetos>
        
        </Element>
    );
};

export default Projetos;
