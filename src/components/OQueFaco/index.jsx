import TituloSubtitulo from "../TItuloSubtitulo"
import styled from "styled-components"
import { FaCss3, FaServer, FaDatabase, FaLayerGroup, FaMobileAlt, FaExchangeAlt} from "react-icons/fa"
import CardOqueFaco from "../CardOqueFaco"

const ContainerOQueFaco = styled.div`
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;

     @media (max-width: 1000px){
          justify-content: center;
     }
`


const OQueFaco = () =>{

     return(
          <>
               <TituloSubtitulo titulo="What I Do?" subtitulo="How I can help your next project"/>

               <ContainerOQueFaco>
                    <CardOqueFaco icone={<FaCss3 size={80} color="aqua" />} titulo="Front-End" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>

                    <CardOqueFaco icone={<FaServer size={80} color="aqua" />} titulo="Back-End" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>

                    <CardOqueFaco icone={<FaDatabase size={80} color="aqua" />} titulo="Banco De Dados" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>

                    <CardOqueFaco icone={<FaLayerGroup size={80} color="aqua" />} titulo="Full Stack" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>

                    <CardOqueFaco icone={<FaMobileAlt size={80} color="aqua" />} titulo="Desenvolvimento Mobile" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>

                    <CardOqueFaco icone={<FaExchangeAlt size={80} color="aqua" />} titulo="API's" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
               </ContainerOQueFaco>

          </>
     )

}

export default OQueFaco