import { BiEdit } from 'react-icons/bi';
import Delete from "./delete_modal";
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
              Cargo
            </span>
          </th>
          <th>
            <span>
              Departamento
            </span>
          </th>
          <th>
            <span>
              Data de admissão
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
            <span>Full-Stack</span>
          </td>
          <td>
            <span>tecnologia</span>
          </td>
          <td>
            <span>18/05/2024</span>
          </td>
          <td>
            <button>
              <BiEdit className={styles.action_button} color='green' size={20} />
            </button>

            <Delete />
          </td>
        </tr>
      </tbody>
    </table>
  )
}