import React, {useEffect} from 'react';
import styles from "./doctorsBase.module.css";
import { getEmployees } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { requestGetEmployees } from "../../reducer/doctorBaseReducer";
import { NavLink } from "react-router-dom";

const DoctorsBase = ({setIdDoctor}) => {
  const doctorsInfo = useSelector((state) => state.doctorBasePage.employees);
  const dispatch = useDispatch();
  useEffect(() => {
    getEmployees().then((res) => dispatch(requestGetEmployees(res)));
  }, []);

  let sortLastName = doctorsInfo.sort((a, b) =>  a.lastName !== b.lastName ? a.lastName < b.lastName ? -1 : 1 : 0);

  return (
    <nav className={styles.wrapperDoctorsBase}>
      <h1>База Докторов</h1>
    <div className={styles.wrapperDoctorsInformation}>
      {sortLastName.map(({ id, firstName, lastName, middleName, birthDate, phone }) => {
          return (
            <div key={id} className={styles.givenDoctors}>
              <div>ID: {id}</div>
              <div>ФИО: <NavLink onClick={() => setIdDoctor(id)} to="/WorkFlow" style={{cursor: "pointer", color: "black", textDecoration: "none"}}>
                   {lastName} {firstName} {middleName}
                </NavLink>
              </div>
              <div>Дата рождения: {birthDate.split("-").reverse().join("-")}</div>
              <div>Телефон: {phone}</div>
            </div>
          );
        }
      )}
    </div>
    </nav>
  );
};

export default DoctorsBase;