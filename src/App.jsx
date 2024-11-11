import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Banner from './components/Banner/Banner';
import SobreMim from './components/SobreMim';
import Informacoes from './components/Informacoes';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
`

const CentralizaTexto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`

function App() {
  
  return (
    <div>
      <EstilosGlobais />
      <Banner />
      <Container>
        <SobreMim />  
        <Informacoes />
      </Container>
      
    </div>
  )
}

export default App
