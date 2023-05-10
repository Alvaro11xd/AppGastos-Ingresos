// COMPONENTES
import Balance from "./components/Balance"
import ExpenseChart from "./components/transacciones/ExpenseChart"
// import Header from "./components/Header"
import IngresosGastos from "./components/transacciones/IngresosGastos"
import ListaTransacciones from "./components/transacciones/ListaTransacciones"
import TransactionForm from "./components/transacciones/TransactionForm"

// CONTEXTO
import { GlobalProvider } from "./context/GloabalState"

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4xl font-bold">Rastreador de Gastos</h1>
              <IngresosGastos />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <ListaTransacciones />
            </div>
          </div>
        </div>
      </div>

    </GlobalProvider>
  )
}

export default App
