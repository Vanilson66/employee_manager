import { Button, Input, useDisclosure } from '@chakra-ui/react';
import { useReducer } from "react";
import styles from "./form.module.css";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

export default function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = () => {
    if (Object.keys(formData).length === 0) console.log("erro")
  }

  return (
    <>
      <Button
        colorScheme='blue'
        onClick={onOpen}
      >
        Adicionar funcionário
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar funcionário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>


            <form className={styles.display} onSubmit={handleSubmit}>
              <div className={styles.input}>
                <Input
                  onChange={setFormData}
                  placeholder='Nome completo'
                  name="name"
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={setFormData}
                  placeholder='Cargo'
                  name="position"
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={setFormData}
                  placeholder='Departamento'
                  name="department"
                />
              </div>
              <div className={styles.input}>
                <Input
                  placeholder='Data de admissão'
                  name="admissionDate"
                  size='md'
                  type='date'
                  onChange={setFormData}
                />
              </div>
            </form>
          </ModalBody>


          <ModalFooter>
            <Button colorScheme='red' variant='ghost' onClick={onClose}>fechar</Button>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => {
                handleSubmit()
                onClose()
              }}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}