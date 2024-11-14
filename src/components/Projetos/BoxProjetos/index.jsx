import { useState } from "react";
import styled from "styled-components";

const DivBoxProjeto = styled.div`
     width: 100%;
     max-width: 450px;
     height: 450px;
     overflow: hidden;
     position: relative;

     img {
          width: 100%;
          height: 100%;
     }

     &:hover div {
          opacity: 1;
     }

     @media (max-width: 1400px) {
          max-width: 380px;
          height: 380px;
     }

     @media (max-width: 460px) {
          max-width: 300px;
          height: 300px;
     }
`;

const DivOverlayProjeto = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(0, 0, 0, 0.8);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     opacity: 0;
     transition: opacity 0.5s ease;
     color: #fff;
     cursor: pointer;
`;

const SpanNomeCategoria = styled.span`
     font-size: 40px;
     font-weight: 900;
     margin: 30px 0;
`;

const FullscreenModal = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     background-color: rgba(0, 0, 0, 0.95);
     z-index: 9999;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     color: white;

`;

const ModalContent = styled.div`
     max-width: 800px;
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

const VideoArea = styled.div`
     width: 100%;
     max-height: 400px;
     margin-bottom: 80px;
     text-align: center;
     video {
          width: 100%;
          height: auto;
          border-radius: 8px;
     }

     @media (max-width: 1000px){
          max-width: 700px;
     }

     @media (max-width: 500px){
          margin-bottom: 20px;
          max-width: 500px;
     }

     @media (max-width: 400px){
          margin-bottom: 20px;
          max-width: 350px;
     }
`;

const DescriptionArea = styled.div`
     width: 100%;
     padding: 20px;
     background-color: rgba(255, 255, 255, 0.1);
     border-radius: 8px;
     text-align: center;

     @media (max-width: 1000px){
          padding: 10px;
     }

     @media (max-width: 500px){
          margin-top: 40px;
          max-width: 300px;
     }
`;

const CloseButton = styled.button`
     position: absolute;
     top: 20px;
     right: 50px;
     background: transparent;
     border: none;
     color: #fff;
     font-size: 32px;
     font-weight: bold;
     cursor: pointer;
     z-index: 10000;
`;

const BoxProjetos = ({ icone, img, nomeCategoria, video, descricao, tecnologias }) => {
     const [openModal, setOpenModal] = useState(false);

     const handleModalClick = () => {
          setOpenModal(!openModal);
     };

     return (
          <>
               <DivBoxProjeto>
                    <DivOverlayProjeto onClick={handleModalClick}>
                         {icone}
                         <SpanNomeCategoria>{nomeCategoria}</SpanNomeCategoria>
                         <span style={{ fontSize: '20px' }}>category</span>
                    </DivOverlayProjeto>
                    <img src={img} alt="" />
               </DivBoxProjeto>

               {openModal && (
                    <FullscreenModal>
                         <CloseButton onClick={handleModalClick}>&times;</CloseButton>
                         <ModalContent>
                              <VideoArea>
                                   <video controls src={video}></video>
                              </VideoArea>
                              <DescriptionArea>
                                   <p>
                                        {descricao}
                                   </p>
                                   <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                   {tecnologias && Array.isArray(tecnologias) && tecnologias.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                   ))}
                                   </div>
                                   
                              </DescriptionArea>
                         </ModalContent>
                    </FullscreenModal>
               )}
          </>
     );
};

export default BoxProjetos;
