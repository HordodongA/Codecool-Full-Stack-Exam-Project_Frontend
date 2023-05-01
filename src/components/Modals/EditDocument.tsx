import React, { FC } from 'react'

// Import Chakra UI components
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
    /* FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, */ Button, Text
} from '@chakra-ui/react'


type PropsType = {
    docType: string,
}

const EditDocument: FC<PropsType> = ({ docType }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    return (
        <>
            <Button colorScheme='green' onClick={onOpen} ref={finalRef}>Edit {docType}</Button>

            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader >Edit {docType}</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            Edit fields than press save to update {docType}.
                        </Text >
                        {/* // ! FORM SECTION
                        <FormControl m='1rem 0' isRequired isInvalid={input === ""}>
                            <FormLabel>New {docType}'s name</FormLabel>
                            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Name' maxLength={30} ref={initialRef} />
                            {!(input === "") ? (
                                <FormHelperText>
                                    Maximum 30 characters.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Name is required.</FormErrorMessage>
                            )}
                        </FormControl> */}

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => {
                            onClose()
                        }}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default EditDocument