import { FC } from 'react'
// Import data for render
import infoPanelTexts from './infoPanelTexts'
// Import Chakra UI components
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    useDisclosure, Button, Text, IconButton, Icon
} from '@chakra-ui/react'
// Import React icons
import { IoIosHelp } from "react-icons/io"


type ProprsType = {
    help: string
}

const InfoPanel: FC<ProprsType> = ({ help }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    let message = ""
    for (const entry of infoPanelTexts) {
        if (entry.page === help) message = entry.text
    }


    return (
        <>
            <IconButton
                aria-label='Search database'
                icon={<Icon as={IoIosHelp} boxSize={6} />}
                size='xs'
                borderRadius='100'
                marginLeft='10px'
                bg='yellow1.800'
                color='yellow1.100'
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='yellow3.100' >
                    <ModalHeader>Informaiton about this page</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            {message}
                        </Text >
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='yellow' mr={3} onClick={onClose}>
                            close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default InfoPanel