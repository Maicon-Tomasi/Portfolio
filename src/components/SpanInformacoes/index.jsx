import styled from "styled-components"

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:100px;

    label{
        color: #6c757d;
        font-weight: 500;
        font-size: 19px;
    }

    span{
        font-weight: 600;
        font-size: 18px;
    }
`

const SpanInformacoes = ({label, span}) =>{
    return(
        <DivInfo>
            <label>{label}</label>
            <span>{span}</span>
        </DivInfo>
    )
}

export default SpanInformacoes