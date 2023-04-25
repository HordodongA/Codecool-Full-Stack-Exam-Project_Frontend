import { FC } from "react"
import { Button, useToast } from "@chakra-ui/react"


const ToastExample: FC = () => {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Operation successful',
            description: "Data successfully deleted from our system.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }

  export default ToastExample