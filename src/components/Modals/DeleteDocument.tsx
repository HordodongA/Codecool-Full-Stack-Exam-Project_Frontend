import { FC } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    useDisclosure, Button, Text
} from '@chakra-ui/react'
import { UserDataType } from '../../states/userData'


type PropsType = {
    docType: string,
    docName: string,
    index: number,
    userData: UserDataType,
    removeResource: (i: number) => void
    onConfirm: (data: UserDataType) => void
}

const DeleteDocument: FC<PropsType> = ({ docType, docName, index, userData, removeResource, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>Delete {docType}</Button>

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
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={() => {
                            removeResource(index)
                            onConfirm(userData)
                            onClose()
                        }} >
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteDocument