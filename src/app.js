import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/appRouter';
import {Provider} from 'react-redux'
import configueStore from './store/configueStore';
import {addExpense} from './actions/expenses';
import {setFilterText, setFilterByAmount, setFilterByDate} from './actions/filters';
import getVisibilityExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
//=====================================================================================

const store = configueStore();

store.dispatch(addExpense({description:'water Bill', amount:5000, note:'job offer',createAt:5000}));
store.dispatch(addExpense({description:'electricity bill', amount:250 ,note:'urgent!!',createAt:100}));
store.dispatch(addExpense({description:'internet bill', amount:2000 ,note:'urgent!!',createAt:6500}));

//store.dispatch(setFilterText('bill'));
//store.dispatch(setFilterByAmount());


const state= store.getState();
const visibilityExpense = getVisibilityExpenses(state.expenses,state.filters);
console.log(visibilityExpense);
//console.log(state.filters)

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app')); 

