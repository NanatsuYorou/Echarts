import React from 'react';
import {EChart} from '@hcorta/react-echarts'
import options from './Options'
import styles from "../components/Chart.module.scss";

const Chart = () => {

    return (
        <div className={styles.chartContainer}>
            {/*TODO: передавать в объект options входные данные для графиков,
            сейчас они указываются хардкодно, и лежат вместе со стилями графика что не очень удобно*/}
            {/*TODO: сделать скролл у графика при уменьшении его размера, возможно получится через dataZoom*/}
            <EChart {...options} />
        </div>
    )
}

export default Chart;