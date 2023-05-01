import { FC } from 'react'
// Import data for render
import infoPanelTexts from './infoPanelTexts'
// Import Chakra UI components
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    useDisclosure, Button, Text, IconButton
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'


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
                icon={<InfoOutlineIcon boxSize={6} />}
                size=''
                borderRadius='100'
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Informaiton about this page</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            {message}
                        </Text >
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default InfoPanel