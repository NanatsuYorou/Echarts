import {EChartsOption} from '../../types/interfaces'
import styles from './ChartTwoLines.module.scss'

const options: EChartsOption = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        data: ['2021', '2022'],
        top: 0,
        right: 0,
        icon: 'roundRect',
        itemHeight: 8,
        textStyle: {
            fontSize: 14
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true,
    },
    dataZoom: [{
        type: 'inside',
        xAxisIndex: 0,
        start: 0,
        end: 30,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
    }],
    xAxis: {
        type: 'category',
        splitLine: {
            lineStyle: {
                color: '#FAFAFA',
            },
            show: true
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data:
            [
                {value: 'Янв', textStyle: {color: "#afafaf"}},
                {value: 'Фев', textStyle: {color: "#afafaf"}},
                {value: 'Март', textStyle: {color: "#afafaf"}},
                {value: 'Апр', textStyle: {color: "#afafaf"}},
                {value: 'Май', textStyle: {color: "#afafaf"}},
                {value: 'Июнь', textStyle: {color: "#afafaf"}},
                {value: 'Июль', textStyle: {color: "#afafaf"}},
                {value: 'Авг', textStyle: {color: "#afafaf"}},
                {value: 'Сен', textStyle: {color: "#afafaf"}},
                {value: 'Окт', textStyle: {color: "#afafaf"}},
                {value: 'Нояб', textStyle: {color: "#afafaf"}},
                {value: 'Дек', textStyle: {color: "#afafaf"}}],
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            name: '2021',
            type: 'line',
            symbolSize: 8,
            emphasis: {
                itemStyle: {
                    borderColor: '#3C9DF2',
                },
            },
            data: [3, 4, 4.3, 3, 2, 2.8, 2.9, 2.8, 2.9, 2.8, 2.85, 2.9, 2.85],
            tooltip: {
                formatter: `<div class=${styles.test}>{c0}</div>`,
                position: 'top'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: "rgba(60, 157, 242, 0.12)"
                    }, {
                        offset: 1, color: "rgba(60, 157, 242, 0)"
                    }],
                    global: false
                }
            }
        },
        {
            name: '2022',
            type: 'line',
            symbolSize: 8,
            data: [2.5, 2.8, 4.3, 4.7, 4.8, 4.5, 4.6, 4.5, 4.3, 4.5, 4.4, 4.3],
            tooltip: {
                formatter: `<div class=${styles.test}>{c0}</div>`,
                position: 'top'
            },
            emphasis: {
                itemStyle: {
                    borderColor: '#60BF63',
                },
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: "rgba(75, 178, 78, 0.12)"
                    }, {
                        offset: 1, color: "rgba(75, 178, 78, 0)"
                    }],
                    global: false
                }
            }
        }
    ]
}

export default options;