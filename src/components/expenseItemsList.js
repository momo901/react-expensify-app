import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {addExpense, removeExpense, editExpense} from '../actions/expenses';
import { browserHistory } from 'react-router';


const ExpenseItemsList=({description, amount , note ,id,dispatch,createAt,},props)=>(
    <div>
     <li>{description} - {amount} - {note} - date:{createAt}</li>
     <button onClick={()=> {dispatch(removeExpense({id}));}}>DELETE </button>
     <Link to={`/edit/${id}`

     }>Edit</Link>
    </div> 
 
)

const stateToProps = (state)=>({expenses: state.expenses})

export default connect(stateToProps)(ExpenseItemsList);
