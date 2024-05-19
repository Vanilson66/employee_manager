import { Button, Input, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { BiEdit } from 'react-icons/bi';
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

export default function Form({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (typeof data === "object") setFormData(data);
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (Object.keys(formData).length === 0) console.log("erro");

    await api.post("/updateEmployee", {
      ...formData
    });
    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>
        <BiEdit
          className={styles.action_button}
          color='green'
          size={20}
        />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar funcionário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={styles.display} onSubmit={handleSubmit}>
              <div className={styles.input}>
                <Input
                  onChange={handleChange}
                  placeholder='Nome completo'
                  name="name"
                  value={formData.name || ""}
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={handleChange}
                  placeholder='Cargo'
                  name="position"
                  value={formData.position || ""}
                />
              </div>
              <div className={styles.input}>
                <Input
                  onChange={handleChange}
                  placeholder='Departamento'
                  name="department"
                  value={formData.department || ""}
                />
              </div>
              <div className={styles.input}>
                <Input
                  placeholder='Data de admissão'
                  name="admissionDate"
                  size='md'
                  type='date'
                  onChange={handleChange}
                  value={formData.admissionDate || ""}
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
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
