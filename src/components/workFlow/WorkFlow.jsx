import React, { useEffect, useState } from "react";
import styles from "./workFlow.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWorklog } from "../../api";
import { requestGetWorklog } from "../../reducer/workFlowReducer";
import { NavLink } from "react-router-dom";

const WorkFlow = ({ idDoctor }) => {
  const getWorklogs = useSelector((state) => state.workFlowPage.worklogs);
  const dispatch = useDispatch();
  useEffect(() => {
    getWorklog().then((res) => dispatch(requestGetWorklog(res)));
  }, []);

  const dataFrom = getWorklogs.map(({ from, employee_id, id }) => ({
    from,
    employee_id,
    id,
  }));
  const dataTo = getWorklogs.map(({ to, employee_id, id }) => ({
    to,
    employee_id,
    id,
  }));
  const sortData = [...dataFrom, ...dataTo].sort((a, b) => {
    const x = a.from || a.to;
    const y = b.from || b.to;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  let num = 0;

  sortData.forEach((el) => {
    if (el.from) {
      num++;
    } else {
      num--;
    }

    if (num < 3) {
      el.error = true;
    }
  });

  return (
    <nav className={styles.wrapperWorkFlow}>
        <h1>Расписание:</h1>
        <NavLink to={'/'}><button className={styles.buttonHeadeBack}>Назад</button></NavLink>
      <div className={styles.wrapperSchedule}>
        {getWorklogs.map(({ id, employee_id, from, to }) => {
          const currentWorker = sortData.find(
            ({ id: idSortData, to }) => idSortData === id && to
          );
          const error = (currentWorker && currentWorker.error) || false;
          if (idDoctor === employee_id) {
            return (
              <div key={id} className={styles.wrapperIntervalWork}>
                <div>Пришел: {from}</div>
                <div style={error ? { color: "red" } : {}}>Ушел: {to}</div>
              </div>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default WorkFlow;
