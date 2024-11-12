import styled from "styled-components";
import TituloSubtitulo from "../TItuloSubtitulo"
import BoxInformacoes from "../BoxInfo";
import Habilidades from "../Habilidades";

const ContainerCurriculo = styled.div`
     display: flex;
     justify-content: center;
     gap: 100px;

     h2{
          color: #212529;
          font-size: 30px;
          margin-left: 20px;
          font-weight: 600;
     }

     @media (max-width: 1000px) {
          flex-direction: column;
     }
`

const CardsCurriculo = styled.div`
     width: 100%;
     max-width: 600px;
     display: flex;
     flex-direction: column;
     padding: 0 10px;
     border-left: 2px solid aqua;
     
`

const BotaoEstilizado = styled.button`
     width: 200px;
     background-color: white;
     padding: 10px;
     border: 2px solid black;
     font-weight: 500;
     transition: 1s;
     cursor: pointer;

     :hover {
          background-color: black;
          color: white;
     }
`




const Curriculo = () => {
     return(
          <>
               <TituloSubtitulo titulo="Resume" subtitulo="A Summary of My Resume" />

               <ContainerCurriculo>
                    <div>
                         <h2>My Education</h2>
                         <CardsCurriculo>
                              <BoxInformacoes title="Bachelor in Computer Science" subtitle="Uniderp, Campo Grande - MS / 2023 - 2026">
                                   The Computer Science course provides a comprehensive foundation in the principles of computing, programming, and network management. Students gain practical experience with software development, hardware troubleshooting, database management, and IT support. 
                              </BoxInformacoes>

                              <BoxInformacoes title="IT technician" subtitle="IFMT, Primavera Do Leste - MT / 2023 - 2026">
                                   The Information Technology Technician course is designed to equip students with essential skills in computer hardware, software, and network systems.Through hands-on training, students learn to troubleshoot and repair computers, install and configure operating systems, and manage networks. The course covers areas such as cybersecurity, database management, and IT support, providing a solid foundation for students. 
                              </BoxInformacoes>

                         </CardsCurriculo>
                    </div>

                    <div>
                         <h2>My Experience</h2>
                         <CardsCurriculo>
                              <BoxInformacoes title="Trainee Developer" subtitle="Genesis Marketing e Desenvolvimento, Campo Grande - MS / 10/2024">
                                   Veniam deserunt fugiat sit consectetur. Voluptate ut sint elit velit exercitation et nostrud. Sit deserunt excepteur eu amet nostrud anim enim in duis ad quis minim. Aliquip ut velit sint sint sunt fugiat duis elit aliquip elit. Officia pariatur incididunt elit et sint Lorem. Ullamco consequat velit ex minim labore aliquip fugiat.
                              </BoxInformacoes>

                              <BoxInformacoes title="Júnior Developer" subtitle="Sbr Prime, Campo Grande - MS / 02/2024 - 10/2024">
                                   At SBR Prime, I gained diverse experience in technical support, web design, and junior development, including customer support, manual testing, automated testing with Cypress, and developing new systems and websites using JavaScript and React. I contributed to ensuring product quality and aligning solutions with client needs.
                              </BoxInformacoes>
                         </CardsCurriculo>
                    </div>
               </ContainerCurriculo>

               <Habilidades />


               <div style={{textAlign: 'center', paddingBottom: '65px'}}>
                    <a href="/public/Curriculo-MaiconTomasi.pdf" download>
                         <BotaoEstilizado>Dowload CV</BotaoEstilizado>
                    </a>
               </div>

          </>

     )
}

export default Curriculo;