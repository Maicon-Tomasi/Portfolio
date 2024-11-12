import styled from "styled-components";

const BoxInfo = styled.div`
     color: #212529;
     border-bottom: 1px solid #ccc;
     margin-bottom: 15px;

     span{
          font-size: 26px;
          font-weight: 500;
          margin-bottom: -5px;
     }

     p:first-of-type {
          font-size: 20px;
          font-weight: 400;
          color: #212529;
          margin-bottom: 20px;
     }

     p:last-of-type {
          font-size: 20px;
          font-weight: 400;
          color: #8e9a9d;
          margin-top: 0;
     }
`


const BoxInformacoes = ({title, subtitle, children}) => {

     return(
          <BoxInfo>
               <span>{title}</span>
               <p>{subtitle}</p>
               <p>{children}</p>
          </BoxInfo>
     )

}

export default BoxInformacoes;