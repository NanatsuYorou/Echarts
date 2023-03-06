import {calculateIncome} from "./calculateIncome";
import styles from "../components/ChartWithOneLine/Chart.module.scss";

export function setTooltip(prevChartPoint: number, currChartPoint: number) {
    const label = calculateIncome(prevChartPoint, currChartPoint)
    if (label > 0) {
        return `<div class="${styles.positiveIncome + " " + styles.tooltipContainer}">${"+" + label + "%"}</div>`
    }
    if (label < 0) {
        return `<div class="${styles.negativeIncome + " " + styles.tooltipContainer}">${label + "%"}</div>`
    }

    return `<div class=${styles.tooltipContainer}>${label + "%"}</div>`
}