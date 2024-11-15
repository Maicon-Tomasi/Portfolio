import styled from "styled-components";
import TituloSubtitulo from "../TItuloSubtitulo"
import BoxProgres from "../BarProgess";
import { Element } from "react-scroll";

const ContainerSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 60px;

    h2{
        padding: 0 50px;
    }

    @media (max-width: 500px){
        padding: 0 0 60px 2%;

        h2{
            padding: 0 0 60px 2%;
        }

    }
    

`


const Habilidades = () =>{

    return(
        <>
            <h2 style={{marginLeft: '50px',color: '#212529', fontSize: '30px', marginBottom: '-8px', fontWeight: '600'}}>My Skills</h2>
            <ContainerSkills>
                <BoxProgres skill="HTML" porcentagem="100%" value="100" />
                <BoxProgres skill="CSS" porcentagem="85%" value="85" />
                <BoxProgres skill="JavaScript" porcentagem="90%" value="90" />
                <BoxProgres skill="TypeScript" porcentagem="60%" value="60" />
                <BoxProgres skill="ReactJS" porcentagem="90%" value="90" />
                <BoxProgres skill="PHP" porcentagem="70%" value="70" />
                <BoxProgres skill="C#" porcentagem="40%" value="40" />
                <BoxProgres skill="C" porcentagem="60%" value="60" />
                <BoxProgres skill="Banco De Dados" porcentagem="65%" value="65" />
                <BoxProgres skill="Git e GitHub" porcentagem="90%" value="90" />
                <BoxProgres skill="Cypress" porcentagem="50%" value="50" />
                <BoxProgres skill="Inglês" porcentagem="85%" value="85" />
            </ContainerSkills>
        </>
    )

}

export default Habilidades;