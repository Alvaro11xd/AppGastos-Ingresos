// Creando un nuevo contexto
// Para relacionar componentes
import { createContext, useContext, useEffect, useReducer } from "react"
import AppReducer from "./AppReducer";

export const Context = createContext()

// Creando un Custoom Hook
// Para ahorrarme el tiempo de usar el Contexto en todos los componentes
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = ()=>{
    const context = useContext(Context)
    return context
};

// Arreglo para añadir nuevas transacciones
const initialState = {
    transactions: []
}


// Usando el contexto
export const GlobalProvider = ({ children }) => {
    // Manejando el estado de una mejor manera que useState
    const [estado, dispatch] = useReducer(AppReducer,initialState,

        // LOCALSTORAGE
        // Leyendo valores y asignandolo en el estado
        ()=>{
            const datosLocales = localStorage.getItem('transactions')
            return datosLocales ? JSON.parse(datosLocales) : initialState
        });

        // Guardando valores en el local storage
        useEffect(()=>{
            localStorage.setItem('transactions', JSON.stringify(estado))
        }, [estado])
        

    // Añadiendo transaccion
    const addTransaction = (transaction)=>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    // Eliminando transaccion
    const deleteTransaction = (id)=>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transactions: estado.transactions,
            addTransaction,
            deleteTransaction,
        }}>
            {children}
        </Context.Provider>
    )
}