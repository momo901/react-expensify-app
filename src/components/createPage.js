import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './expenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'


const CreatePage=(props)=>(
    <div>
        <h2>Create page </h2>
        <ExpenseForm 
            onSubmit={(expense)=>{
                    props.dispatch(addExpense(expense));
                }    
            }
           
        />
    </div>
);
const mapStateToProps = (state) => ({
    expenses : state.expenses
})
export default connect(mapStateToProps)(CreatePage);