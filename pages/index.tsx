import { Button, ChakraProvider } from '@chakra-ui/react';
import styles from "./index.module.css";

import Table from "../components/table";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard Administrativo</h1>

        <div className={styles.container}>
          <div className={styles.toolsbar}>
            <Button colorScheme='blue'>Adicionar funcionário</Button>
          </div>

          <div>
            <Table></Table>
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
}
