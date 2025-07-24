import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const DivCard = styled.div`
     width: 400px;
     display: flex;
     align-items: center;
     flex-direction: column;
     color: #212529;
     margin: 40px 0;

     h3{
          font-weight: 600;
          font-size: 30px;
          margin-bottom: -5px;
     }

     p{
          text-align: center;
          font-size: 19px;
          color: #8e9a9d;
     }
`

const CardOqueFaco = ({icone, titulo, texto}) =>{

     useEffect(() => {
          AOS.init({
               duration: 500,
               once: true,
               easing: 'ease-in-out',
          });
     }, []);


     return(
          <div data-aos="fade-up">
               <DivCard>
                    {icone}
                    
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
               </DivCard>
          </div>
     )

}

export default CardOqueFaco;