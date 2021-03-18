import React, { useState } from "react";
import styles from './app.module.css'
import { Redirect, Route, Switch } from "react-router-dom";
import DoctorsBase from './components/doctorsBase/DoctorsBase';
import WorkFlow from "./components/workFlow/WorkFlow";

const App = () => {
  const [idDoctor, setIdDoctor] = useState(0);

  return (
    <div className={styles.wrapperApp}>
      <Switch>
        <Redirect exact from='/' to='/DoctorsBase' />
        <Route exact path='/DoctorsBase' render={() => <DoctorsBase setIdDoctor={setIdDoctor} />}/>
        <Route exact path='/WorkFlow' render={() => <WorkFlow idDoctor={idDoctor} />} />
        <Route render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
      </Switch>
    </div>
  )
}

export default App;