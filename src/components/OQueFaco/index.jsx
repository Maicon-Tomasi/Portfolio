import { useTranslation } from "react-i18next";
import TituloSubtitulo from "../TituloSubtitulo";
import styled from "styled-components";
import {
    FaCss3,
    FaServer,
    FaDatabase,
    FaLayerGroup,
    FaMobileAlt,
    FaExchangeAlt,
} from "react-icons/fa";
import CardOqueFaco from "../CardOqueFaco";
import { Element } from "react-scroll";

const ContainerOQueFaco = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        justify-content: center;
    }
`;

const OQueFaco = () => {
    const { t } = useTranslation();

    return (
        <Element name="oquefaco">
            {/* Componente de título e subtítulo da seção */}
            <TituloSubtitulo
                titulo={t("oQueFaco.titulo")}
                subtitulo={t("oQueFaco.subtitulo")}
            />

            {/* Contêiner principal para os cartões */}
            <ContainerOQueFaco>
                <CardOqueFaco
                    icone={<FaCss3 size={80} color="aqua" />}
                    titulo={t("oQueFaco.frontEnd.titulo")}
                    texto={t("oQueFaco.frontEnd.texto")}
                />

                <CardOqueFaco
                    icone={<FaServer size={80} color="aqua" />}
                    titulo={t("oQueFaco.backEnd.titulo")}
                    texto={t("oQueFaco.backEnd.texto")}
                />

                <CardOqueFaco
                    icone={<FaDatabase size={80} color="aqua" />}
                    titulo={t("oQueFaco.bancoDeDados.titulo")}
                    texto={t("oQueFaco.bancoDeDados.texto")}
                />

                <CardOqueFaco
                    icone={<FaLayerGroup size={80} color="aqua" />}
                    titulo={t("oQueFaco.fullStack.titulo")}
                    texto={t("oQueFaco.fullStack.texto")}
                />

                <CardOqueFaco
                    icone={<FaMobileAlt size={80} color="aqua" />}
                    titulo={t("oQueFaco.mobile.titulo")}
                    texto={t("oQueFaco.mobile.texto")}
                />

                <CardOqueFaco
                    icone={<FaExchangeAlt size={80} color="aqua" />}
                    titulo={t("oQueFaco.api.titulo")}
                    texto={t("oQueFaco.api.texto")}
                />
            </ContainerOQueFaco>
        </Element>
    );
};

export default OQueFaco;
