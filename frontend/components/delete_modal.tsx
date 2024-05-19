import { Button, useDisclosure } from '@chakra-ui/react';
import { useRef } from "react";
import { BiTrashAlt } from 'react-icons/bi';
import api from "../helpers/api";


import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/react';


export default function Delete_Modal({ _id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const deleteEmployee = async () => {
    await api.post("/deleteEmployee", {
      _id
    })
    onClose()
  }

  return (
    <>
      <button onClick={onOpen}>
        <BiTrashAlt
          // className={styles.action_button} 
          color='red'
          size={20}
        />
      </button>

      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Apagar Funcionário
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza? Esta ação não poderá ser desfeita.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme='red'
                onClick={deleteEmployee}
                ml={3}>
                Apagar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}