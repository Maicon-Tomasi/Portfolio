import styled from "styled-components";
import TituloSubtitulo from "../TituloSubtitulo";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

const DivInformacoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const DivTexto = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  color: #212529;

  h2 {
    font-weight: 400;
    font-size: 26px;
    margin-bottom: -6px;
  }

  span {
    font-weight: bold;
    border-bottom: 4px solid aqua;
  }

  p {
    font-size: 22px;
    font-weight: 300;
    text-align: justify;
  }
`;

const DivExperiencia = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
  color: #212529;

  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const SpanNumero = styled.span`
  font-size: 180px;
  font-weight: 600;
  margin-bottom: 15px;
  border-bottom: 4px solid aqua;
  color: #4c4d4d;
`;

const SpanAnosExperiencia = styled.span`
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

const SobreMim = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Element name="sobremim">
      <TituloSubtitulo titulo={t("aboutMe.title")} subtitulo={t("aboutMe.subtitle")} />

      <DivInformacoes>
        <DivTexto>
          <h2 dangerouslySetInnerHTML={{ __html: t("aboutMe.introduction", { name: "Maicon Tomasi" }) }} />
          <p>{t("aboutMe.description")}</p>
          <p>{t("aboutMe.passion")}</p>
        </DivTexto>

        <DivExperiencia>
          <SpanNumero>01</SpanNumero>
          <SpanAnosExperiencia dangerouslySetInnerHTML={{ __html: t("aboutMe.yearsExperience") }} />
        </DivExperiencia>
      </DivInformacoes>
    </Element>
  );
};

export default SobreMim;
