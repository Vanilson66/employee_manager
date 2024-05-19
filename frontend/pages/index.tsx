import { ChakraProvider } from '@chakra-ui/react';
import styles from "./index.module.css";

import Form from "../components/form";
import Table from "../components/table";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard Administrativo</h1>

        <div className={styles.container}>
          <div className={styles.toolsbar}>
            <Form />
          </div>

          <div>
            <Table></Table>
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
}