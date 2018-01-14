import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const demoState ={
    expenses:[{
        id:'4543qdq654541',
        description:'',
        note:'this is a web site provide a service of find the perfect job for them',
        amount:'5000',
        creactAt:0
    }],
    
    filters:{
        text:'announce',
        sortedBy:'date',
        startDate:undefined,
        endDate:undefined
    }

}


///====================== dipatch functions

const addExpense=({description,note,amount,createAt}={})=>({
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createAt
        }
});

const removeExpense=({id})=>({
    type:'REMOVE',
    id
})

const editExpense =(id,Expensetype)=>({
    type:'EDIT',
    id,
    Expensetype
})

const setExpense =(id,createAtUpdate)=>({
    type:'SET_VALUE',
    id,
    createAtUpdate
})







//====================Expense reducers ==========================


const defaultExpensesState=[];
const reducerExpenses=(state=defaultExpensesState,action)=>{
        switch(action.type) {
        case 'ADD_EXPENSE':

             return ([...state, action.expense]); 
        case 'REMOVE':
            return ( state.filter(({id})=>(id!=action.id) ));
        case 'EDIT':
        return state.map((expense)=>{
                if (action.id===expense.id){
                    return { ...expense,...action.Expensetype}
                }else{
                    return expense;
                }
            });
        case 'SET_VALUE':
        return state.map((expense)=>{
            if (expense.id===action.id)
            {
                return {...expense,...action.createAtUpdate}
            }
            else{
                return expense;
            }
        })
        default: return  state;      
        };
};




//========================FILTERS FUNCTION======================

const setFilterText=(text='')=>({
    type:'SET_FILTER_TEXT',
    text
})

const setFilterByDate=(date)=>({
    type:'SET_FILTER_DATE',
    date
})

const setFilterByAmount=(amount='')=>({
    type:'SET_FILTER_AMOUNT',
    amount
})

const setFilterStartDate=(startDate='')=>({
    type:'SET_FILTER_START_DATE',
    startDate
})

const setFilterEndDATE=(endDate='')=>({
    type:'SET_FILTER_END_DATE',
    endDate
})
//================= FILTER REDUCER ====================

const defaultFiltersState={
        text:'',
        sortedBy:'date',
        //sortedByDate:undefined,
        startDate:undefined,
        endDate:undefined
};
const reducerFilters=( state=defaultFiltersState,action )=>{
        switch (action.type){
        case 'SET_FILTER_TEXT': 
            return {...state, text:action.text} 
        case 'SET_FILTER_DATE': 
            return {...state, sortedBy:action.date}
        case 'SET_FILTER_AMOUNT': 
            return {...state, sortedBy:action.amount}
        case 'SET_FILTER_START_DATE': 
            return {...state, startDate:action.startDate}
        case 'SET_FILTER_END_DATE': 
            return {...state, endDate:action.endDate}    
          default: return state; 
        }  
    };

const store = createStore(
    combineReducers({
        expenses:reducerExpenses,
        filters: reducerFilters
    })
);

//const store = createStore(reducerExpenses);

//======================getVISIBILITY=====================

const getVisibilityExpenses = (expenses , {text, sortedBy, startDate,  endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number' || expense.createAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt<= endDate;
        const textMatch = typeof text =='string' && expense.description.toLowerCase().includes(text.toLowerCase().trim())
            return startDateMatch && endDateMatch && textMatch ;
    }).sort((a,b)=>{
        if ( sortedBy ==='amount'){
          return (a.amount < b.amount ? 1 : -1);  
        }
        else 
        if (sortedBy === 'date')
          return (a.createAt < b.createAt ? 1 : -1);          
        
    });
}




//===================== DISPATCH LIST =========================

store.subscribe(()=>{
    const state = store.getState();
    const vibilityExpenses = getVisibilityExpenses(state.expenses,state.filters)
    console.log(vibilityExpenses);
})

const expenseZero=store.dispatch(addExpense({
    description:'web developper work offer',
    note:'this is a web site provide a service of find the perfect job for them',
    amount:3000,
    createAt:60000
}));



const expenseSix=store.dispatch(addExpense({
    description:'java dev',
    note:'this is a web site provide a service of find the perfect job for them',
    amount:100,
    createAt:500
}));

const expenseSeven=store.dispatch(addExpense({
    description:'web archetecte',
    note:'this is a web site provide a service of find the perfect job for them',
    amount:4000,
    createAt:250
}));

const expenseNine=store.dispatch(addExpense({
    description:'graphic designer',
    note:'this is a web site provide a service of find the perfect job for them',
    amount:575,
    createAt:20000
}));
// const expenseFive=store.dispatch(addExpense({
//     description:'graphiste designer',
//     note:'find the perfect job for them for a designer',
//     amount:1000,
//     createAt:50000
// }));



// const expenseOne=store.dispatch(addExpense({
//     description:'java developer',
//     note:'this is a web site provide a service of find the perfect job for them',
//     amount:5000,
//     createAt:-60000
// }));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
   
// store.dispatch(editExpense( expenseZero.expense.id ,{Expensetype:'private'}));

// store.dispatch(setExpense(expenseZero.expense.id,{createAt: '21/12/2017'}));

//store.dispatch(setFilterText(''));
 //store.dispatch(setFilterStartDate(-60000));
 //store.dispatch(setFilterEndDATE(-60001));
 store.dispatch(setFilterByAmount('amount'))
 //store.dispatch(setFilterByDate('date'))


//store.dispatch(setFilter());

//store.dispatch(setFilter());
//console.log(expenseZero.expense.id);
// const combineReducers = ({
//     reducerExpenses,
//     reducerfilters
// });

