import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import './ExpensesForm.css'

const ExpensesForm = ({ onClick, onSubmit }) => {
   // Используем состояние для хранения
   const [inputText, setInputText] = useState('')
   const [inputNumber, setInputNumber] = useState(0)
   const [inputDate, setInputDate] = useState(null)

   // Обрабочтик изменения значения данных
   const getInputTextValue = (e) => {
      // Обновдяем состояние при изменения значения ввода
      setInputText(e.target.value)
   }

   const getInputNumberValue = (e) => {
      setInputNumber(e.target.value)
   }

   const getInputDateValue = (e) => {
      setInputDate(e.target.value)
   }

   const submitHandler = () => {
      const product = {
         title: inputText,
         price: inputNumber,
         date: inputDate,
      }
      onSubmit(product)

      setInputText('')
      setInputNumber('')
      setInputDate('')
   }

   return (
      <form>
         <div className="expense-form_input">
            {/* Управляемый компонент с двусторонней привзкой */}
            <Input
               type="text"
               placeholder="Заголовок"
               children="Заголовок"
               value={inputText}
               onChange={getInputTextValue}
            />
            <Input
               type="number"
               placeholder="Количество"
               children="Количество"
               value={inputNumber}
               onChange={getInputNumberValue}
            />
            <Input
               type="date"
               placeholde="Датировать"
               children="Датировать"
               value={inputDate}
               onChange={getInputDateValue}
            />
            <div className="button">
               <Button onClick={onClick} marginRight="15px">
                  Отмена
               </Button>
               <Button onClick={submitHandler}>Добавить расходы</Button>
            </div>
         </div>
      </form>
   )
}

export default ExpensesForm
