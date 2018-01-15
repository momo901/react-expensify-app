import React from 'react';
import Expenseslist from './expensesList';
import ExpenseFilterList from './expenseFilterList'


const HomePage=()=>(
    <div>
        <ExpenseFilterList/>
        <Expenseslist />
    </div>
);
export default HomePage;