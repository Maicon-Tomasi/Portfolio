import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2%;
  position: relative;
  z-index: 1;

  h1 {
    color: white;
  }
`;

const BoxMenu = styled.div`
  display: flex;

  a {
    color: #ffffff;
    text-decoration: none;
    margin-right: 25px;
    font-size: 20px;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

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
`;

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
`;

const DiviIcons = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;

  a{
    color: white;
  }
`;

const SelectEstilizado = styled.select`
  margin-right: 15px;
  background: transparent;
  color: white;
  border-radius: 5px;

  option {
    color: black;
  }

  @media (max-width: 400px) {
    margin-right: 8px;
  }
`;

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const nodeRef = useRef(null);
  const { t, i18n } = useTranslation();

  const abreFechaMenu = () => {
    setMenu(!menu);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <ContainerInfo>
        <h1>{t("menu.name")}</h1>
        <BoxMenu>
          <a href="">
            <FaPhone /> {t("menu.phone")}
          </a>
          <SelectEstilizado onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="pt">Pt</option>
            <option value="en">En</option>
          </SelectEstilizado>
          <FaBars
            onClick={abreFechaMenu}
            color="white"
            size={25}
            style={{ display: menu ? "none" : "block" }}
          />
        </BoxMenu>
      </ContainerInfo>

      <CSSTransition
        in={menu}
        nodeRef={nodeRef}
        timeout={9999999999999}
        classNames="menu"
        unmountOnExit
      >
        <ContainerMenuOverlay ref={nodeRef}>
          <CloseButton onClick={abreFechaMenu}>
            <FaTimes color="white" />
          </CloseButton>
          <MenuList>
            <li><Link to="sobremim" smooth={true} duration={500}>{t("menu.aboutMe")}</Link></li>
            <li><Link to="oquefaco" smooth={true} duration={500}>{t("menu.whatIDo")}</Link></li>
            <li><Link to="habilidades" smooth={true} duration={500}>{t("menu.resume")}</Link></li>
            <li><Link to="projetos" smooth={true} duration={500}>{t("menu.portfolio")}</Link></li>
          </MenuList>
          <DiviIcons>
            <a href="https://www.instagram.com/maicon_tomasi/?hl=pt-br" target="_blank"><FaInstagram size={30} /></a>
            <a href="https://api.whatsapp.com/send?phone=5566996989912&text=Ol%C3%A1,%20vi%20seu%20portfolio%20e%20tenho%20interesse%20nos%20seus%20servi%C3%A7os!" target="_blank"><FaWhatsapp size={30} /></a>
            <a href="https://github.com/Maicon-Tomasi" target="_blank"><FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/maicon-wasmann-schuwartz-tomasi-a54646203/" target="_blank"><FaLinkedin size={30} /></a>
          </DiviIcons>
        </ContainerMenuOverlay>
      </CSSTransition>
    </div>
  );
};

export default Menu;
