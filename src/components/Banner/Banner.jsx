import styled from "styled-components";
import TypeIt from 'typeit-react';
import BannerImage from '../../assets/Banner.jpg';
import Menu from "../Menu/Menu";


const Background = styled.div`
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* Ajuste conforme o tamanho que você deseja para o banner */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Cor do overlay com opacidade */
    z-index: 0; /* Colocado abaixo do conteúdo */
  }
`;

const SectionEstilizado = styled.section`
     display: flex;
     flex-direction: column;
     color: white;
     justify-content: center;
     align-items: center;
     margin-top: 180px;
     padding: 20px; 
     position: relative; /* Adicionei essa linha */
     z-index: 1; /* Garante que o conteúdo ficará acima do overlay */

     h1 {
          text-align: center;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 2.5rem;

          @media (max-width: 768px) {
               font-size: 1.8rem;
          }
          @media (max-width: 480px) {
               font-size: 1.5rem;
          }
     }
     
     h3 {
          text-align: center;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 1.5rem;

          @media (max-width: 768px) {
               font-size: 1.2rem;
          }
          @media (max-width: 480px) {
               font-size: 1rem;
          }
     }
`;


const SpanEstilizado = styled.span`
     font-size: 90px;
     color: white;
     font-weight: 600;
     display: inline-block;
     width: 100%;
     max-width: 600px;
     text-align: center;
     text-transform: uppercase;

     @media (max-width: 768px) {
          font-size: 60px;
          max-width: 400px;
     }
     @media (max-width: 480px) {
          font-size: 40px;
          max-width: 300px;
     }
`;

const CampoBotao = styled.div`
     width: 100%;
     margin-top: 15px;
     text-align: center;
`;

const BotaoEstilizado = styled.button`
     width: 200px;
     padding: 15px;
     background-color: aqua;
     border: 0;
     font-size: 17px;
     font-weight: 600;
     cursor: pointer;
     @media (max-width: 768px) {
          width: 150px;
          padding: 10px;
          font-size: 15px;
     }
     @media (max-width: 480px) {
          width: 120px;
          padding: 8px;
          font-size: 13px;
     }
`;

const Banner = () => {
     return (
          <Background>
               <Menu />
               <SectionEstilizado>
                    <h1>HI, I'M A DEVELOPER</h1>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                         <SpanEstilizado>
                              <TypeIt
                                   options={{
                                        strings: ["FRONT-END", "BACK-END", "FULL STACK"],
                                        speed: 100,
                                        deleteSpeed: 70,
                                        breakLines: false,
                                        loop: true
                                   }}
                              />
                         </SpanEstilizado>
                    </div>
                    <h3>Based in Campo Grande - MS, Brazil</h3>
                    <CampoBotao>
                         <BotaoEstilizado>View My Works</BotaoEstilizado>
                    </CampoBotao>
               </SectionEstilizado>
          </Background>
     );
};

export default Banner;
