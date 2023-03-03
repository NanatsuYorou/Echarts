import {calculateIncome} from "./calculateIncome";
import styles from "../components/Chart.module.scss";

export function setTooltip(prevChartPoint: number, currChartPoint: number) {
    const label = calculateIncome(prevChartPoint, currChartPoint)
    if (label > 0) {
        return `<div class=${styles.positiveIncome}>${"+" + label + "%"}</div>`
    }
    if (label < 0) {
        return `<div class=${styles.negativeIncome}>${label + "%"}</div>`
    }

    return `<div class=${styles.zeroIncome}>${label + "%"}</div>`
}