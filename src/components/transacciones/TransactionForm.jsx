import { useState } from "react"
import { useGlobalState } from "../../context/GloabalState"

const TransactionForm = () => {

    // Añadiendo transaccion
    const { addTransaction } = useGlobalState()

    // Manejando el estado de la descripcion y el monto
    const [descripcion, setDescripcion] = useState("")
    const [monto, setMonto] = useState(0)

    // Acciones al enviar el formulario
    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(), // Genrando id unico
            descripcion,
            monto: +monto
        });
        setMonto(0)
        setDescripcion("")
    }

    return (
        <div>
            {/* Formulario para hacer transacciones */}
            <form onSubmit={onSubmit}>
                <input type="text"
                    placeholder="Escribe una descripción"
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={descripcion}
                />
                <input type="number"
                    step={"0.01"}
                    placeholder="00.00"
                    onChange={(e) => setMonto(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={monto}
                />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-md block mb-2 w-full">
                    Agregar transacción
                </button>
            </form>
        </div>
    )
}

export default TransactionForm
