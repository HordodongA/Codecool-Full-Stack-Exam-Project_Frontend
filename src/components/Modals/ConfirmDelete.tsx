import { FC } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    useDisclosure, Button, Text
} from '@chakra-ui/react'

type Props = {
    buttonText: string,
    docType: string,
    docName: string,
    onConfirm: () => void
}

const ConfirmDelete: FC<Props> = ({ buttonText, docType, docName, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>
            <Button colorScheme='red' onClick={onOpen}>Delete {buttonText}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete {docType}</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            Are you sure to permanently delete
                        </Text >
                        <Text >
                            {docType}: {docName}
                        </Text >
                        <Text >
                            You can't withdraw it.
                        </Text >
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        {/* <Button colorScheme='red'  onClick={onConfirm}>Confirm</Button> */}
                        <Button colorScheme='red' onClick={() => onConfirm()} >
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ConfirmDelete