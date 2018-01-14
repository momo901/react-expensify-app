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

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app')); 

