import styled from "styled-components";
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
                <BoxProgres delay={20} skill="HTML" porcentagem="100%" value="100" />
                <BoxProgres delay={2} skill="CSS" porcentagem="100%" value="100" />
                <BoxProgres delay={4} skill="JavaScript" porcentagem="100%" value="100" />
                <BoxProgres delay={4} skill="TypeScript" porcentagem="80%" value="80" />
                <BoxProgres delay={6} skill="ReactJS" porcentagem="100%" value="100" />
                <BoxProgres delay={6} skill="PHP" porcentagem="70%" value="70" />
                <BoxProgres delay={8} skill="C#" porcentagem="100%" value="100" />
                <BoxProgres delay={8} skill="C" porcentagem="60%" value="60" />
                <BoxProgres delay={10} skill="Banco De Dados" porcentagem="80%" value="80" />
                <BoxProgres delay={10} skill="Postgrees" porcentagem="65%" value="65" />
                <BoxProgres delay={12} skill="Docker" porcentagem="50%" value="50" />
                <BoxProgres delay={12} skill="Git e GitHub" porcentagem="90%" value="90" />
                <BoxProgres delay={14} skill="Cypress" porcentagem="50%" value="50" />
                <BoxProgres delay={14} skill="Inglês" porcentagem="85%" value="85" />
                <BoxProgres delay={16} skill="Linux" porcentagem="50%" value="50" />
            </ContainerSkills>
        </>
    )

}

export default Habilidades;