import { VictoryPie, VictoryLabel } from "victory"
import { useGlobalState } from "../../context/GloabalState"

const ExpenseChart = () => {
    const { transactions } = useGlobalState()

    const totalIngresos = transactions
        .filter((transaction) => transaction.monto > 0)
        .reduce((acc, transaction) => (acc += transaction.monto), 0)

    const totalGastos = transactions
        .filter((transaction) => transaction.monto < 0)
        .reduce((acc, transaction) => (acc += transaction.monto), 0) * -1

    const totalGastosPorcentaje = Math.round((totalGastos / totalIngresos) * 100)
    const totalIngresosPorcentaje = 100 - totalGastosPorcentaje

    return (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Gastos", y: totalGastosPorcentaje },
                { x: "Ingresos", y: totalIngresosPorcentaje },
            ]}
            animate={{
                duration: 200,
            }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={
                <VictoryLabel
                    angle={45}
                    style={{
                        fill: "white"
                    }}
                />
            }
        />
    )
}

export default ExpenseChart
