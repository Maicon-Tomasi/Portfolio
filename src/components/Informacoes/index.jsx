import styled from "styled-components";
import SpanInformacoes from "../SpanInformacoes";
import { useTranslation } from "react-i18next";

const SectionInformacoesEstilizada = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0;
  color: #212529;
`;

const Informacoes = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <SectionInformacoesEstilizada>
      <SpanInformacoes label={t("informacoes.name")} span={t("spanValues.name")} />
      <SpanInformacoes label={t("informacoes.birthdate")} span={t("spanValues.birthdate")} />
      <SpanInformacoes label={t("informacoes.location")} span={t("spanValues.location")} />
      <SpanInformacoes label={t("informacoes.email")} span={t("spanValues.email")} />
    </SectionInformacoesEstilizada>
  );
};

export default Informacoes;
