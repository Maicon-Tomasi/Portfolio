import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

// Estilização do botão
const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: aqua; /* Cor que combina com sua paleta */
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2B2E48; /* Cor mais escura ao hover */
    transform: scale(1.1);
  }
`;

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  // Mostrar o botão quando o scroll ultrapassar 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Rolar para o topo
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return <Button visible={visible} onClick={scrollToTop}>↑</Button>;
};

export default ToTop;
