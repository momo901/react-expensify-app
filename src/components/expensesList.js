import React from 'react';
import {connect} from 'react-redux';
import {addExpense, removeExpense } from '../actions/expenses'
import ExpenseItemsList from '../components/expenseItemsList'
import expenseItemsList from '../components/expenseItemsList';
import selectFilter from '../selectors/expenses'

const ExpensesList=(props)=>(
        <div>
            <h2>expenses list:</h2>
            {props.expenses.map((expense)=>{ 
                return (
                        
                       <ExpenseItemsList key={expense.id} {...expense}/>
                    
                    );
            })}

        </div>  
      
    
);
const stateToProps=(state)=>({
       expenses:selectFilter(state.expenses,state.filters)
    });


export default connect(stateToProps)(ExpensesList);
