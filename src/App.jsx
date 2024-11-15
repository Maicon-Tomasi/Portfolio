import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Banner from './components/Banner/Banner';
import SobreMim from './components/SobreMim';
import Informacoes from './components/Informacoes';
import OQueFaco from './components/OQueFaco';
import Curriculo from './components/Curriculo';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import ToTop from './components/Totop';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

`

function App() {
  
  return (
    <div>
      <EstilosGlobais />
      <Banner />
      <Container>
        <SobreMim />  
        <Informacoes />
        <OQueFaco />
        <Curriculo />
        <Projetos />
      </Container>
      <Footer />
      <ToTop />
    </div>
  )
}

export default App
