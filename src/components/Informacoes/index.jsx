import styled from "styled-components"
import SpanInformacoes from "../SpanInformacoes"

const SectionInformacoesEstilizada = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
    color: #212529;
`

const Informacoes = () =>{

    return(
        <SectionInformacoesEstilizada>
            <SpanInformacoes label="Nome:" span="Maicon W. S. Tomasi"/>
            <SpanInformacoes label="Email:" span="maiconwstomasi@gmail.com"/>
            <SpanInformacoes label="Email:" span="22/07/2005"/>
            <SpanInformacoes label="Resido em:" span="Campo Grande, MS"/>
        </SectionInformacoesEstilizada>
    )

}

export default Informacoes