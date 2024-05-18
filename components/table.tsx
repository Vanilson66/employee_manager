import styles from "./table.module.css";

export default function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headbar} >
          <th>
            <span>
              Nome
            </span>
          </th>
          <th>
            <span>
              E-mail
            </span>
          </th>
          <th>
            <span>
              Salário
            </span>
          </th>
          <th>
            <span>
              Açôes
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className={styles.table_line}>
          <td>
            <span>Vanilson</span>
          </td>
          <td>
            <span>vanilsonreact@gmail.com</span>
          </td>
          <td>
            <span>R$12.000</span>
          </td>
          <td>
            <button>
              editar
            </button>
            <button>
              apagar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}