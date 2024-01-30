import { useState } from 'react'
import './App.css'
import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/newExpenses/NewExpenses'

const productData = [
   {
      title: 'Alma',
      price: 120,
      date: new Date(2021, 5, 12),
      id: '1',
   },
   {
      title: 'Car',
      price: 200000,
      date: new Date(2022, 5, 12),
      id: '2',
   },
   {
      title: 'Flower',
      price: 500,
      date: new Date(2023, 5, 12),
      id: '3',
   },
]

function App() {
   const [newProduct, setNewProduct] = useState(productData)

   console.log('component rendering')

   const addNewExpensesHandler = (data) => {
      setNewProduct([...newProduct, data])
   }

   const deleteExpenses = (id) => {
      const newData = newProduct.filter((el) => el.id !== id)
      setNewProduct(newData)
   }

   return (
      <div className="App">
         <NewExpenses onSubmit={addNewExpensesHandler} />
         <Expenses data={newProduct} onDelete={deleteExpenses} />
      </div>
   )
}

export default App
