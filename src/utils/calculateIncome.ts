export function calculateIncome(oldCount: number, newCount: number) {
    const income = newCount / oldCount * 100 - 100
    return Math.round(income * 100) / 100
}