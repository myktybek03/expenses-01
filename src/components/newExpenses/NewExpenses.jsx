import React, { useState } from 'react'
import Button from '../UI/Button'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'

const NewExpenses = ({ onSubmit }) => {
   const [state, setState] = useState(false)

   function openAndCloseExpensesFormHandler() {
      setState((prev) => !prev)
   }

   return (
      <div className="new-expense">
         {state ? (
            <ExpensesForm
               onClick={openAndCloseExpensesFormHandler}
               onSubmit={onSubmit}
            />
         ) : (
            <Button onClick={openAndCloseExpensesFormHandler}>
               Добавить новый расход
            </Button>
         )}
      </div>
   )
}

export default NewExpenses
