import React, {FunctionComponent} from 'react';
import styles from './DynamicsBlock.module.scss';
import clsx from 'clsx';

type Props = {
    income: number
}

const DynamicsBlock: FunctionComponent<Props> = ({income}) => {

    const isIncomePositive = income > 0

    return (
        <div className={styles.dynamicsBlock}>
            <h2 className={styles.dynamicsHeading}>Динамика вакансий</h2>
            <div className={
                clsx(styles.dynamicsText, {
                    [styles.positiveIncome]: isIncomePositive,
                    [styles.negativeIncome]: !isIncomePositive
                })
            }>
                {income}%
            </div>
            <span className={styles.dynamicsTimePeriod}>за месяц</span>
        </div>
    )
}

export default DynamicsBlock;