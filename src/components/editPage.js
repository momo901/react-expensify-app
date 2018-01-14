import React from 'react';
import ReactDOM from 'react-dom';
import FormExpense from './expenseForm';
import {connect} from 'react-redux';
import {editExpense} from '../actions/expenses';


const EditPage=(props)=>{
   const msg = ''
    return(
    <div>
        <h2>Edit page </h2>
        {msg && <h3>{msg}</h3>}
        <FormExpense 
            expense={props.expense}
            onSubmit={
               (expense)=>{
                   props.dispatch(editExpense(props.match.params.id,expense));
                     
                } 
            }
        />
    </div>
 )
};
const mapStateToProps =(state,props)=>{
    return {
    expense:state.expenses.find((expense)=> {
         if(expense.id === props.match.params.id){
        return  expense  
        }      
     })}
};
export default connect(mapStateToProps)(EditPage);