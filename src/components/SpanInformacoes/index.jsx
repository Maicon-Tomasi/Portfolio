import { useEffect } from "react";
import styled from "styled-components"
import AOS from "aos";
import "aos/dist/aos.css";

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:100px;
    margin-bottom: 20px;

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

    useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
               easing: 'ease-in-out',
          });
     }, []);


    return(
        <div data-aos="zoom-in">
            <DivInfo>
                <label>{label}</label>
                <span>{span}</span>
            </DivInfo>
        </div>
    )
}

export default SpanInformacoes