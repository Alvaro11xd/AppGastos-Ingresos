import { useGlobalState } from "../../context/GloabalState"

const IngresosGastos = () => {

    const { transactions } = useGlobalState()

    const montos = transactions.map((transaction) => transaction.monto)

    const ingreso = montos
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const gasto = montos
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2) * -1

    return (
        <>
            <div className="flex justify-between my-2">
                <h4>Ingresos</h4>
                <p>{ingreso}</p>
            </div>
            <div className="flex justify-between my-2">
                <h4>Gastos</h4>
                <p>{gasto}</p>
            </div>
        </>
    )
}

export default IngresosGastos
