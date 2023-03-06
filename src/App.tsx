import React from 'react';
import styles from './App.module.scss';
import Chart from './components/ChartWithOneLine/Chart';
import DynamicsBlock from './components/DynamicsBlock';
import ChartTwoLines from "./components/ChartWithTwoLines/ChartTwoLines";

const App = () => {

    return (
        <div id={'app'} className={styles.container}>
            <div className={styles.oneLineChart}>
                {/*TODO: передавать в DynamicsBlock значение текущей активной точки из Chart*/}
                {/*скорее всего получится передать это значение из функции formatter*/}
                <DynamicsBlock income={10}/>
                <Chart/>
            </div>
            <div className={styles.twoLinesChart}>
                <ChartTwoLines/>
            </div>
        </div>
    );
}

export default App;
