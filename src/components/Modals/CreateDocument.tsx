import React, { FC } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
    FormControl, FormLabel, Input, Button, Text
} from '@chakra-ui/react'

type PropsType = {
    buttonText: string,
    docType: string,
    onConfirm: () => void
}

const CreateDocument: FC<PropsType> = ({ buttonText, docType, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen}>Create {buttonText}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create {docType}</ModalHeader>
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
                        <Button variant='ghost' mr={3} onClick={() => onConfirm()}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Create {docType}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateDocument