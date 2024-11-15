import styled from "styled-components"

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
    color: #212529;
`
const SpanEstilziado = styled.span`
    background-color: aqua;
    padding: 8px;
    font-size: 16px;
`
const SubtituloEstilizado = styled.h1`
    font-weight: 600;
    font-size: 45px;
`

const TituloSubtitulo = ({titulo, subtitulo}) =>{
    return(
        <ContainerTexto>
            <SpanEstilziado>{titulo}</SpanEstilziado>
            <SubtituloEstilizado>{subtitulo}</SubtituloEstilizado>
        </ContainerTexto>
    )
}

export default TituloSubtitulo