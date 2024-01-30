import React from 'react'
import './ExpensesCard.css'
import Button from '../UI/Button'

const ExpensesCard = ({ el, onDelete }) => {
   return (
      <div className="expense-item">
         <h2 className="title">{el.title}</h2>
         <div className="item">
            <span className="price">{el.price}</span>
         </div>
         <Button onClick={() => onDelete(el.id)}>delete</Button>
      </div>
   )
}

export default ExpensesCard
