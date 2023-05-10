// El contexto tiene los datos

import { useGlobalState } from "../context/GloabalState"

// Se usa en los componentes
const Balance = () => {

    // Usando el contexto
    const { transactions } = useGlobalState()

    const montos = transactions.map(transaction => transaction.monto)
    const total = montos.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className="flex justify-between">
            <h3>Tu balance</h3>
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    )
}

export default Balance
