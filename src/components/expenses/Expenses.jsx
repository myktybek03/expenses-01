import React from 'react'
import ExpensesCard from './ExpensesCard'
import './Expenses.css'

const Expenses = (props) => {
   const { data } = props
   return (
      <div className="expenses-list">
         {data.map((el) => {
            return (
               <ExpensesCard el={el} key={el.id} onDelete={props.onDelete} />
            )
         })}
         {props.children}
      </div>
   )
}

export default Expenses
