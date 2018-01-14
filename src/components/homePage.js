import React from 'react';
import Expenseslist from './expensesList';
import ExpenseFilterList from './expenseFilterList'
import ExpenseForm from './expenseForm';


const HomePage=()=>(
    <div>
        <ExpenseFilterList/>
        <Expenseslist />
    </div>
);
export default HomePage;