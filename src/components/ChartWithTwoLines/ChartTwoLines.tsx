import React from 'react';
import {EChart} from '@hcorta/react-echarts';
import styles from './ChartTwoLines.module.scss'
import options from './Options';

const ChartTwoLines = () => {
    return (
        <div className={styles.chartContainer}>
            <select name="" id="" className={styles.select}>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
            </select>
            <EChart {...options}/>
        </div>
    )
}

export default ChartTwoLines;