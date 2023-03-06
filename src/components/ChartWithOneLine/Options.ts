import {setTooltip} from '../../utils/setTooltip';
import {ChartPoint} from '../../types/interfaces';
import {EChartsOption} from '../../types/interfaces';

const chartSourceData: ChartPoint[] = [
    ['Янв', 100],
    ['Фев', 300],
    ['Март', 100],
    ['Апр', 200],
    ['Май', 300],
    ['Июнь', 350],
    ['Июль', 250],
    ['Авг', 270],
    ['Сен', 250],
    ['Окт', 310],
    ['Нояб', 270],
    ['Дек', 330],
]

const option: EChartsOption = {
    tooltip: {
        trigger: "item"
    },
    legend: {
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: '0%',
        right: '5%',
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
    color: "#959799",
    backgroundColor: "#3C444E",
    xAxis: {
        type: 'category',
        splitLine: {
            lineStyle: {
                color: '#fff',
                opacity: 0.03
            },
            show: true
        },
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            type: 'line',
            symbolSize: 7,
            tooltip: {
                position: "top",
                show: true,
                formatter: (params) => {
                    if (params.dataIndex > 0) {
                        return setTooltip(Number(chartSourceData[params.dataIndex - 1][1]), Number(chartSourceData[params.dataIndex][1]))
                    }
                    return params.value.toString()
                }
            },
            data: chartSourceData,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: "rgba(255, 255, 255, 0.4)"
                    }, {
                        offset: 1, color: "rgba(0, 0, 0, 0)"
                    }],
                    global: false
                }
            }
        }]
};

export default option;