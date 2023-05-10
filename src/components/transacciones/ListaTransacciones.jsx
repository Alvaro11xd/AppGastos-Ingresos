import { useGlobalState } from "../../context/GloabalState"
import ItemTransaction from "./ItemTransaction"

const ListaTransacciones = () => {

    const { transactions } = useGlobalState()

    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold w-full">Historial</h3>
            <ul>
                {transactions.map(transaction => (
                    <ItemTransaction
                        transaction={transaction}
                        key={transaction.id}
                    />
                ))}
            </ul>
        </>
    )
}

export default ListaTransacciones
