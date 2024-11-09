import styled from 'styled-components'
import './App.css'
import EstilosGlobais from './components/EstilosGlobais'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2%;
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
      
    </div>
  )
}

export default App
