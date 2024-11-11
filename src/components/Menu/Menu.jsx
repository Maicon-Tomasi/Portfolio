import { useRef, useState } from "react";
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group'; 

const ContainerInfo = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     max-width: 1440px;
     margin: 0 auto;
     padding: 0 2%;
     position: relative;
     z-index: 1;

     h1{
          color: white;
     }
`

const BoxMenu = styled.div`
     display: flex;

     a{
          color: #ffffff;
          text-decoration: none;
          margin-right: 25px;
          font-size: 20px;

          @media (max-width: 500px) {
               display: none;
          }
     }
`

const ContainerMenuOverlay = styled.div`
     width: 100%;
     height: 100vh;
     position: absolute;
     top: 0;
     left: 0;
     background-color: rgba(0, 0, 0, 0.9); /* Cor do overlay com opacidade */
     z-index: 9999;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     color: white;
     opacity: 0; /* Começa invisível */
     transform: translateY(-100%); /* Começa fora da tela */

     &.menu-enter {
          opacity: 0;
          transform: translateY(-100%);
     }
     &.menu-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease;
     }
     &.menu-exit {
          opacity: 1;
          transform: translateY(0);
     }
     &.menu-exit-active {
          opacity: 0;
          transform: translateY(-100%);
          transition: opacity 0.5s ease, transform 0.5s ease;
     }
`

const MenuList = styled.ul`
     list-style-type: none;
     text-align: center;
     padding: 0;
     margin: 0;

     li {
          font-size: 24px;
          margin: 15px 0;
          cursor: pointer;
          margin-bottom: 30px;
          font-weight: 600;
          transition: 0.7s;
     }

     li:hover {
          color: aqua;
     }
`;

const CloseButton = styled.div`
     position: absolute;
     top: 20px;
     right: 20px;
     cursor: pointer;
     font-size: 30px;
`

const DiviIcons = styled.div`
     width: 100%;
     max-width: 200px;
     display: flex;
     justify-content: space-between;
`

const Menu = () => {
     const [menu, setMenu] = useState(false);
     const nodeRef = useRef(null);

     function abreFechaMenu() {
          setMenu(!menu);
     }

     return (
          <div>
               <ContainerInfo>
                    <h1>Maicon Tomasi</h1>
                    <BoxMenu>
                         <a href=""><FaPhone /> (66) 99698-9912</a>
                         <FaBars onClick={abreFechaMenu} color="white" size={25} style={{ display: menu ? "none" : "block" }} />
                    </BoxMenu>
               </ContainerInfo>

               <CSSTransition
                    in={menu}
                    nodeRef={nodeRef}
                    timeout={9999999999} // O tempo da animação
                    classNames="menu" // Referência para as classes CSS
               >
                    <ContainerMenuOverlay ref={nodeRef}>
                         <CloseButton onClick={abreFechaMenu}>
                              <FaTimes color="white" />
                         </CloseButton>
                         <MenuList>
                              <li>Home</li>
                              <li>About Me</li>
                              <li>What I Do</li>
                              <li>Resume</li>
                              <li>Portfolio</li>
                              <li>Contato</li>
                         </MenuList>
                         <DiviIcons>
                              <FaInstagram size={30}/>
                              <FaWhatsapp size={30} />
                              <FaGithub size={30}/>
                              <FaLinkedin size={30}/>
                         </DiviIcons>

                    </ContainerMenuOverlay>
               </CSSTransition>
          </div>
     )
}

export default Menu;
