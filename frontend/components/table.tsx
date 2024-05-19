import { useEffect, useState } from 'react';
import api from "../helpers/api";

import Delete from "./delete_modal";
import Edit from "./edit_form";
import styles from "./table.module.css";


export default function Table() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    api.get("/getEmployees")
      .then(({ data }) => {
        setEmployees(data)
        console.log(data);

      }).catch(err =>
        console.log(err)
      )
  }, [])

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
        {employees.map(object => (
          <tr className={styles.table_line}>
            <td>
              <span>{object.name}</span>
            </td>
            <td>
              <span>{object.position}</span>
            </td>
            <td>
              <span>{object.department}</span>
            </td>
            <td>
              <span>{object.admissionDate}</span>
            </td>
            <td>
              <Edit data={object} />

              <Delete _id={object._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}