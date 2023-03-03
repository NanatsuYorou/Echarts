import React from 'react';
import styles from './App.module.scss';
import Chart from "./components/Chart";
import DynamicsBlock from "./components/DynamicsBlock";

const App = () => {

    return (
        <div className={styles.container}>
            {/*TODO: передавать в DynamicsBlock значение текущей активной точки из Chart*/}
            {/*скорее всего получится передать это значение из функции formatter*/}
            <DynamicsBlock income={10}/>
            <Chart/>
        </div>
    );
}

export default App;
