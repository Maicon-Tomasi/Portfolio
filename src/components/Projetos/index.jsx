import { useState } from "react";
import TituloSubtitulo from "../TItuloSubtitulo";
import styled from "styled-components";
import BoxProjetos from "./BoxProjetos";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";


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

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const arrayProjetos = [
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
        {
            icone: <FaCss3 size={50} color="aqua" />, 
            nomeCategoria:"Front-End", 
            img: "/imagesProjetos/PortfolioImg.png",
            video: "/videos/videoPortfolio.mp4",
            descricao: "Deserunt enim magna velit pariatur ad. Mollit nostrud veniam culpa nisi laboris pariatur fugiat ipsum dolore tempor nostrud aliquip dolor exercitation. Excepteur eiusmod dolore commodo tempor amet. Aliqua do deserunt occaecat cillum nulla ipsum pariatur eiusmod Lorem est do ad culpa. Duis reprehenderit voluptate ad sunt laborum ex et enim reprehenderit dolor. Ipsum tempor ullamco consectetur excepteur incididunt est aliqua ipsum. Adipisicing esse mollit laboris laboris eiusmod sint officia magna ut ut nostrud sint irure.",
        },
    ]

    return (
        <>
            <TituloSubtitulo titulo="Projects" subtitulo="Some of my recent projects" />

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
        
        </>
    );
};

export default Projetos;
