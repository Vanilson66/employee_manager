import { Button, Input, useDisclosure } from '@chakra-ui/react';
import { useState } from "react";
import api from "../helpers/api";
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

export default function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (Object.keys(formData).length === 0) console.log("erro");

    await api.post("/createEmployee", formData);
    onClose();
  };

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
                  onChange={handleChange}
                  placeholder='Nome completo'
                  name="name"
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={handleChange}
                  placeholder='Cargo'
                  name="position"
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                handleSubmit();
                onClose();
              }}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
