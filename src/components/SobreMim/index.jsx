import styled from "styled-components"
import TituloSubtitulo from "../TItuloSubtitulo"

const DivInformacoes = styled.div`
    display: flex;
    gap: 100px;
    align-items: center;

    @media screen and (max-width: 1000px){
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
`

const DivTexto = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;

    h2{
        font-weight: 400;
        font-size: 26px;
        margin-bottom: -6px;
    }

    span{
        font-weight: bold;
        border-bottom: 4px solid aqua;
    }

    p{
        font-size: 21px;
        font-weight: 300;
        text-align: justify;
    }

`

const DivExperiência = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 40px;

    @media screen and (max-width: 1000px){
        padding: 0;
    }
    
`

const SpanNumero = styled.span`
    font-size: 80px;
    margin-bottom: 15px;
    border-bottom: 4px solid aqua;
    color: #4c4d4d;
`

const SpanAnosExperiencia = styled.span`
    font-size: 27px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
`

const SobreMim = () => {
    return(
        <>
            <TituloSubtitulo titulo="About Me" subtitulo="Know more me"/>

            <DivInformacoes>
                <DivTexto>
                    <h2>Hi, I'm <span>Maicon Tomasi</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </DivTexto>

                <DivExperiência>
                    <SpanNumero>22</SpanNumero>
                    <SpanAnosExperiencia>Meses De <b>Experiência</b></SpanAnosExperiencia>
                </DivExperiência>
            </DivInformacoes>
        </>
    )
}

export default SobreMim