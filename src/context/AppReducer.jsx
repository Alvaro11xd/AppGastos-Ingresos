// Agregando acciones y actualizando el estado segun la acccion
// eslint-disable-next-line react-refresh/only-export-components
export default (estado, accion)=>{
    switch(accion.type){
        // Añadiendo transaccion
        case "ADD_TRANSACTION":
            return {
                ...estado,
                transactions: [...estado.transactions, accion.payload],
            }
        case "DELETE_TRANSACTION":
            return {
                ...estado,
                transactions: estado.transactions.filter(
                    (transaction) => transaction.id !== accion.payload
                ),
            }
        default:
            return estado
    }
}