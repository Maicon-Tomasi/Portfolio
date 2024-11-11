import styled from "styled-components"
import TituloSubtitulo from "../TItuloSubtitulo"

const DivInformacoes = styled.div`
    display: flex;
    gap: 250px;
    align-items: center;
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
    display: flex;
    flex-direction: column;
`

const SpanNumero = styled.span`
    padding: 15px;
    font-size: 60px;
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
                    <SpanNumero>22</SpanNumero> <br />
                    <span>6 meses</span>
                </DivExperiência>
            </DivInformacoes>
        </>
    )
}

export default SobreMim