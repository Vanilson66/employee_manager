import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Dashboard Administrativo</h1>

      <div className={styles.container}>
        <div className={styles.toolsbar}>
          <button>Adicionar funcionário</button>
        </div>

        <div>
        </div>
      </div>
    </main>
  );
}
