import React, { FC } from 'react'
// Import Chakra UI components
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    useDisclosure, Button, IconButton, Text
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'


type PropsType = {
    docType: string,
    docName: string,
    onConfirm: () => void
}

const ConfirmDeleteDocument: FC<PropsType> = ({ docType, docName, onConfirm }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)


    return (
        <>
            <Button
                as={IconButton}
                icon={<DeleteIcon boxSize={4} />}
                variant='solid'
                size='xs'
                position='absolute'
                transform={['translate(650%, -0.5em)', 'translate(900%, -1.9em)']}
                colorScheme='orange'
                width='20px'
                paddingLeft='auto'
                onClick={e => {
                    onOpen()
                    e.stopPropagation()
                }
                }
            >
                Delete {docType}
            </Button>
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='yellow3.100' >
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
                        <Button ref={initialRef} colorScheme='orange' onClick={() => {
                            onConfirm()
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

export default ConfirmDeleteDocument