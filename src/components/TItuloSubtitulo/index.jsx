import styled from "styled-components"

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
const SpanEstilziado = styled.span`
    background-color: aqua;
    padding: 8px;
    font-size: 16px;
`
const SubtituloEstilizado = styled.h1`
    color: black;
    font-weight: 600;
`

const TituloSubtitulo = ({titulo, subtitulo}) =>{
    return(
        <ContainerTexto>
            <SpanEstilziado>{titulo}</SpanEstilziado>
            <h1>{subtitulo}</h1>
        </ContainerTexto>
    )
}

export default TituloSubtitulo