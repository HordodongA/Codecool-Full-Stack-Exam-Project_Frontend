import React, { FC } from 'react'
// Import own hooks and states
import { useFormFields } from '../../hooks/useFormFields'
// Import Chakra UI components
import {
    Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Button, Text
} from '@chakra-ui/react'


type PropsType = {
    docType: string,
}

const EditDocument: FC<PropsType> = ({ docType }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    // ! DUMMY DATA - should get as props
    const assetForTest = { name: "Pincepalota", address: "Pécs", details: "pécsi menedék", credentials: "18882/855 hrsz", notes: "lorem ipsum dolor" }
    const [fields, handleFieldChange] = useFormFields(assetForTest);


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

                        <FormControl m='1rem 0' isRequired isInvalid={fields.name === ""}>
                            <Box>
                                <FormLabel>name</FormLabel>
                                <Input id="name" value={fields.name} onChange={(e) => handleFieldChange(e)} placeholder='Name' maxLength={30} ref={initialRef} />
                                {!(fields.name === "")
                                    ? (<FormHelperText>Maximum 30 characters.</FormHelperText>)
                                    : (<FormErrorMessage>Name is required.</FormErrorMessage>)}
                            </Box>
                        </FormControl>
                        <FormControl m='1rem 0' >
                            {fields && Object.keys(fields).filter(key => key !== "name").map((key, i) => {
                                return (
                                    <Box key={i}>
                                        <FormLabel>{key}</FormLabel>
                                        <Textarea id={key} value={fields[key]} onChange={(e) => handleFieldChange(e)} placeholder={key} />
                                    </Box>
                                )
                            })}

                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => {
                            console.log(fields)
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