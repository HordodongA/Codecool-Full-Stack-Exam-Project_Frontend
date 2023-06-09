import './App.css'
// Import components
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


function App() {

  return (

    <Container maxW='80%' minH='100vh' bg='yellow1.300' centerContent p='0' backgroundImage={'/main-background-pattern-5.png'} backgroundRepeat='no-repeat' backgroundPosition='bottom'>

      <Navbar />

      <Main />

      <Footer />

    </Container>

  )
}

export default App
