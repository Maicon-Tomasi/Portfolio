import { useState } from "react";
import styled from "styled-components";
import BoxProjetos from "./BoxProjetos";
import { FaCss3 } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import TituloSubtitulo from "../TituloSubtitulo_temp";


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
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/capaProjetoSite.png",
            video: "/videos/VideoSiteMaeDesktop.mp4",
            descricao: t("Projetos.descricaoSistePsicologa"),
        },
        {
            icone: <FaDatabase size={50} color="aqua" />, 
            nomeCategoria:"Full-Stack", 
            img: "/imagesProjetos/capaSistemaAgeAgendamento.png",
            video: "/videos/VideoSistemaAgendamentos.mp4",
            descricao: t("Projetos.descricaoSistemaPsicologa"),
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
                {arrayProjetos.map((projeto, index) => (
                    <BoxProjetos 
                        key={index}
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
