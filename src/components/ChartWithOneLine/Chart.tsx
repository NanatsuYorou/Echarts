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
import options from './Options';
import styles from './Chart.module.scss';

const Chart = () => {

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

    const myChart = echarts.init(document.getElementById('chart')!)
    myChart.setOption(options)
    })
    return (
        <div className={styles.chartContainer}>
            {/*TODO: передавать в объект options входные данные для графиков,
            сейчас они указываются хардкодно, и лежат вместе со стилями графика что не очень удобно*/}
            {/*TODO: сделать скролл у графика при уменьшении его размера, возможно получится через dataZoom*/}
            {/*TODO: выделять активные точки на графике цветом*/}
            <div id={'chart'} className={styles.chartItem}></div>
        </div>
    )
}

export default Chart;