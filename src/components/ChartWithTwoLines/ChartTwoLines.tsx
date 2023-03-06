import React, {useEffect} from 'react';
import {CanvasRenderer} from "echarts/renderers";
import * as echarts from 'echarts/core';
import {LineChart} from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    DataZoomComponent
} from 'echarts/components';
import styles from './ChartTwoLines.module.scss'
import options from './Options';

const ChartTwoLines = () => {

    useEffect(()=>{
        echarts.use([
            CanvasRenderer,
            LineChart,
            TitleComponent,
            TooltipComponent,
            GridComponent,
            DatasetComponent,
            TransformComponent,
            LegendComponent,
            DataZoomComponent
        ])

        const myChart = echarts.init(document.getElementById('twoLinesChart')!, undefined, { renderer: 'canvas' })
        myChart.setOption(options)
    })

    return (
        <div className={styles.chartContainer}>
            <select name="" id="" className={styles.select}>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
                <option value="">Выбрать профобласть</option>
            </select>
            <div id={'twoLinesChart'} className={styles.chartItem}></div>
        </div>
    )
}

export default ChartTwoLines;