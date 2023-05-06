import './App.css'
// Import components
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


function App() {

  return (

    <Container maxW='80%' minH='100vh' bg='yellow1.300' centerContent p='0'>

      <Navbar />

      <Main />

      <Footer />

    </Container>

  )
}

export default App
