import './App.css'
// Import components
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
// Import Chakra UI components
import { Stack, HStack, VStack, Container } from '@chakra-ui/react'


function App() {

  return (

    <Container maxW='80%' bg='gray.100' centerContent p='0'>
      {/* <VStack> */}


        <Navbar />

        <Main />

        <Footer />


      {/* </VStack> */}
    </Container>

  )
}

export default App
