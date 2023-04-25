import React, { FC } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
    FormControl, FormLabel, Input, Button, Text
} from '@chakra-ui/react'

type PropsType = {
    docType: string,
    onConfirm: () => void
}

// ! Minden jól működik, de testdatával írja felül a $userDatát. 
// ! Kellene egy logika, ami ezt az input mezőt belepusholja az assetsbe.

const CreateDocument: FC<PropsType> = ({ docType, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>Create {docType}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader >Create {docType}</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            Please enter a nem for the new {docType}.
                        </Text >
                        <FormControl>
                            <FormLabel>New {docType}'s name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>
                        <Text >
                            After {docType} is created, you can fill it's data table via editing the {docType}.
                        </Text >
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => {
                            onConfirm()
                            onClose()
                        }}>
                            Create {docType}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateDocument