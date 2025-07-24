import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BoxProgresEstilizado = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
    }

    @media (max-width: 1400px){
        max-width: 400px;
    }

    @media (max-width: 960px){
        max-width: 800px;
    }
`

const ProgressEstilizado = styled.progress`
    width: 100%;
    max-width: 650px;
    height: 10px;
    border: none; /* Remove borda */
    appearance: none; /* Remove o estilo padrão do navegador */
    
    &::-webkit-progress-bar {
        background-color: #e0e0e0; /* Cor do fundo da barra */
        border-radius: 5px; /* Arredondamento da borda */
    }
    
    &::-webkit-progress-value {
        background-color: aqua; /* Cor do valor de progresso */
        border-radius: 5px; /* Arredondamento da borda */
    }
    
    &::-moz-progress-bar {
        background-color: aqua; /* Cor do valor de progresso no Firefox */
        border-radius: 5px;
    }
`;


const BoxProgres = ({skill, porcentagem, value, delay}) => {

    useEffect(() => {
          AOS.init({
               duration: 2000,
               once: true,
               easing: 'ease-in-out',
          });
     }, []);

    return(
        <BoxProgresEstilizado>
            <div data-aos="fade-up" data-aos-delay={delay} style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{skill}</span>
                <span>{porcentagem}</span>
            </div>
            <div data-aos="fade-up" data-aos-delay={delay}>
                <ProgressEstilizado value={value} max={100}/>
            </div>
        </BoxProgresEstilizado>
    )

}

export default BoxProgres;