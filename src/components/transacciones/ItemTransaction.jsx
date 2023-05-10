import { useGlobalState } from "../../context/GloabalState"

const ItemTransaction = ({ transaction }) => {
    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.descripcion}</p>
            <div>
                <span>${transaction.monto}</span>
                <button onClick={() => {
                    deleteTransaction(transaction.id)
                }}>
                    x
                </button>
            </div>
        </li>
    )
}

export default ItemTransaction
