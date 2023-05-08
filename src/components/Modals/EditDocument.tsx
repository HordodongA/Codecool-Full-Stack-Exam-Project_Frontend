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
    dataForEdit: { [key: string]: string },
    updateAsset: (data: { [key: string]: string }) => void,
    onConfirm: () => void
}

const EditDocument: FC<PropsType> = ({ docType, dataForEdit, updateAsset, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [fields, handleFieldChange] = useFormFields(dataForEdit)


    return (
        <>
            <Button colorScheme='yellow' onClick={onOpen} ref={finalRef}>edit {docType}</Button>

            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                <ModalOverlay />
                <ModalContent bg='yellow3.100' >
                    <ModalHeader >Edit {docType}</ModalHeader>
                    <ModalCloseButton borderRadius='100' />
                    <ModalBody>
                        <Text >
                            Edit fields than press save to update {docType}.
                        </Text >

                        <FormControl m='1rem 0' isRequired isInvalid={fields.name === ""}>
                            <Box>
                                <FormLabel>name</FormLabel>
                                <Input id="name" value={fields.name} onChange={(e) => handleFieldChange(e)} placeholder='Name' maxLength={30} ref={initialRef} focusBorderColor='yellow3.500' spellCheck='false' />
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
                                        <Textarea id={key} value={fields[key]} onChange={(e) => handleFieldChange(e)} placeholder={key} focusBorderColor='yellow3.500' spellCheck='false' />
                                    </Box>
                                )
                            })}

                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='yellow' onClick={() => {
                            updateAsset(fields)
                            onConfirm()
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