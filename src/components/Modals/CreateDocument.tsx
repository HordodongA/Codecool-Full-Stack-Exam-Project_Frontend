import React, { FC, useState } from 'react'
// Import own hooks and states
import { UserDataType } from '../../states/userData'
// Import Chakra UI components
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Text
} from '@chakra-ui/react'


type PropsType = {
    userData: UserDataType,
    docType: string,
    pushNew: (data: { name: string }) => void,
    onConfirm: (data: UserDataType) => void
}

const CreateDocument: FC<PropsType> = ({ userData, docType, pushNew, onConfirm }) => {

    const [input, setInput] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    return (
        <>
            <Button colorScheme='green' onClick={onOpen} ref={finalRef}>Create {docType}</Button>

            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader >Create {docType}</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            Please enter a name for the new {docType}.
                        </Text >

                        <FormControl m='1rem 0' isRequired isInvalid={input === ""}>
                            <FormLabel>New {docType}'s name</FormLabel>
                            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Name' maxLength={30} ref={initialRef} />
                            {!(input === "") ? (
                                <FormHelperText>Maximum 30 characters.</FormHelperText>
                            ) : (
                                <FormErrorMessage>Name is required.</FormErrorMessage>
                            )}
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
                            pushNew({ name: input })
                            onConfirm(userData)
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