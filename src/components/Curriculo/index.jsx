import styled from "styled-components";
import BoxInformacoes from "../BoxInfo";
import Habilidades from "../Habilidades";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import TituloSubtitulo from "../TituloSubtitulo";

const ContainerCurriculo = styled.div`
     display: flex;
     justify-content: center;
     gap: 100px;

     h2{
          color: #212529;
          font-size: 30px;
          margin-left: 20px;
          font-weight: 600;
     }

     @media (max-width: 1000px) {
          flex-direction: column;
     }
`

const CardsCurriculo = styled.div`
     width: 100%;
     max-width: 600px;
     display: flex;
     flex-direction: column;
     padding: 0 10px;
     border-left: 2px solid aqua;
     
`

const BotaoEstilizado = styled.button`
     width: 200px;
     background-color: white;
     padding: 10px;
     border: 2px solid black;
     font-weight: 500;
     transition: 1s;
     cursor: pointer;

     :hover {
          background-color: black;
          color: white;
     }
`




const Curriculo = () => {

     const { t } = useTranslation();

     return(
          <Element name="habilidades">
               <TituloSubtitulo titulo={t("curriculo.Resume")} subtitulo={t("curriculo.Titulo")} />

               <ContainerCurriculo>
                    <div>
                         <h2>{t("curriculo.MyEducation")}</h2>
                         <CardsCurriculo>
                              <BoxInformacoes title={t("curriculo.BachelorComputer")} subtitle="Uniderp, Campo Grande - MS / 2023 - 2026">
                                   {t("curriculo.DescricaoFaculdade")}
                              </BoxInformacoes>

                              <BoxInformacoes title="IT technician" subtitle="IFMT, Primavera Do Leste - MT / 2023 - 2026">
                                   {t("curriculo.DescricaoTecnico")} 
                              </BoxInformacoes>

                         </CardsCurriculo>
                    </div>

                    <div>
                         <h2>{t("curriculo.MyExperience")}</h2>
                         <CardsCurriculo>
                              <BoxInformacoes title={t("curriculo.TraineeDeveloper")} subtitle="Genesis Marketing e Desenvolvimento, Campo Grande - MS / 10/2024">
                                   {t("curriculo.DescricaoTrainee")}
                              </BoxInformacoes>

                              <BoxInformacoes title={t("curriculo.JúniorDeveloper")} subtitle="Sbr Prime, Campo Grande - MS / 02/2024 - 10/2024">
                                   {t("curriculo.DescricaoJunior")}
                              </BoxInformacoes>
                         </CardsCurriculo>
                    </div>
               </ContainerCurriculo>

               <Habilidades />


               <div style={{textAlign: 'center', paddingBottom: '20px'}}>
                    <a href="/public/Curriculo-MaiconTomasi.pdf" download>
                         <BotaoEstilizado>{t("curriculo.DownloadCV")}</BotaoEstilizado>
                    </a>
               </div>
          </Element>

     )
}

export default Curriculo;